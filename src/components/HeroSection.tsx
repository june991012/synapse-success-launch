import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-16 overflow-hidden bg-gradient-to-b from-secondary/50 to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              고객 성공의 <span className="text-primary">새로운 공식</span>을 소개합니다.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto lg:mx-0 whitespace-pre-line">
              {'최고의 CSM 인텔리전스 파트너 Synapse와 함께\n고객 성공의 새로운 기준을 만드세요.'}
            </p>
            <Button 
              onClick={scrollToWaitlist}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md transition-all"
            >
              사전 등록하기
            </Button>
          </div>
          
          <div className="relative h-[400px] w-full">
            {/* Connecting lines/arrows */}
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* 왼쪽 상단 (Salesforce) */}
                <path d="M5 115 L180 190" stroke="rgba(0, 139, 139, 0.2)" strokeWidth="2" fill="none" />
                
                {/* 왼쪽 하단 (Gmail) */}
                <path d="M90 30 L190 210" stroke="rgba(0, 139, 139, 0.2)" strokeWidth="2" fill="none" />
                
                {/* 오른쪽 상단 (Slack) */}
                <path d="M305 85 L220 190" stroke="rgba(0, 139, 139, 0.2)" strokeWidth="2" fill="none" />
                
                {/* 오른쪽 하단 (Zoom) */}
                <path d="M20 320 L210 210" stroke="rgba(0, 139, 139, 0.2)" strokeWidth="2" fill="none" />
                
                {/* 상단 중앙 (KakaoTalk) */}
                <path d="M340 300 L200 170" stroke="rgba(0, 139, 139, 0.2)" strokeWidth="2" fill="none" />
                
                {/* 오른쪽 중앙 (Phone) */}
                <path d="M350 200 L230 200" stroke="rgba(0, 139, 139, 0.2)" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Central Synapse element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-7 rounded-full shadow-lg z-20">
              <div className="w-28 h-28 flex items-center justify-center text-5xl font-bold">
                ⚡
              </div>
            </div>
            
            {/* Data source icons flowing into the center */}
            <div className="absolute top-[22%] left-[16%] animate-float bg-white p-4 rounded-lg shadow-md z-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
                alt="Salesforce" 
                className="w-12 h-12 object-contain"
              />
            </div>
            
            <div className="absolute bottom-[12%] left-[20%] animate-float-delay-1 bg-white p-4 rounded-lg shadow-md z-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
                alt="Gmail" 
                className="w-10 h-10 object-contain"
              />
            </div>
            
            <div className="absolute top-[15%] right-[32%] animate-float-delay-2 bg-white p-4 rounded-lg shadow-md z-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" 
                alt="Slack" 
                className="w-10 h-10 object-contain"
              />
            </div>
            
            <div className="absolute bottom-[15%] right-[28%] animate-float bg-white p-4 rounded-lg shadow-md z-10">
              <img 
                src="https://img.freepik.com/premium-vector/square-zoom-logo-isolated-white-background_469489-910.jpg" 
                alt="Zoom" 
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="absolute left-[35%] top-[5%] transform -translate-x-1/2 animate-float-delay-1 bg-white p-4 rounded-lg shadow-md z-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" 
                alt="KakaoTalk" 
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="absolute right-[22%] top-[40%] transform -translate-y-1/2 animate-float-delay-2 bg-white p-4 rounded-lg shadow-md z-10">
              <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#34C759">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
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
