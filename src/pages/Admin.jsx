import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "https://fresh-kirana-backend.onrender.com/api/orders"

function Admin() {
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    const response = await axios.get(API_URL)
    setOrders(response.data)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const updateStatus = async (id, status) => {
    await axios.put(`${API_URL}/${id}/status`, { status })
    fetchOrders()
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-[#15803D]">
        Admin Dashboard
      </h1>

      <div className="space-y-6">
        {orders.map(order => (
          <div key={order._id} className="bg-white p-6 rounded-xl shadow">

            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-lg">
                  {order.customerName}
                </h2>
                <p>{order.phone}</p>
                <p>{order.address}</p>
              </div>

              <div className="text-right">
                <p className="font-bold">₹{order.totalAmount}</p>
                <p className="text-sm">{order.paymentMethod}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold">
                Status: {order.status}
              </p>

              <div className="flex gap-3 mt-3 flex-wrap">
                {["Pending","Packed","Out for Delivery","Delivered","Cancelled"]
                  .map(status => (
                    <button
                      key={status}
                      onClick={() => updateStatus(order._id, status)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                    >
                      {status}
                    </button>
                  ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin