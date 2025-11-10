// Page.tsx
'use client';
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

// Define the product interface
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Page() {
  const [productsState, setProductsState] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((productsArray: Product[]) => {
        setProductsState(productsArray); // Store full objects
      })
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <div>
      {hasProducts ? (
        <SearchBar products={productsState} />
      ) : (
        'Loading products...'
      )}
    </div>
  );
}