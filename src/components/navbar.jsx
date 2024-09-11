import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
<nav className="bg-green-600 py-4">
  <div className="container mx-auto px-4 flex items-center justify-between">
    <a href="#" className="text-white text-2xl font-bold">
      EcoEmporium.
    </a>
    <ul className="flex space-x-6">
      <li>
        <Link href="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
      </li>
      <li>
        <Link href="/shop" className="text-white hover:text-gray-200 transition duration-300">Shop</Link>
      </li>
      <li>
        <Link href="/about" className="text-white hover:text-gray-200 transition duration-300">About Us</Link>
      </li>
     
      <li>
        <Link href="/contact" className="text-white hover:text-gray-200 transition duration-300">Contact</Link>
      </li>
      <li>
        <Link href="/orders" className="text-white hover:text-gray-200 transition duration-300">Orders</Link>
      </li>
    </ul>
   
  </div>
</nav>

    </div>
  )
}

export default Navbar