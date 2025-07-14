import products from "../data/product";
import Image from "next/image";

function ProductCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold text-center">{product.name}</h3>
          <p className="text-sm text-gray-600 text-center">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs text-yellow-500 text-center">
            ⭐ {product.rating}
          </p>

          {/* Centered Button */}
          <div className="mt-4 w-full flex justify-center">
            <button
              type="button"
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
              View Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
