import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="body-font relative bg-white text-gray-800">
  <div className="container flex items-center justify-center flex-col mx-auto px-5 py-24">
    {/* Header */}
    <div className="mb-12 flex w-full flex-col text-center">
      <h1 className="title-font mb-4 text-3xl font-extrabold text-black sm:text-4xl">
        Contact Us
      </h1>
      <p className="mx-auto text-lg leading-relaxed lg:w-2/3">
        We’re here to help with any questions, feedback, or collaboration proposals. Feel free to reach out to us!
      </p>
    </div>

    <div className="md:w-1/3 text-center">
        <ul className="space-y-2">
          <li className="text-black">Email: <a href="mailto:info@ecoemporium.com" className="hover:text-gray-200 transition duration-300">info@ecoemporium.com</a></li>
          <li className="text-black">Phone: <a href="tel:+1234567890" className="hover:text-gray-200 transition duration-300">+1 (234) 567-890</a></li>
          <li className="text-black">Address: 123 Green St, Eco City, EC 45678</li>
        </ul>
      </div>

    {/* Footer */}
   
      <div className="inline-flex space-x-4 ">
        <a href="https://facebook.com" className="text-gray-500 hover:text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href="https://twitter.com" className="text-gray-500 hover:text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a href="https://instagram.com" className="text-gray-500 hover:text-white">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a href="https://linkedin.com" className="text-gray-500 hover:text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        </a>
      </div>

  </div>
</section>
<Footer />
    </div>
  )
}

export default Contact