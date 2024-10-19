import {Header} from '@/components/layout';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
