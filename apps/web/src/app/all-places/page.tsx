import { Suspense } from 'react';
import Header from '@/components/Header';
import PlacesGrid from '@/components/PlacesGrid';
import BackButton from '@/components/BackButton';

export interface Place {
  id: string;
  name: string;
  image: string;
  founded_year: string;
  location: string;
  short_description: string;
  category: string;
  phone_number: string;
  facebook_url: string;
  instagram_url: string;
  website_url: string;
  long_description: string;
}

// ISR tohirgoo
export const revalidate = 60;

// Streamed section (async)
async function PlacesSection() {
  const res = await fetch('http://localhost:3001/places', {
    next: { revalidate: 60 },
  });
  const places = await res.json();

  // Mongol tsagaan tolgoin daraallaar sortloh
  const sortedPlaces = places.sort((a: Place, b: Place) =>
    a.name.localeCompare(b.name, 'mn', { sensitivity: 'base' })
  );

  return <PlacesGrid places={sortedPlaces} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="ml-5 mt-4">
        <BackButton />
      </div>
      {/* Streamed section */}
      <Suspense fallback={<p className="text-center mt-10">Ачаалж байна...</p>}>
        <PlacesSection />
      </Suspense>
    </div>
  );
}
