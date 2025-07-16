export const fetchproducts = async () => {
  try {
    const res = await fetch(
      "https://dummyjson.com/products?select=id,title,price,thumbnail,description,category,stock,reviews,images",
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Products fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
