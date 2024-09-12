import React from 'react';

const ProductShowcase = () => {
  return (
    <section className="w-full h-full bg-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <img src="/path/to/logo.pn" alt="Pagedone" className="h-8" />
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About us</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">Products</button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
                  {/* Product Dropdown Items */}
                  <a href="/products/smartwatches" className="block text-gray-700 hover:text-gray-900">Smartwatches</a>
                  <a href="/products/headphones" className="block text-gray-700 hover:text-gray-900">Headphones</a>
                  <a href="/products/speakers" className="block text-gray-700 hover:text-gray-900">Speakers</a>
                </div>
              </div>
              <a href="/features" className="text-gray-700 hover:text-gray-900">Features</a>
            </nav>
          </div>
          <div className="space-x-4">
            <button className="text-gray-700 hover:text-gray-900">Login</button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Sign up</button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Product */}
          <div className="lg:col-span-2 bg-black text-white p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold">The Essential Smart Watch</h2>
              <p className="mt-4 text-gray-400">
                The perfect fusion of style and functionality, designed to seamlessly integrate into your daily life.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/j1.webp"
                alt="Smart Watch"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Additional Products */}
          <div className="bg-blue-500 p-6 rounded-lg flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-white">JBL Tune 760NC</h3>
            <div className="mt-4">
              <img
                src="/j2.webp"
                alt="JBL Headphones"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4">
              <a href="/products/jbl-tune-760nc" className="text-white underline">Learn More</a>
            </div>
          </div>

          <div className="bg-green-500 p-6 rounded-lg flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-white">Sony SRS-XB100 Speakers</h3>
            <div className="mt-4">
              <img
                src="/j3.webp"
                alt="Sony Speakers"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4">
              <a href="/products/sony-srs-xb100" className="text-white underline">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
