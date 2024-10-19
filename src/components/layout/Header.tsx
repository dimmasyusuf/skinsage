import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-background px-4 py-4 md:px-6">
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <nav className="mx-auto flex max-w-screen-lg items-center justify-center">
      <Link href="/">
        <Image
          src="/images/logo.webp"
          alt="Skinsage"
          width={162}
          height={102}
          className="h-8 w-full"
        />
      </Link>
    </nav>
  );
}
