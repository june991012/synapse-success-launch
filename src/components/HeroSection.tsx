
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, MailCheck, MessageSquare, FileSpreadsheet } from 'lucide-react';

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-secondary/50 to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              고객 성공의 <span className="text-primary">새로운 공식</span>을 소개합니다.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto lg:mx-0">
              최고의 CSM 인텔리전스 파트너 Synapse와 함께 고객 성공의 새로운 기준을 만드세요.
            </p>
            <Button 
              onClick={scrollToWaitlist}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md transition-all"
            >
              사전 등록하기
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] w-full">
              {/* Central Synapse element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-6 rounded-full shadow-lg z-20">
                <div className="w-24 h-24 flex items-center justify-center text-3xl font-bold">
                  ⚡
                </div>
              </div>
              
              {/* Data source icons flowing into the center */}
              <div className="absolute top-[10%] left-[20%] animate-float bg-white p-4 rounded-lg shadow-md z-10">
                <Database className="w-10 h-10 text-primary" />
                <p className="text-xs font-medium mt-1">CRM</p>
              </div>
              
              <div className="absolute top-[70%] left-[15%] animate-float-delay-1 bg-white p-4 rounded-lg shadow-md z-10">
                <MailCheck className="w-10 h-10 text-primary" />
                <p className="text-xs font-medium mt-1">Email</p>
              </div>
              
              <div className="absolute top-[25%] right-[15%] animate-float-delay-2 bg-white p-4 rounded-lg shadow-md z-10">
                <MessageSquare className="w-10 h-10 text-primary" />
                <p className="text-xs font-medium mt-1">Slack</p>
              </div>
              
              <div className="absolute top-[60%] right-[20%] animate-float bg-white p-4 rounded-lg shadow-md z-10">
                <FileSpreadsheet className="w-10 h-10 text-primary" />
                <p className="text-xs font-medium mt-1">Zoom</p>
              </div>
              
              {/* Connecting lines/arrows (simplified CSS version) */}
              <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 100 L200 200" stroke="rgba(0, 139, 139, 0.3)" strokeWidth="3" fill="none" />
                  <path d="M100 300 L200 200" stroke="rgba(0, 139, 139, 0.3)" strokeWidth="3" fill="none" />
                  <path d="M300 120 L200 200" stroke="rgba(0, 139, 139, 0.3)" strokeWidth="3" fill="none" />
                  <path d="M300 280 L200 200" stroke="rgba(0, 139, 139, 0.3)" strokeWidth="3" fill="none" />
                </svg>
              </div>
              
              {/* Output insight boxes */}
              <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md z-30 w-64 animate-pulse-slow">
                <p className="text-sm font-medium text-primary">명확한 인사이트</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10"></div>
    </section>
  );
};

export default HeroSection;
