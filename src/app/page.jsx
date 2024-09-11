import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
 
<>
  {/* Hero section */}
  <>
  <Navbar />
  {/* Hero section */}
  <section className="bg-green-600 py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-white font-bold text-5xl leading-tight mb-6">
            Embrace a Greener Tomorrow
          </h1>
          <p className="text-white text-xl mb-8">
            Discover eco-friendly products that make a difference. From sustainable materials to ethical practices, we bring you the best for a greener planet.
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-white text-green-600 font-bold rounded-full hover:bg-green-700 transition duration-200"
          >
            Shop Now
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://d3ozokkbblvuwo.cloudfront.net/wp-content/uploads/2023/08/food-waste-1.jpg.webp"
            alt="Eco-friendly products"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Featured section */}
  <section className="py-20">
    <div className="w-full bg-white mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Featured Eco-Friendly Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://cdn.mos.cms.futurecdn.net/KceXZaWBsFr5WLANDstgFo-1200-80.jpg"
            alt="Reusable Coffee Cup"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Reusable Coffee Cup
            </h3>
            <p className="text-gray-700 text-base">
              Say goodbye to disposable cups with our stylish and sustainable reusable coffee cup. Made from recycled materials and designed to last.
            </p>
           
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/6/430076874/VN/DQ/LL/212628420/brown-organic-coffee-bean.jpg"
            alt="Organic Coffee Beans"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Organic Coffee Beans
            </h3>
            <p className="text-gray-700 text-base">
              Our premium organic coffee beans are grown without harmful chemicals. Enjoy a rich and flavorful cup while supporting sustainable farming practices.
            </p>
           
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.greenmatters.com/brand-img/tPfgPLyxu/0x0/eco-friendly-coffee-makers-1710861356279.jpg"
            alt="Eco-Friendly Coffee Maker"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Eco-Friendly Coffee Maker
            </h3>
            <p className="text-gray-700 text-base">
              Brew your coffee sustainably with our eco-friendly coffee maker. Made from recycled materials and designed for energy efficiency.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
</>

<section className="bg-white py-20">
  <div className="container bg-white mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 animate__animated animate__fadeIn animate__delay-1s">
      Our Commitment to Sustainability
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-2s">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCjZlbkqJndraBsJp3cvBAp6FtVX9rceOzYwNUu-2vd7gc3L4pXkH6RBjciElTQj9DUQALV4YTKVCfABesszYTriAgyq7fJu0jNxrPFkaXzQbtBkhMdVYKOKzz-0CrVvCXO-1mSGZXRhrovrXxxr0ebZoEPvoE9wj5faCW5dhv26uNSL5rLIRY1RQQfaE/s602/Role%20of%20individuals%20and%20community%20for%20sustainable%20lifestyle.JPG"
          alt="Sustainable practices"
          className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="md:w-1/2 space-y-6 animate__animated animate__fadeIn animate__delay-3s">
        <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
        <p className="text-gray-800">
          At EcoEssentials, we are dedicated to making a positive impact on the environment. We carefully select products that are sustainably sourced, ethically produced, and packaged with minimal waste. Our mission is to provide high-quality, eco-friendly products that help you make a difference.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-800">
            <strong>Sustainable Sourcing:</strong> We partner with suppliers who prioritize eco-friendly practices and sustainable materials.
          </li>
          <li className="text-gray-800">
            <strong>Ethical Production:</strong> Our products are made under fair labor practices, ensuring a positive impact on communities.
          </li>
          <li className="text-gray-800">
            <strong>Minimal Waste:</strong> We use recyclable and compostable packaging to reduce environmental impact.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 animate__animated animate__fadeIn animate__delay-1s">
      From Our Blog
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Tips for Greener Lifestyle",
          excerpt: "Discover simple ways to reduce your carbon footprint and live a more sustainable life with these practical tips.",
          date: "August 15, 2024",
          imgSrc: "https://purevergreen.com/cdn/shop/articles/03.14.24_-_Eco-Friendly_Tips_for_Greener_Lifestyle_-_IMAGE_940x.png?v=1709939599"
        },
        {
          title: "The Benefits of Organic Products",
          excerpt: "Learn why choosing organic products is better for your health and the environment, and how to make the switch.",
          date: "July 22, 2024",
          imgSrc: "https://w7.pngwing.com/pngs/949/1023/png-transparent-100-organic-product-logo-the-underground-dance-centre-organic-food-logo-service-organic-product-logo-food-text-cosmetics-thumbnail.png"
        },
        {
          title: "How to Reduce Plastic Waste",
          excerpt: "Explore effective strategies for minimizing plastic waste in your daily life and contribute to a cleaner planet.",
          date: "June 10, 2024",
          imgSrc: "https://karosambhavfoundation.org/public/uploads/bbb22422c8aadf4b95dc5f3a76312753.jpg"
        }
      ].map((post, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s"
        >
          <img
            src={post.imgSrc}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {post.excerpt}
            </p>
            <span className="text-gray-500 text-sm">
              {post.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-white py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 animate__animated animate__fadeIn animate__delay-1s">
      What Our Customers Say
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between">
      {[
        {
          name: "Emily R.",
          review: "I absolutely love the range of eco-friendly products offered. The quality is top-notch, and it's great to know that I'm making a difference with my purchases.",
          image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
          name: "John D.",
          review: "The reusable coffee cup I bought is fantastic! It keeps my coffee hot and reduces waste. Highly recommend this marketplace for anyone looking to live more sustainably.",
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          name: "Sophia L.",
          review: "Great selection of organic coffee beans. The taste is amazing, and it's comforting to know that it's grown without harmful chemicals.",
          image: "https://randomuser.me/api/portraits/women/2.jpg"
        }
      ].map((review, index) => (
        <div
          key={index}
          className="bg-gray-50 mx-3 rounded-lg shadow-md p-6 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s"
        >
          <div className="flex items-center mb-4">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
          </div>
          <p className="text-gray-700">{review.review}</p>
        </div>
      ))}
    </div>
  </div>
</section>




<Footer />


</>


    </div>
  )
}

export default Home