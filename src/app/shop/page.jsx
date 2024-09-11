// src/ShopPage.jsx
'use client'
import React, { useState } from 'react';
import { products } from './data';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const ShopPage = () => {
  const [sortOption, setSortOption] = useState('Relevance');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'Price: Low to High') {
      return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    } else if (sortOption === 'Price: High to Low') {
      return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    } else {
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
    <Navbar />
    <section className="bg-green-600 py-20">
      <div className="container mx-auto px-4">
        {/* Search Bar and Sorting */}
        <div className="flex flex-col md:flex-row mb-8 justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop Products</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-lg px-4 py-2 mb-4 md:mb-0 w-full md:w-1/2"
              />
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Sort by:</span>
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold  text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <Link href={`/shop-view/${product.id}`} key={product.id}>
                
                      <button className="px-4 py-2 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition duration-200">
                        View More
                      </button>
                  </Link>
                  </div>
                </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-700">
              No products found
            </div>
          )}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ShopPage;
