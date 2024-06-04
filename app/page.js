import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FooterSmall from '@/components/FooterSmall';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
      </main>
      <FooterSmall/>
    </>
  );
}