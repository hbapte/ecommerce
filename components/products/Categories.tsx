'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchClubs, Club } from '@/services/mockClubAPI';

useEmblaCarousel.globalOptions = { loop: true };

const ClubCard: React.FC<Club> = ({ title, imageSrc, bgColor }) => {
  const router = useRouter();

  const handleCardClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/club/${slug}`);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${bgColor} aspect-square cursor-pointer`}
      onClick={handleCardClick}
    >
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default function TeamHeader() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const getClubs = async () => {
      try {
        const fetchedClubs = await fetchClubs();
        setClubs(fetchedClubs);
      } catch (error) {
        console.error('Failed to fetch clubs:', error);
      } finally {
        setLoading(false);
      }
    };

    getClubs();
  }, []);

  if (loading) {
    return <p>Loading clubs...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Shop by Club/Country</h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] px-2"
              >
                <ClubCard {...club} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
