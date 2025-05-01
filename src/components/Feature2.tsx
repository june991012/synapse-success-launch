
import React from 'react';
import { MessageSquare, Brain, Lightbulb } from 'lucide-react';

const Feature2 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Synapse Assist</span>: AI 기반 고객 성공 자동화
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              End-User가 필요로 하는 도움과 성공 전략을 기다리지 않고 얻도록. Synapse AI가 고객의 질문(프롬프트)과 맥락을 
              즉시 이해하고 최적의 솔루션과 선제적 제안을 자동으로 제공합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <div className="bg-primary text-white p-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm ml-2">Synapse AI Assistant</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">U</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">사용자 프롬프트:</p>
                      <p className="text-gray-800 mt-1">대시보드에서 주간 사용자 활동을 팀별로 비교하는 방법이 궁금합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Zap size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Synapse AI 응답:</div>
                      <div className="mt-2 space-y-3">
                        <p className="text-gray-800">팀별 주간 사용자 활동을 비교하는 방법을 안내해 드리겠습니다:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>대시보드에서 "분석" 탭으로 이동</li>
                          <li>"팀 성과" 카드에서 우측 상단 필터 버튼 클릭</li>
                          <li>"기간 설정"에서 "주간" 선택 후 비교할 날짜 범위 지정</li>
                          <li>"데이터 보기" 드롭다운에서 "팀별 비교" 선택</li>
                        </ol>
                        <div className="bg-primary/10 p-3 rounded-md text-sm">
                          <p className="font-medium text-primary">맞춤 팁: </p>
                          <p>귀사는 최근 신규 팀 3개를 추가했네요. 팀 비교 시 "신규/기존 팀 분리 보기" 옵션을 활성화하면 더 명확한 인사이트를 얻을 수 있습니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-10">
              <div className="feature-card">
                <div className="feature-icon">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">즉각적인 맞춤 문제 해결</h3>
                <p className="text-gray-700">
                  End-User가 프롬프트로 질문하거나 문제를 입력하면, Synapse AI가 사용자의 고유한 맥락을 실시간으로 파악하여 
                  가장 정확하고 개인화된 해결책 또는 가이드를 즉시 자동으로 제공합니다.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">선제적인 성공 컨설팅</h3>
                <p className="text-gray-700">
                  AI가 사용자의 제품 활용 데이터와 목표를 분석하여, 질문하지 않아도 제품 가치를 극대화할 수 있는 
                  기능 활용법과 최적화 방안을 먼저 발견하고 제안합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;

function Zap(props: { size: number; }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size} 
      height={props.size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
}
