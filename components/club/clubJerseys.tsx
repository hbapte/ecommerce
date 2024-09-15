'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchJerseys } from '@/services/mockApis'; // Importing the mock API
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Jersey } from '@/types/Jersey'; // Importing the Jersey type

export default function ClubJerseys() {
  const [jerseys, setJerseys] = useState<Jersey[]>([]); // New Jersey state
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const teamSlug = useParams();

  console.log('teamSlug:', teamSlug); // Debugging purposes

  // Fetch jerseys and filter by teamSlug
  useEffect(() => {
    const loadJerseys = async () => {
      setIsLoading(true); // Set loading to true when fetching starts

      const allJerseys = await fetchJerseys();
      console.log('allJerseys', { allJerseys }); // Log all fetched jerseys

      // Filter jerseys by teamSlug
      const filteredJerseys = allJerseys.filter((jersey) => jersey.team.slug === teamSlug.slug);
      console.log('filteredJerseys', filteredJerseys); // Log the filtered jerseys

      setJerseys(filteredJerseys);
      setIsLoading(false); // Set loading to false after fetching is done
    };

    if (teamSlug) {
      loadJerseys();
    }
  }, [teamSlug]);

  // Display loading UI while fetching data
  if (isLoading) {
    return <p>Loading jerseys...</p>;
  }

  // Display fallback UI if no jerseys are found
  if (!isLoading && jerseys.length === 0) {
    return (
      <div className="text-center mt-10">
        <p>No jerseys found for this team.</p>
        <Link href="/">
          <span className="text-blue-500 hover:underline">Go back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-0">
          <div className="mt-4 lg:mt-4 lg:grid lg:grid-cols-4 lg:items-start lg:gap-6">
            <div className="lg:col-span-3">
              {jerseys.map((jersey) => (
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
                          <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 " key={i} />
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
                      <ShoppingCart className="h-5 w-5 mr-2" /> 
                      Add to cart
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
