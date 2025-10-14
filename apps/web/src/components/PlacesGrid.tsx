import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface PlacesGridProps {
  places: Place[];
}

export default function PlacesGrid({ places }: PlacesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-10">
      {places.map((place) => (
        <Link key={place.id} href={`/yellow-book/${place.id}`}>
          <Card
            className="
              border-none rounded-2xl group 
              transition-all duration-500 ease-out 
              shadow-[2px_4px_15px_rgba(0.15,0.15,0.15,0.15)] 
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] 
              hover:scale-[1.03]
            "
          >
            <CardHeader>
              <CardTitle>{place.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-3 overflow-hidden rounded-md">
                <Image
                  src={place.image || '/default.jpg'}
                  alt={place.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              {/* <p className="text-sm text-gray-700">{place.description}</p> */}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
