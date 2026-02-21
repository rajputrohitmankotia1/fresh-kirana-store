import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    total,
    isCartOpen,
    setIsCartOpen
  } = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <>
      {/* 🔥 Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>X</button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto h-[60%]">
          {cartItems.length === 0 && <p>No items added.</p>}

          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <p className="font-bold mb-4">Total: ₹{total}</p>

          <button
            onClick={() => {
              setIsCartOpen(false)
              navigate("/checkout")
            }}
            className="w-full bg-green-600 text-white py-2 rounded-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  )
}

export default CartDrawer