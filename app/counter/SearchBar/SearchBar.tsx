'use client';

import React, { useState } from "react";
import './SearchBar.css';

interface SearchBarProps {
  products: string[];
}

const SearchBar = (props: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  // Fixed: Case-insensitive filtering
  const filterProducts = props.products.filter((product: string) =>
    product.toLowerCase().includes(searchValue.toLowerCase())
  );

  const displayClear = searchValue.length > 0;

  return (
    <div style={{ background: 'black' }}>
      <input
        style={{ background: '#212121', marginTop: 10, marginLeft: 5, marginBottom: 10 }}
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      {displayClear && <button onClick={handleClear}>Clear</button>}

      <ul>
        {filterProducts.map((product: string) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;