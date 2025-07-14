import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="px-[8vh] py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
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
            <option value="electronics">Electronics</option>
            <option value="footwear">Footwear</option>
            <option value="accessories">Accessories</option>
            <option value="clothing">Clothing</option>
            <option value="health">Health</option>
          </select>
        </div>
      </div>

      <ProductCard />
    </div>
  );
}
