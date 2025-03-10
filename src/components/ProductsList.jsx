import { useState } from "react";
import { Heart } from "lucide-react";

function ProductsList({ products }) {
  const [productList, setProductList] = useState(products);
  const [favorites, setFavorites] = useState({});

  const handleDelete = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  const handleAddToCart = (product) => {
    console.log(`${product.title} added to cart`);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105 relative"
          >
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-3 right-3"
            >
              <Heart
                size={24}
                fill={favorites[product.id] ? "red" : "white"}
                color="black"
              />
            </button>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-24 mx-auto mb-3"
            />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-sm text-gray-600">
              Category: {product.category}
            </p>
            <div className="mt-2">
              <span className="text-gray-500 line-through text-sm mr-2">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-green-600 font-semibold text-lg">
                ${Math.max(0.1, product.price - 11).toFixed(2)}
              </span>
            </div>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-500 text-sm mt-2">{product.description}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-pink-300 text-pink-800 px-4 py-2 rounded-lg w-full transition-all duration-300 hover:bg-blue-400"
              >
                Delete
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-full transition-all duration-300 hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
