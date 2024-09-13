'use client'
import * as React from 'react';
import { useState } from 'react';
import {  Menu, ShoppingCart, User, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavigationMenuComponent } from './MegaNav';
import SearchModal from "../form/search"

function Navbar() {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
  // State to manage the collapse toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky bg-slate-50 flex top-0 flex-wrap md:justify-start md:flex-nowrap z-40 w-full border-b border-gray-200">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex w-full justify-between items-center gap-x-1">
            <a className=" font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Brand</a>
              
             <div className='flex items-center gap-4'>
        
              <NavigationMenuComponent />
              <SearchModal />

             </div>

             

            {/* Desktop */}
            <div className="hidden md:flex  justify-center items-center font-semibold space-x-6">
             

              


              <div className="my-2 md:my-0 md:mx-2">
              <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>

             
          
                
            </div>
            <ShoppingCart className="text-gray-600 w-6 h-6" /> 
            <User className="text-gray-600 w-6 h-6" />  
            
                        

            


          </div>
           
            

            {/* Phone */}
             <div className="flex md:hidden  items-center space-x-4">
              
                <User className="text-gray-600" />                
                  <ShoppingCart className="text-gray-600" />               
              
            {/* Collapse Button */}
            <button
              type="button"
              className="md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
              aria-expanded={isMenuOpen}
              aria-controls="hs-header-base"
              aria-label="Toggle navigation"
            >
              {/* Hamburger icon */}
              {!isMenuOpen ? (
               <Menu className="h-6 w-6 text-black" />
              ) : (
                // Close icon (X)
                <X className="h-6 w-6 text-black" />
              )}
            </button>
            </div>
            {/* End Collapse Button */}
          </div>
        </nav>
      </header>



      {/* Overlay when the menu is open */}
   
        {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Menu content */}
          <motion.div
            className="bg-white w-3/4 max-w-sm h-full overflow-auto p-6"
            initial="hidden"
             animate="visible"
             variants={variants}
          >
            <div className="flex justify-end">
              <button
                className="absolute top-4 right-4 z-60 p-2 bg-white rounded-full focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>

            <div className="flex flex-col space-y-5 mt-6">
              <motion.a
                className="text-lg font-semibold text-gray-800"
                href="#"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Home
              </motion.a>
              <motion.a
                className="text-lg font-semibold text-gray-800"
                href="#"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Products
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm">           
        </div>
      )}
    </>
  );
}

export default Navbar;
