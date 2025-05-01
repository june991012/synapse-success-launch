
import React from 'react';
import { Rocket, Smile, Lightbulb, TrendingUp } from 'lucide-react';

const ValueSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Synapse</span> : CSM의 성공, 고객의 성공, 그리고 비즈니스의 성공
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">정보 탐색 시간 감소를 통한 CSM 생산성 극대화</h3>
              <p className="text-gray-700 text-sm">
                분산된 정보 수집과 통합에 쓰던 시간을 고객 관계 강화와 전략적 활동에 투자하세요.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Smile className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">자동화된 고객 지원을 통한 고객 만족도 향상</h3>
              <p className="text-gray-700 text-sm">
                즉각적이고 정확한 대응으로 고객의 성공 경험을 향상시켜 로열티를 높이세요.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI 코칭을 통한 팀 전체 역량 상향 평준화</h3>
              <p className="text-gray-700 text-sm">
                경험과 노하우를 조직 지식으로 축적하여 모든 CSM이 최고 수준의 역량을 발휘하도록 지원합니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">데이터 기반 추가 성장 기회 포착</h3>
              <p className="text-gray-700 text-sm">
                고객 인사이트를 활용해 교차 판매, 상향 판매 기회를 선제적으로 발견하고 전략적으로 접근하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
