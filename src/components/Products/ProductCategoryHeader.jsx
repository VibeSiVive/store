//ProductCategoryHeader.jsx

import React from 'react';
import Table from "../Table";


const ProductCategoryHeader = ({ text }) => {
  return (
    <Table.Row>
        <Table.ColumnHeader colSpan="2"> { text } </Table.ColumnHeader>
    </Table.Row>
  );
};

export default ProductCategoryHeader;
