import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="bg-green-300 text-gray-800 py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">EcoEmporium</h2>
        <p className="text-black">
          Committed to providing high-quality eco-friendly products. Join us in making a positive impact on the planet.
        </p>
      </div>
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="text-black hover:text-gray-200 transition duration-300">Home</a></li>
          <li><a href="#shop" className="text-black hover:text-gray-200 transition duration-300">Shop</a></li>
          <li><a href="#about" className="text-black hover:text-gray-200 transition duration-300">About Us</a></li>
          <li><a href="#blog" className="text-black hover:text-gray-200 transition duration-300">Blog</a></li>
          <li><a href="#contact" className="text-black hover:text-gray-200 transition duration-300">Contact</a></li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li className="text-black">Email: <a href="mailto:info@ecoemporium.com" className="hover:text-gray-200 transition duration-300">info@ecoemporium.com</a></li>
          <li className="text-black">Phone: <a href="tel:+1234567890" className="hover:text-gray-200 transition duration-300">+1 (234) 567-890</a></li>
          <li className="text-black">Address: 123 Green St, Eco City, EC 45678</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 pt-4 text-center">
      <p className="text-black">
        &copy; 2024 EcoEmporium. All rights reserved. | <a href="#privacy" className="hover:text-gray-200 transition duration-300">Privacy Policy</a>
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer