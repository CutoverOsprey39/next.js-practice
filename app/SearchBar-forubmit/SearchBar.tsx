'use client';

import React, { useState } from "react";

// Define Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Update props to accept Product[]
interface SearchBarProps {
  products: Product[];
}

const SearchBar = ({ products }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  // FIX: Use product.title instead of product
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const showClear = searchValue.length > 0;

  return (
    <div style={{ background: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          style={{
            background: '#212121',
            color: '#fff',
            padding: '10px',
            width: '300px',
            border: 'none',
            borderRadius: '4px',
            marginRight: '10px'
          }}
          type="text"
          placeholder="Search products..."
          value={searchValue}
          onChange={handleInputChange}
        />
        {showClear && (
          <button
            onClick={handleClear}
            style={{
              padding: '10px 15px',
              background: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              background: '#111',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                marginBottom: '10px',
                background: '#222'
              }}
            />
            <h3
              style={{
                fontSize: '16px',
                margin: '10px 0',
                height: '48px',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}
            >
              {product.title}
            </h3>
            <p
              style={{
                fontWeight: 'bold',
                color: '#4caf50',
                fontSize: '18px'
              }}
            >
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && searchValue && (
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#aaa' }}>
          No products found for "{searchValue}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;