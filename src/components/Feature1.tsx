
import React from 'react';
import { Database, Zap, Layers } from 'lucide-react';

const Feature1 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Synapse Connect</span> : 단절 없는 옴니채널 컨텍스트 통합
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              고객과 소통하는 핵심 채널 데이터를 지능적으로 연결하여 항상 완전한 최신의 정보를 제공합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="feature-card">
                <div className="feature-icon">
                  <Layers size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">통합 데이터 접근성</h3>
                <p className="text-gray-700">
                  더 이상 여러 툴을 오갈 필요 없어요. 이메일, Slack, 통화 내용, Zoom Call까지 산재된 고객 정보와 맥락을 
                  Synapse 한 곳에서 확인하여 업무 흐름을 간소화하세요.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">실시간 AI 브리핑</h3>
                <p className="text-gray-700">
                  단 몇 초 만에 고객사와 소통한 모든 채널의 최신 핵심 정보를 AI가 요약하여 브리핑해요. 
                  완벽한 사전 준비로 대화의 질을 높이세요.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <div className="bg-primary text-white p-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm ml-2">Synapse AI 브리핑</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-bold mb-2">A사 고객 최근 업데이트 (2분 전 갱신)</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-medium text-primary">이메일 (오늘 오전 10:23)</p>
                      <p className="text-sm mt-1">A사 김영호 담당자가 새로운 기능 출시 일정 문의</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-medium text-primary">Slack (어제 오후 4:12)</p>
                      <p className="text-sm mt-1">대시보드 데이터 로딩 지연 이슈 해결 확인</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-medium text-primary">마지막 미팅 (3일 전)</p>
                      <p className="text-sm mt-1">엔터프라이즈 플랜 업그레이드 논의, 추가 사용자 10명 요청</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">AI 추천 액션</h4>
                  <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
                    <li>새 기능 출시 일정표 준비</li>
                    <li>엔터프라이즈 플랜 맞춤형 제안서 작성</li>
                    <li>추가 사용자 온보딩 계획 공유</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
