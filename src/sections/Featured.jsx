import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { products } from "../utils/products"

function Featured() {
  const { addToCart } = useContext(CartContext)

  return (
    <section id="products" className="p-10">
      <h2 className="text-3xl mb-6 font-bold">Products</h2>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 text-white px-4 py-2 mt-3 rounded-lg hover:scale-105 transition"
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