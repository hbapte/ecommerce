// components\products\JerseyCollection.tsx
'use client'
import Link from "next/link";
import PillTabs from "../shared/pill-tabs";
import { useState } from "react";

const jerseys = [
  {
    id: 1,
    name: "Barcelona Home Kit 23/24",
    price: 649,
    discountPrice: 499,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFyY2Vsb25hfGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
    discount: "23% OFF",
    rating: 4.5,
    type: "New",
    class: "Home",
    team: "Barcelona",
    year: 2023,
  },
  {
    id: 2,
    name: "Arsenal Retro Kit 02/03",
    price: 799,
    discountPrice: 599,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    discount: "25% OFF",
    rating: 4.9,
    type: "Retro",
    class: "Home",
    team: "Arsenal",
    year: 2003,
  },
  {
    id: 3,
    name: "Man United Away Kit 99/00",
    price: 699,
    discountPrice: 549,
    image: "https://images.unsplash.com/photo-1575909610340-14f1881c0042?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    discount: "21% OFF",
    rating: 4.7,
    type: "Vintage",
    class: "Away",
    team: "Manchester United",
    year: 2000,
  },
  {
    id: 4,
    name: "AC Milan Custom Kit 23/24",
    price: 899,
    discountPrice: 699,
    image: "https://images.unsplash.com/photo-1613933250571-31d737d6761d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    discount: "22% OFF",
    rating: 4.8,
    type: "Custom",
    class: "Third",
    team: "AC Milan",
    year: 2023,
  },
  {
    id: 5,
    name: "Real Madrid Vintage Kit 96/97",
    price: 749,
    discountPrice: 599,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMG1hZHJpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    discount: "20% OFF",
    rating: 4.6,
    type: "Vintage",
    class: "Home",
    team: "Real Madrid",
    year: 1997,
  },
  {
    id: 6,
    name: "Chelsea Away Kit 22/23",
    price: 649,
    discountPrice: 499,
    image: "https://images.unsplash.com/photo-1620155731653-b47af9751890?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    discount: "23% OFF",
    rating: 4.3,
    type: "New",
    class: "Away",
    team: "Chelsea",
    year: 2022,
  },
  {
    id: 7,
    name: "Juventus Custom Kit 22/23",
    price: 849,
    discountPrice: 649,
    image: "https://images.unsplash.com/photo-1520967919012-70df527dcfa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    discount: "24% OFF",
    rating: 4.7,
    type: "Custom",
    class: "Third",
    team: "Juventus",
    year: 2023,
  },
  {
    id: 8,
    name: "Liverpool Retro Kit 90/91",
    price: 799,
    discountPrice: 649,
    image: "https://images.unsplash.com/photo-1562106587-90819ff864bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    discount: "19% OFF",
    rating: 4.9,
    type: "Retro",
    class: "Home",
    team: "Liverpool",
    year: 1991,
  },
];

export default function JerseyCollection() 
{
  const [activeTab, setActiveTab] = useState('all');

  const filteredJerseys = jerseys
  .filter((jersey) => {
    if (activeTab === 'all') return true;
    return jersey.type.toLowerCase() === activeTab;
  })
  .slice(0, 4);

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-0">
          <header className="flex -mb-2 justify-between">
            <h2 className="text-xl font-bold my-auto text-gray-900 sm:text-3xl">Featured Jersey</h2>
             <PillTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </header>

          <div className="grid gap-4 sm:grid-cols-2 -ml-16 px-4 lg:grid-cols-4">
            {filteredJerseys.map((jersey) => (
              <div
                key={jersey.id}
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <Link href={`/jersey/${jersey.id}`} passHref>
                  <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                    <img className="object-cover" src={jersey.image} alt={jersey.name} />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      {jersey.discount}
                    </span>
                  </div>
                </Link>
                <div className="mt-4 px-5 pb-5">
                  <Link href={`/jersey/${jersey.id}`} passHref>
                    <div>
                      <h5 className="text-xl tracking-tight text-slate-900">{jersey.name}</h5>
                    </div>
                  </Link>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">{jersey.price}</span>
                      <span className="text-sm text-slate-900 line-through">{jersey.discountPrice}</span>
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {jersey.rating}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
          </div>


          <div className="flex justify-center mt-3">
            <Link href="/jersey" passHref>
              <span className="rounded-md bg-blue-600 px-6 py-3 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                View More Jerseys
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
