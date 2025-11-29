import Navbar from './components/navbar';
import Hero from './components/hero';
import Industries from './components/Industries';
import WhatWeDo from './components/what-we-do';
import ProblemSolution from './components/problem-solution';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='bg-white'>
      <Navbar />
      <Hero />
      <Industries />
      <ProblemSolution />
      <WhatWeDo />
      <Footer />
    </main>
  );
}
