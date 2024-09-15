// services/mockApi.ts
import { Jersey } from '@/types/Jersey';

export const fetchJerseys = async (): Promise<Jersey[]> => {
    return [
      {
        id: 1,
        name: "Golden State Warriors Kit 23/24",
        price: 649,
        discountPrice: 499,
        discount: "23% OFF",
        rating: 4.5,
        type: "New",
        featured: false,
        arrival: "New",
        class: "Home",
        team: {
          name: "Golden State Warriors",
          slug: "golden-state-warriors",
          imageSrc: '/j1.webp',
          bgColor: 'bg-emerald-200',
        },
        year: 2023,
        game: "Basketball", 
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        images: [
          '/j1.webp',
          'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85',
        ],
        sizes: ['S', 'M', 'L'],
      },
      {
        id: 2,
        name: "Arsenal Retro Kit 01/03",
        price: 799,
        discountPrice: 599,
        discount: "25% OFF",
        rating: 4.9,
        type: "Retro",
        featured: true,
      
        arrival: "old",
        class: "Home",
        team: {
          name: "Arsenal",
          slug: "arsenal",
          imageSrc: '/j2.webp',
          bgColor: 'bg-yellow-200',
        },
        year: 2003,
        game: "Football", 
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        images: [
          '/j2.webp',
          'https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c',
        ],
        sizes: ['S', 'M', 'L'],
      },
      {
        id: 3,
        name: "Los Angeles Lakers Kit 21/22",
        price: 699,
        discountPrice: 599,
        discount: "15% OFF",
        rating: 4.7,
        type: "New",
        class: "Home",
        featured: true,
        arrival: "New",
        team: {
          name: "Los Angeles Lakers",
          slug: "los-angeles-lakers",
          imageSrc: '/j3.webp',
          bgColor: 'bg-violet-200',
        }
        ,
        year: 2021,
        game: "Basketball", 
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        images: [
          '/j3.webp',
          'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85',
        ],
        sizes: ['S', 'M', 'L'],
      },
      {
        id: 4,
        name: "Manchester United Kit 20/21",
        price: 699,
        discountPrice: 599,
        discount: "15% OFF",
        rating: 4.7,
        type: "New",
        featured: true,
        arrival: "Old",
        class: "Home",
        team: {
          name: "Manchester Utd",
          slug: "manchester-utd",
          imageSrc: '/j4.webp',
          bgColor: 'bg-red-200',
        },
        year: 2020,
        game: "Football", 
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        images: [
          '/j4.webp',
          'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85',
        ],
        sizes: ['S', 'M', 'L'],
      },

      {
        id: 5,
        name: "Los Angeles Lakers Kit 21/22",
        price: 699,
        discountPrice: 599,
        discount: "15% OFF",
        rating: 4.7,
        type: "New",
        class: "Home",
        featured: true,
        arrival: "New",
        team: {
          name: "Los Angeles Lakers",
          slug: "los-angeles-lakers",
          imageSrc: '/j3.webp',
          bgColor: 'bg-violet-200',
        },
        year: 2021,
        game: "Basketball", 
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        images: [
          '/j3.webp',
          '/kit.webp',
          '/j2.webp',
          '/j1.webp',
        ],
        sizes: ['S', 'M', 'L'],
      },
      {
        id: 6,
        name: "Manchester United Kit 20/21",
        price: 699,
        discountPrice: 599,
        discount: "15% OFF",
        rating: 4.7,
        type: "New",
        class: "Home",
        team: {
          name: "Manchester Utd",
          slug: "manchester-utd",
          imageSrc: '/j4.webp',
          bgColor: 'bg-red-200',
        },
        year: 2020,
        featured: false,
        arrival: "Old",
        game: "Football", 
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        images: [
          '/j4.webp',
          'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85',
        ],
        sizes: ['S', 'M', 'L'],
      },
    ];
  };
  
  export const fetchJerseyById = async (id: number): Promise<Jersey | undefined> => {
    const jerseys = await fetchJerseys();
    return jerseys.find((jersey) => jersey.id === id);
  };
  