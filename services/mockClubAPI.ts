// services/mockApi.ts

export interface Club {
    title: string;
    imageSrc: string;
    bgColor: string;
  }
  
  export const fetchClubs = async (): Promise<Club[]> => {
    return [
      { title: 'Arsenal', imageSrc: '/j1.webp?height=300&width=300', bgColor: 'bg-emerald-200' },
      { title: 'FC Barcelona', imageSrc: '/j4.jpg?height=300&width=300', bgColor: 'bg-yellow-200' },
      { title: 'Manchester Utd', imageSrc: '/j5.webp?height=300&width=300', bgColor: 'bg-yellow-200' },
      { title: 'Real Madrid', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-red-200' },
      { title: 'Argentina', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-green-200' },
      { title: 'Dortmund', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-pink-200' },
      { title: 'GSW', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-orange-200' },
    //   { title: '76ers', imageSrc: '/placeholder.svg?height=300&width=300', bgColor: 'bg-orange-200' },
    ];
  };
  