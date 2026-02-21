import { motion } from "framer-motion"

const categories = [
  "Vegetables",
  "Fruits",
  "Dairy",
  "Grains",
  "Snacks",
  "Beverages",
]

function Categories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Shop by Category
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#DCFCE7] p-10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-[#15803D]">
                {cat}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories