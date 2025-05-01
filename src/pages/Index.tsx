
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import Feature1 from '@/components/Feature1';
import Feature2 from '@/components/Feature2';
import Feature3 from '@/components/Feature3';
import ValueSection from '@/components/ValueSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Synapse - CSM 인텔리전스 플랫폼";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Synapse와 함께 고객 성공의 새로운 기준을 만드세요. CSM의 역량 강화를 위한 최고의 AI 인텔리전스 플랫폼.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <ValueSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
