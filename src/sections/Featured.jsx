import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { products } from "../utils/products"

function Featured() {
  const { addToCart } = useContext(CartContext)

  return (
    <section
      id="products"
      className="px-4 sm:px-8 lg:px-16 py-16 bg-gray-50"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                ₹{product.price}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition duration-300 active:scale-95"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured