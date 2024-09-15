// types/Jersey.ts
export interface Jersey {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    discount: string;
    rating: number;
    type: string;
    featured: boolean;
    arrival: string;
    class: string;
    team: {name: string, 
        imageSrc: string,
         bgColor: string ,
         slug: string
        };

    year: number;
    game: string;
    description: string;
    images: string[];
    sizes: string[];
  }
  