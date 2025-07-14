import products from "../data/product";
import Image from "next/image";

function ProductCard() {
  const getStockStatus = (stock) => {
    if (stock === 0) return { label: "Out of Stock", color: "bg-red-500" };
    if (stock <= 5) return { label: "Almost Out", color: "bg-yellow-500" };
    return { label: "In Stock", color: "bg-green-500" };
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => {
        const { label, color } = getStockStatus(product.stock);

        return (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition relative flex flex-col items-center">
            {/* Stock Tag */}
            <span
              className={`absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded ${color}`}>
              {label}
            </span>

            <Image
              width={300}
              height={300}
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-center">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xs text-yellow-500 text-center">
              ⭐ {product.rating}
            </p>

            {/* View Button */}
            <div className="mt-4 w-full flex justify-center">
              <button
                type="button"
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
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
