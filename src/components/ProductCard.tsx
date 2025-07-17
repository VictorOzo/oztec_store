"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchproducts } from "@/api/productApi";
import StarRateIcon from "@mui/icons-material/StarRate";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedproducts = await fetchproducts();
        console.log("Fetched Products:", fetchedproducts);
        setProducts(fetchedproducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getData();
  }, []);

  // Get stock function
  const getStockStatus = (stock: number) => {
    if (stock === 0) return { label: "Out of Stock", color: "bg-red-500" };
    if (stock <= 5) return { label: "Almost Out", color: "bg-yellow-400" };
    return { label: "In Stock", color: "bg-green-500" };
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
      {products.map((product) => {
        const stockInfo = getStockStatus(product.stock);

        return (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition relative cursor-pointer">
            {/* 🏷 Stock Tag */}
            <span
              className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded ${stockInfo.color}`}>
              {stockInfo.label}
            </span>

            <Image
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-2"
            />

            {/* ✅ Centered text */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 flex justify-center items-center gap-1">
                <StarRateIcon className="text-yellow-400" />
                {product.rating.toFixed(2)}
              </p>
            </div>

            {/* ✅ Full-width button */}
            <div className="mt-4">
              <button className="w-full bg-black text-white py-2 px-3 rounded hover:bg-blue-700 cursor-pointer">
                View Product
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
