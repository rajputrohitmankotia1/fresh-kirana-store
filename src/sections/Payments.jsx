import qrImage from "../assets/scan_Pay.jpg"

function Payments() {
  return (
    <section className="py-20 bg-[#DCFCE7] text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          Scan UPI QR to Pay
        </h2>

        <p className="text-lg mb-8">
          Pay using Google Pay, PhonePe, Paytm or any UPI app.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
          <img
            src={qrImage}
            alt="UPI QR Code"
            className="w-64 h-64 object-contain mx-auto"
          />
        </div>

        <p className="mt-6 text-gray-600">
          After payment, share screenshot on WhatsApp.
        </p>
      </div>
    </section>
  )
}

export default Payments