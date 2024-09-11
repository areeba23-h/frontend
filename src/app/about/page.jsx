'use client'
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-green-300 text-white">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About EcoEmporium
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          At EcoEmporium, we're dedicated to making sustainable living simple
          and accessible. Our mission is to offer eco-friendly products that
          reduce your carbon footprint and promote a healthier planet. From
          zero-waste essentials to biodegradable alternatives, we curate
          high-quality items designed with the environment in mind. Join us in
          our commitment to a greener future and discover how small changes can
          make a big impact.
        </p>
        <div className="mt-8">
          <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
            Discover Our Products
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="https://olabamboo.com/wp-content/uploads/2021/01/Olabamboo-header.jpg"
          alt="Eco-Friendly Products"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>

     
      <section className="py-20 ">
        <div className="container grid grid-cols-2 mx-auto px-4 ">
        <div>
          <img
            src="https://www.worldincontext.com/content/images/size/w1200/2023/03/reduce-reuse-recycle-380x300-01.jpg"
            alt="Eco-Friendly Products"
            className="w-full h-64 object-cover  rounded-lg shadow-lg mx-auto"
          />
          </div>
        <div className='m-10 '>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-gray-700  text-lg mb-8 text-justify">
            We are dedicated to providing eco-friendly products that make a positive impact on the environment. Our mission is to create a sustainable marketplace where consumers can make informed choices about the products they buy.
          </p>
          </div>
         
        </div>
      </section>
      <section className="bg-gray-100 py-20">
       
        <div className="container grid grid-cols-2 mx-auto px-4 ">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
          <p className="text-gray-700 text-justify text-lg mb-8">
            Our journey began with a simple idea: to make eco-friendly products accessible to everyone. From our humble beginnings, we have grown into a community of passionate individuals committed to sustainability. Join us as we continue to innovate and strive towards a greener future.
          </p>
          </div>
          <div>
          <img
            src="https://cdn.sanity.io/images/kts928pd/production/ca6ffe2a1c569b87f540adcf5a7e1bb359a9649a-1140x620.png"
            alt="Our Story"
            className="w-full mx-12 h-64 object-cover rounded-lg shadow-lg mx-auto"
          />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet the Team</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Team Member 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid"
                  alt="Team Member 1"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774"
                  alt="Team Member 2"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
                <p className="text-gray-600">Chief Sustainability Officer</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                  alt="Team Member 3"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Alice Johnson</h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <Footer />
    </>
  );
};

export default AboutPage;
