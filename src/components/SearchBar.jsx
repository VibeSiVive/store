import React from "react";

const SearchBar = ({
  query,
  setQuery,
  stockChecked,
  setStockChecked,
  sort,
  setSort,
}) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type here"
        className="border-2 rounded-lg p-2 border-pink-300"
      />
      <div>
        <input
          type="checkbox"
          checked={stockChecked}
          onChange={(e) => setStockChecked(e.target.checked)}
        />
        Only show products in stock
      </div>
      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
};

export default SearchBar;