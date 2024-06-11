import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FooterSmall from '@/components/FooterSmall';
import Problem from '@/components/Problem';
import FAQ from '@/components/FAQ';

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