import { Suspense } from 'react';
import Header from '@/components/Header';
import PlacesGrid from '@/components/PlacesGrid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// ISR tohirgoo
export const revalidate = 60;

// Streamed section (async)
async function PlacesSection() {
  const res = await fetch('http://localhost:3001/places', {
    next: { revalidate: 60 },
  });
  const places = await res.json();

  return <PlacesGrid places={places} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Search */}
      <div className="flex flex-col items-center mt-8">
        <input
          type="text"
          placeholder="Энд бичиж хайна уу..."
          className="w-[400px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Filter */}
        <div className="flex items-center gap-3 mt-6">
          <span className="font-medium text-lg">Төрөл:aaa</span>
          {['Номын сан', 'Музей', 'Засвар', 'Амралт'].map((type) => (
            <Button key={type}>{type}</Button>
          ))}
        </div>
      </div>

      {/* Streamed section */}
      <Suspense fallback={<p className="text-center mt-10">Ачаалж байна...</p>}>
        <PlacesSection />
      </Suspense>

      {/* Bugdiig uzeh */}
      <div className="flex justify-center mt-6">
        <Link href="/all-places">
          <Button>Бүгдийг үзэх</Button>
        </Link>
      </div>
    </div>
  );
}
