import { Button } from '@/components/ui/button';
import { PlusIcon, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-black">
      <h1 className="text-3xl font-semibold">Шар ном</h1>

      <div className="flex items-center gap-4">
        <Link href="/upload-page">
          <Button>
            <PlusIcon></PlusIcon>
            <span>Нэмэх</span>
          </Button>
        </Link>
        <Button>
          <User></User>
          <span>Нэвтрэх</span>
        </Button>
      </div>
    </header>
  );
}
