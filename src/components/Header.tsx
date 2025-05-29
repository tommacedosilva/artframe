import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 bg-black text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">ArtFrame</h1>
      <nav className="space-x-4">
        <Link href="/">Início</Link>
        <Link href="/cineframe">CineFrame</Link>
        <Link href="/pitches">Pitches</Link>
        <Link href="/shop">Shop</Link>
      </nav>
    </header>
  );
}
