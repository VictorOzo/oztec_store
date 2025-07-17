"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { fetchproducts } from "@/api/productApi";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchproducts();

        setProducts(data);

        // Extract unique categories
        const uniqueCats = Array.from(new Set(data.map((p) => p.category)));
        setCategories(uniqueCats);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="px-[8vh] py-6">
      <h1 className="text-3xl font-bold underline text-center mb-6">
        Welcome to Oztec Stores
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="text-xl font-semibold">Products</div>
        <div className="flex items-center gap-2">
          <label htmlFor="categories" className="text-sm font-medium">
            Categories:
          </label>
          <select
            name="products"
            id="products"
            className="border border-gray-300 rounded-md px-3 py-1">
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ProductCard products={products} />
    </div>
  );
}
