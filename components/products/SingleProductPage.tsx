// components\products\SingleJerseyComponent.tsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import { fetchJerseyById } from '@/services/mockApis';
import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Jersey } from '@/types/Jersey';

function SingleJersey() {
  const { slug } = useParams();
  const [jerseyData, setJerseyData] = useState<Jersey | null>(null); // Use Jersey type
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slug) {
      const getJersey = async () => {
        const jersey = await fetchJerseyById(Number(slug)); 
        if (jersey) {
          setJerseyData(jersey);
          setMainImage(jersey.images[0]);
        }
      };
      getJersey();
    }
  }, [slug]);

  const changeImage = (src: string, index: number) => {
    setMainImage(src);
    setCurrentIndex(index);
  };

  if (!jerseyData) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Jersey Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Image
                src={mainImage}
                alt="Jersey"
                width={800}
                height={800}
                className="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {jerseyData.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={200}
                    height={200}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer transition duration-300 ${
                      currentIndex === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                    onMouseEnter={() => changeImage(image, index)}
                    onClick={() => changeImage(image, index)}
                  />
                ))}
              </div>
            </div>

            {/* Jersey Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{jerseyData.name}</h2>
              <p className="text-gray-600 mb-4">TYPE: {jerseyData.type}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">${jerseyData.price.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${jerseyData.discountPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-6 h-6 ${
                        i < Math.round(jerseyData.rating) ? 'text-yellow-500' : 'text-gray-400'
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {jerseyData.rating} 
                  {/* ({jerseyData.reviews} reviews) */}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{jerseyData.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Size:</h3>
                <div className="flex space-x-2">
                  {jerseyData.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-8 h-8 ${
                        selectedSize === size ? 'bg-black text-white' : 'bg-gray-300'
                      } rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex space-x-4 mb-6">
                <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default SingleJersey;


