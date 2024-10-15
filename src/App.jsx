import "./App.css";
import { useState, useEffect } from "react";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/Products/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Set to true initially
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) && // Use title instead of name
      (!stockChecked || product.stock > 0)
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    };
    getProducts();
  }, []);

  return (
    <FilterProductTable>
      <div className="flex justify-center items-center my-4">
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
      />
      </div>
      {!loading ? (
        <div className="flex flex-wrap gap-5">
          {products.map((product) => (
          <ProductCard
          key={`product-${product.id}`}
        imageSrc={product.image}
      name={product.title}
      ></ProductCard>
          ))}
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </FilterProductTable>
  );
}

export default App;