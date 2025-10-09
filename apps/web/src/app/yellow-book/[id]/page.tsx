import Image from 'next/image';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

interface YellowBook {
  id: string;
  title: string;
  content: string;
  image: string;
  created: string;
  location: string;
}

// Build-time mock data
const detailsData: YellowBook[] = [
  {
    id: '1',
    title: 'Төв Номын Сан',
    content:
      'Төв Номын Сан нь 1950 онд байгуулагдсан Монгол Улсын Үндэсний номын сан бөгөөд олон төрлийн ном, сэтгүүл, дижитал сан, судалгааны материалуудтай. Энд унших чимээгүй бүс, бүлгийн судалгааны өрөөнүүд, номын уншлагын сургалт, семинар, уран зохиолын лекцүүд зэрэг олон арга хэмжээ зохион байгуулагддаг. Мөн орчин үеийн мэдээллийн бааз, интернетэд холбогдсон компьютерын өрөө, уншлагын тоног төхөөрөмжөөр хангагдсан. Оюутан, судлаачид болон ном сонирхогчид номын сангийн нөөцөөс ашиглах боломжтой.',
    image: '/nomiinSan.jpg',
    created: '1950',
    location: 'Улаанбаатар, Сүхбаатар дүүрэг',
  },
  {
    id: '2',
    title: 'Чингис хаан Үндэсний Музей',
    content:
      'Чингис хаан Үндэсний Музей нь 2022 онд нээлтээ хийсэн бөгөөд Монголын түүх, соёл, урлагийг дэлгэн үзүүлэхэд зориулагдсан музей юм. Музейд эртний түүхийн олдвор, үндэсний хувцас, гар урлал, соёлын өвийг харуулсан байнгын үзмэрүүд байрладаг. Мөн түр үзэсгэлэн, сургалт, семинар болон боловсролын хөтөлбөрүүдийг тогтмол зохион байгуулдаг. Үзэсгэлэнгийн танхимууд нь орчин үеийн технологиор тоноглогдсон бөгөөд орон нутгийн болон олон улсын үзэгчдэд зориулсан олон хэлний тайлбаруудтай.',
    image: '/muzei.jpg',
    created: '2022',
    location: 'Улаанбаатар, Чингэлтэй дүүрэг',
  },
  {
    id: '3',
    title: 'Акума Засварын Төв',
    content:
      'Акума Засварын Төв нь Улаанбаатар хотын төв хэсэгт байрлах олон үйл ажиллагаа бүхий төв юм. Энд оюутан, сурагчид, судлаачид болон ном сонирхогчид уншлагын өрөө, компьютерын өрөө, цахим номын сан зэрэг орчин үеийн үйлчилгээ авах боломжтой. Төв нь номын сангийн үйл ажиллагаа, бүлгийн уншлагын өрөө, хэлний клуб, уран зохиолын клуб зэрэг олон төрлийн үйл ажиллагааг зохион байгуулдаг. Мөн байнгын болон түр үзэсгэлэн, судалгааны арга хэмжээ зохион байгуулж, иргэдийн боловсрол, мэдлэгийг нэмэгдүүлэхэд хувь нэмэр оруулдаг.',
    image: '/akuma.jpg',
    created: '1975',
    location:
      'Төв Салбар: Баянгол дүүрэг, 10-р хороолол, Ажилчны гудамж 4, Акума төв | ' +
      'Цайз 16 Салбар: Баянзүрх дүүрэг, 19 хороо, Да Хүрээ гудамж, 39-1 | ' +
      'Баянбүрд Салбар: Сонгинохайрхан дүүрэг, 9-р хороо, Алтай 1-6 | ' +
      '32 Салбар: 32-н автобусны буудлын замын эсрэг талд | ' +
      '5н Шар Салбар: 5шар призр даваад Энхжин худалдааны төвийн өөдөөс харсан Акума төв | ' +
      'Чулуун Овоо Салбар: Баянзүрх дүүрэг, 12-р хороо, Жанжин 25 гудамж, 614 тоот',
  },
  {
    id: '4',
    title: 'Тэрэлж Ресорт',
    content:
      'Тэрэлж Ресорт нь байгалийн үзэсгэлэнт газар болох Тэрэлжийн байгалийн цогцолборт газрын төвд байрлах амралтын газар бөгөөд зочдод тав тухтай орчин, байгалийн сайхныг мэдрэх боломжийг олгодог. Амралтын газарт 9-н тансаг зэрэглэлийн гэр, 18 өрөө бүхий зочид буудал байдаг. Энэхүү төв нь хүүхэд, залуучууд, гэр бүлд зориулсан төрөл бүрийн сургалт, соёлын арга хэмжээ зохион байгуулдаг.',
    image: '/terelj.jpg',
    created: '1985',
    location: 'Улаанбаатар, Налайх дүүрэг',
  },
];

// SSG-d zoriulj buh id-g uridchilan uusgene
export async function generateStaticParams() {
  return detailsData.map((book) => ({
    id: book.id,
  }));
}

interface PageProps {
  params: { id: string };
}

export default function YellowBookPage({ params }: PageProps) {
  const data = detailsData.find((book) => book.id === params.id);

  if (!data) return <p className="p-8">No data found.</p>;

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
              src={data.image}
              alt={data.title}
              fill
              className="rounded-md object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-700 mb-4">{data.content}</p>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex">
                <span className="font-semibold w-32">Үүссэн он:</span>
                <span className="text-gray-700">{data.created}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Байршил:</span>
                <span className="text-gray-700">{data.location}</span>
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
