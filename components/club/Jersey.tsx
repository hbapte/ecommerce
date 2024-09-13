import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ListOrderedIcon, FilterIcon } from "lucide-react"


export default function ClubKit() {

  const clubs = [
    {
      id: 1,
      name: "Man Utd - Home 24/25",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
      imageUrl:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      rating: 5,
      reviews: 5,
    },
    {
      id: 2,
      name: "Arsenal Training shirt - 22/23",
      price: 249,
      originalPrice: 299,
      discount: "17% OFF",
      imageUrl:
        "/kit.webp",
      rating: 4,
      reviews: 4,
    },
    {
      id: 3,
      name: "FCB - Home 24/25",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
      imageUrl:
        "/j1.webp",
      rating: 3,
      reviews: 5,
    },
    // Add more clubs as needed
  ];

    return (
      <div > 
  
  <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-0">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Club Collection</h2> 
        <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="w-4 h-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup 
                // value={sort} onValueChange={setSort}
                >
                  <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" />
                  <span>Filters</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px]" align="end">
                <div className="p-4 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Category</h4>
                    <div className="grid gap-2">
                 
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox
                          // checked={selectedFilters.category.includes("Outdoor")}
                          // onCheckedChange={() => handleFilterChange("category", "Outdoor")}
                        />
                        Outdoor
                      </Label>
                     
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox
                          // checked={selectedFilters.category.includes("Home")}
                          // onCheckedChange={() => handleFilterChange("category", "Home")}
                        />
                        Home
                      </Label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <div>
                      <div className="bg-muted">
                        <div className="bg-primary" />
                      </div>
                      <div className="bg-primary" />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      {/* <span>${selectedFilters.price.min}</span>
                      <span>${selectedFilters.price.max}</span> */}
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
      </header>
  
      <div className="mt-2 block lg:hidden">
        <button
          className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Filters & Sorting </span>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 rtl:rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
  
      <div className="mt-4 lg:mt-4 lg:grid lg:grid-cols-4 lg:items-start lg:gap-6">
        <div className="hidden space-y-4 lg:block">
          
  
          <div className="pt-6">
            <p className="block  font-medium text-gray-700">Filters</p>
  
            <div className="mt-2 space-y-2">
              <details
                className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span className="text-sm font-medium"> Availability </span>
  
                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
  
                <div className="border-t border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700"> 0 Selected </span>
  
                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                      Reset
                    </button>
                  </header>
  
                  <ul className="space-y-1 border-t border-gray-200 p-4">
                    <li>
                      <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          className="size-5 rounded border-gray-300"
                        />
  
                        <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                      </label>
                    </li>
  
                    <li>
                      <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          className="size-5 rounded border-gray-300"
                        />
  
                        <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                      </label>
                    </li>
  
                    <li>
                      <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          className="size-5 rounded border-gray-300"
                        />
  
                        <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
  
              <details
                className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span className="text-sm font-medium"> Price </span>
  
                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
  
                <div className="border-t border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700"> The highest price is $600 </span>
  
                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                      Reset
                    </button>
                  </header>
  
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between gap-4">
                      <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">$</span>
  
                        <input
                          type="number"
                          id="FilterPriceFrom"
                          placeholder="From"
                          className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>
  
                      <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">$</span>
  
                        <input
                          type="number"
                          id="FilterPriceTo"
                          placeholder="To"
                          className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </details>
  
            </div>
          </div>
        </div>
  
      
  <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 justify-start lg:grid-cols-3">
                {clubs.map((club) => (
                  <li key={club.id}>
                    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <a
                        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                        href="#"
                      >
                        <img
                          className="object-cover"
                          src={club.imageUrl}
                          alt="club image"
                        />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                          {club.discount}
                        </span>
                      </a>
                      <div className="mt-4 px-5 pb-5">
                        <a href="#">
                          <h5 className="text-xl tracking-tight text-slate-900">
                            {club.name}
                          </h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                          <p>
                            <span className="text-3xl font-bold text-slate-900">
                              ${club.price}
                            </span>
                            <span className="text-sm text-slate-900 line-through">
                              ${club.originalPrice}
                            </span>
                          </p>
                          <div className="flex items-center">
                            {[...Array(club.rating)].map((_, index) => (
                              <svg
                                key={index}
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
                              {club.rating}.0
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
                            strokeWidth={2}
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
       
     

   
    </div>
  </section>
  
      </div>
    );
  }
  