"use client";

import { useState } from "react";
import SimpleHero from '@/components/sections/SimpleHero';
import Edge from '@/components/sections/Edge';
import CatFramework from '@/components/sections/CatFramework';
import Flowchart from '@/components/sections/Flowchart';
import Stats from '@/components/sections/Stats';
import Clients from '@/components/sections/Clients';
import Faqs from '@/components/sections/Faqs';
import Programs from '@/components/sections/Programs';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';
import ApplicationModal from '@/components/ApplicationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <SimpleHero />
      <Edge />
      <CatFramework />
      <Flowchart />
      <Stats />
      <Clients />
      <Programs />
      <Faqs />
      <Testimonials />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

