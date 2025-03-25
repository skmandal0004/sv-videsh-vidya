import React from 'react'
import { motion } from "framer-motion";

const CallComponents = () => {
    
    const phoneNumber = "9523429869";

  return (
    <div>
       {/* Contact Us Button */}
       <motion.div
      className="fixed bottom-6 right-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <a href={`tel:${phoneNumber}`} className="flex items-center space-x-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 text-white px-5 py-4 rounded-full shadow-xl hover:scale-110 transition-all transform">
        {/* Phone Icon */}
        <img src="https://cdn-icons-png.freepik.com/256/724/724664.png?ga=GA1.1.712469952.1740656033&semt=ais_hybrid" alt="Phone Icon" className="w-8 h-8 border-2 rounded-full" />
        {/* Phone Number */}
        <span className="text-xl font-semibold">Call Us</span>
      </a>
    </motion.div>
    </div>
  )
}

export default CallComponents
