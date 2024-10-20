import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui';
import {ChevronRight, Menu} from 'lucide-react';
import {navbarMenu} from '@/lib/constants';

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-background px-4 py-4 md:px-6">
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <nav className="relative mx-auto flex max-w-screen-lg items-center justify-center">
      <NavbarMenuMobile />

      <Link href="/" className="md:absolute md:left-0 md:w-auto">
        <Image
          src="/images/logo.webp"
          alt="Skinsage Logo"
          width={162}
          height={102}
          className="h-8 w-full md:h-9"
        />
      </Link>

      <NavbarMenu />

      <Button className="absolute right-0 h-8 rounded-full md:right-0 md:h-9" asChild>
        <Link href="/">Join</Link>
      </Button>
    </nav>
  );
}

function NavbarMenu() {
  return (
    <ul className="hidden items-center justify-center md:flex">
      {navbarMenu.map(menu => (
        <li key={menu.name}>
          <Button variant="ghost" asChild>
            <Link href={menu.link}>{menu.name}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}

function NavbarMenuMobile() {
  return (
    <Drawer>
      <DrawerTrigger className="absolute left-0 md:hidden">
        <Menu size={32} />
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-4">
        <DrawerHeader className="w-full border-b px-4">
          <DrawerTitle className="text-left">Menu</DrawerTitle>
          <DrawerDescription className="sr-only">Explore Skin Sage Menu</DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-6 px-4 pb-6">
          <div className="flex flex-col gap-2">
            {navbarMenu.map(menu => (
              <Link
                key={menu.name}
                href={menu.link}
                className="flex h-10 items-center justify-between text-sm font-normal hover:text-muted-foreground"
              >
                {menu.name} <ChevronRight size={24} />
              </Link>
            ))}
          </div>

          <DrawerFooter className="flex flex-row items-center gap-2 p-0">
            <Button size="lg" className="w-full" asChild>
              <Link href="/">Join the waitlist</Link>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
