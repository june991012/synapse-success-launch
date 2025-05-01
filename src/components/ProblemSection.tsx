
import React from 'react';
import { User } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full lg:w-2/5">
              <div className="relative h-[300px] md:h-[400px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
                  <div className="bg-secondary/60 rounded-lg p-6 shadow-lg border border-gray-200 relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-md">
                      <User className="w-10 h-10 text-primary" />
                    </div>
                    <div className="mt-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">?</div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">?</div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">?</div>
                        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    {/* Scattered info pieces */}
                    <div className="absolute -top-3 -right-3 bg-white p-2 rounded shadow-sm border border-gray-100 rotate-12 text-xs">CRM 데이터</div>
                    <div className="absolute bottom-5 -right-4 bg-white p-2 rounded shadow-sm border border-gray-100 -rotate-6 text-xs">이메일 내용</div>
                    <div className="absolute -bottom-4 left-10 bg-white p-2 rounded shadow-sm border border-gray-100 rotate-3 text-xs">회의록</div>
                    <div className="absolute top-10 -left-5 bg-white p-2 rounded shadow-sm border border-gray-100 -rotate-12 text-xs">슬랙 대화</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                10분 미팅을 위한 1시간의 정보 탐색, 하루 30번 이상의 컨텍스트 스위칭…
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                CSM의 소중한 시간이 고객과의 관계가 아닌 정보의 파편 속에서 길을 찾는 데 쓰이고 있지 않나요?
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">실제 CSM들은 이렇게 말합니다.</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="quote-card">
                    <p className="italic text-gray-700">
                      "미팅 전에 알아야 할 정보가 너무 많아요. 여러 채널 확인하려고 시간을 너무 많이 써요."
                    </p>
                  </div>
                  <div className="quote-card">
                    <p className="italic text-gray-700">
                      "고객사마다 비슷한 내용을 계속 반복해서 설명하는 게 너무 고통스럽고 비효율적이에요."
                    </p>
                  </div>
                  <div className="quote-card md:col-span-2">
                    <p className="italic text-gray-700">
                      "잘 하는 동료의 노하우는 배우고 싶은데, 옆에 딱 붙어있지 않는 이상 알 수가 없죠."
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-primary font-medium">
                이런 고민을 Synapse가 해결해 드립니다. CSM이 진정한 고객 성공 파트너가 되도록.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
