// components\jersey\JerseyCollection.tsx
'use client'
import PillTabs from "@/components/jersey/pill-tabs";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShoppingCart, Star } from "lucide-react";
import { fetchJerseys } from "@/services/mockApis";
import Link from "next/link";
import { Jersey } from '@/types/Jersey';


export default function JerseyCollection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("game") || "all"; 

  const [jerseys, setJerseys] = useState<Jersey[]>([]);

  useEffect(() => {
    const getJerseys = async () => {
      const data = await fetchJerseys();
      setJerseys(data);
    };
    getJerseys();
  }, []);
  
  const [activeTab, setActiveTab] = useState(initialTab);

  // Update the URL when the active tab changes
  useEffect(() => {
    router.push(`/jersey?game=${activeTab}`, undefined);
  }, [activeTab, router]);

  // Filter jerseys based on the active tab
  const filteredJerseys = jerseys.filter((jersey) => {
    if (activeTab === "all") return true;
    return jersey.game.toLowerCase() === activeTab;
  });

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
              <Link href={`/jersey/${jersey.id}`} 
                key={jersey.id}
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-slate-500" >
                  <img className="object-cover" src={jersey.images[0]} alt={jersey.name} />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {jersey.discount}
                  </span>
                </div>
                <div className="mt-4 px-5 pb-5">
                  <div >
                    <h5 className="text-xl tracking-tight text-slate-900">{jersey.name}</h5>
                  </div>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">{jersey.discountPrice}</span>
                      <span className="text-sm text-slate-900 line-through">{jersey.price}</span>
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star className="h-5 w-5 text-yellow-300 " key={i} />
                      ))}
                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {jersey.rating}
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to cart
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
