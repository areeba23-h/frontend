'use client'
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ThankYouPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-gray-700 mb-6">
              Your order has been placed successfully. We appreciate your purchase!
            </p>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              Back to shop
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ThankYouPage;
