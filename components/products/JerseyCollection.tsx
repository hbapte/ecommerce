'use client';
import Link from "next/link";
import PillTabs from "../shared/pill-tabs";
import { useState, useEffect } from "react";
import { fetchJerseys } from "@/services/mockApis";
import { Jersey } from "@/types/Jersey";

export default function JerseyCollection() {
  const [activeTab, setActiveTab] = useState('all');
  const [jerseys, setJerseys] = useState<Jersey[]>([]); 
  const [loading, setLoading] = useState(true); 

  // Fetch jerseys when the component mounts
  useEffect(() => {
    const getJerseys = async () => {
      try {
        const fetchedJerseys = await fetchJerseys();
        setJerseys(fetchedJerseys);
      } catch (error) {
        console.error("Failed to fetch jerseys:", error);
      } finally {
        setLoading(false);
      }
    };

    getJerseys();
  }, []);




  // Filter jerseys 
  const filteredJerseys = jerseys
    .filter((jersey) => {
      if (activeTab === 'all') return true;
      return jersey.type.toLowerCase() === activeTab;
    })
    .filter((jersey) => jersey.featured) 
    .slice(0, 4); 

  if (loading) {
    return <p>Loading...</p>; 
  }

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
                    <img className="object-cover" src={jersey.images[0]} alt={jersey.name} />
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
