'use client'
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '../../shop/data'; // Adjust the import path if necessary
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProductDetailPage = () => {
  const { id } = useParams();
  const router = useRouter(); // Get the router object

  // Ensure id is a string and URL-safe
  const formattedId = Array.isArray(id) ? id[0] : id;

  const product = products.find(p => p.id === formattedId);

  if (!product) {
    return <div className="text-center text-gray-700">Product not found</div>;
  }

  const handleAddToCart = () => {
    // Get the existing orders from session storage or initialize as an empty array
    const existingOrders = JSON.parse(sessionStorage.getItem('orders')) || [];

    // Add the new product to the orders list
    existingOrders.push(product);

    // Update session storage with the new orders list
    sessionStorage.setItem('orders', JSON.stringify(existingOrders));

    // Redirect to the Thank You page
    router.push('/thank-you'); // Redirect to Thank You page
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>
              <div className="flex items-center mb-6">
                <span className="text-xl font-bold text-gray-800 mr-4">
                  {product.price}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition duration-200"
                >
                  Buy
                </button>
              </div>
              <a
                href="/"
                className="text-blue-600 hover:text-blue-800 transition duration-200"
              >
                Back to shop
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
