import { Suspense } from 'react';
import Header from '@/components/Header';
import PlacesGrid from '@/components/PlacesGrid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// ISR tohirgoo
export const revalidate = 60;

// Streamed section (async)
async function PlacesSection() {
  const places = [
    {
      id: '1',
      title: 'Төв Номын Сан',
      description:
        'Монгол Улсын Үндэсний номын сан нь олон төрлийн ном, сэтгүүл, дижитал сан бүхий нийтийн уншлагын төв юм.',
      image: '/nomiinSan.jpg',
    },
    {
      id: '2',
      title: 'Чингис хаан Үндэсний Музей',
      description:
        'Монголын түүх, соёл, урлагийг дэлгэн үзүүлэх орчин үеийн тоноглогдсон музей.',
      image: '/muzei.jpg',
    },
    {
      id: '3',
      title: 'Акума Засварын Төв',
      description:
        'Хотын төвд байрлах олон үйл ажиллагаатай үйлчилгээний төв бөгөөд уншлагын өрөө, компьютерын өрөө, цахим номын санг санал болгодог.',
      image: '/akuma.jpg',
    },
    {
      id: '4',
      title: 'Тэрэлж Ресорт',
      description:
        'Тэрэлжийн байгалийн цогцолборт газрын төвд байрлах амралтын газар бөгөөд зочдод тав тухтай орчинг олгодог.',
      image: '/terelj.jpg',
    },
  ];

  // Stream hiih delay simulation (demo purpose)
  await new Promise((resolve) => setTimeout(resolve, 1000));

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
          <span className="font-medium text-lg">Төрөл:</span>
          {['Номын сан', 'Музей', 'Засвар', 'Амралт'].map((type) => (
            <Button key={type}>{type}</Button>
          ))}
        </div>
      </div>

      {/* Streamed section */}
      <Suspense fallback={<p className="text-center mt-10">Ачаалж байна...</p>}>
        {/* revalidate=60 нь page-level дээр үйлчилнэ */}
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
