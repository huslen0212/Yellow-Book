import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';

interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  foundedYear: string;
  location: string;
  category: string;
}

interface PageProps {
  params: { id: string };
}

export default async function YellowBookPage({ params }: PageProps) {
  const { id } = params;

  // Backend ruu fetch hiih
  const res = await fetch(`http://localhost:3001/places/${id}`);

  if (!res.ok) {
    notFound();
  }

  const place: Place = await res.json();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="ml-5 mt-4">
        <BackButton />
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-5 py-8 bg-white rounded-lg shadow-2xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="relative w-full md:w-1/3 h-64">
            <Image
              src={place.image || '/default.jpg'}
              alt={place.name}
              fill
              className="rounded-md object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
            <p className="text-gray-700 mb-4">{place.description}</p>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex">
                <span className="font-semibold w-32">Үүссэн он:</span>
                <span className="text-gray-700">{place.foundedYear}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Байршил:</span>
                <span className="text-gray-700">{place.location}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Төрөл:</span>
                <span className="text-gray-700">{place.category}</span>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block mb-2 font-medium">Сэтгэгдэл:</label>
              <textarea
                placeholder="Та энд сэтгэгдлээ бичнэ үү..."
                className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Button>Илгээх</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
