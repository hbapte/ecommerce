'use client'
import PillTabs from "@/components/jersey/pill-tabs";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const jerseys = [
  {
    id: 1,
    name: "Golden State Worriors Kit 23/24",
    price: 649,
    discountPrice: 499,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFyY2Vsb25hfGVufDB8fDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
    discount: "23% OFF",
    rating: 4.5,
    type: "New",
    class: "Home",
    team: "Golden State Worriors",
    year: 2023,
    game: "Basketball", // New field
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
    game: "Football", // New field
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
    game: "Football", // New field
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
    game: "Football", // New field
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
    game: "Football", // New field
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
    game: "Football", // New field
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
    game: "Football", // New field
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
    game: "Football", // New field
  },
];


export default function JerseyCollection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("game") || "all"; 
  
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
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
                  <img className="object-cover" src={jersey.image} alt={jersey.name} />
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
