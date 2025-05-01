import React from 'react';
import { BookOpen, FileCheck, Trophy } from 'lucide-react';

const Feature3 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Synapse Reflect</span> : 모든 CSM을 최고 수준의 전문가로
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto whitespace-pre-line">
              {'소수 \'에이스\'의 경험과 노하우를 팀 전체의 자산으로.\n성공 데이터를 기반으로 CSM 역량 향상을 위한 코칭과 피드백을 제공합니다.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="feature-card">
                <div className="feature-icon">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">우수사례 기반 플레이북 & 코칭</h3>
                <p className="text-gray-700">
                  조직 내 우수 성과 CSM의 성공 전략과 커뮤니케이션 방식을 AI가 학습하여 다른 CSM들이 
                  업무에서 활용 가능한 실시간 제안을 제공해요.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FileCheck size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">미팅/통화 후 AI 자동 피드백</h3>
                <p className="text-gray-700">
                  대면 미팅, 화상 미팅, 통화 등 고객과의 상호작용 직후 AI가 분석 리포트와 
                  맞춤형 피드백을 즉시 제공하여 빠른 성장을 도와요.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <div className="bg-primary text-white p-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm ml-2">AI 피드백 리포트</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold">B사 QBR 미팅 분석 결과</h3>
                  <div className="flex items-center">
                    <Trophy className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">95점</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium text-sm mb-2">강점</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>데이터 기반 인사이트 제시가 명확함</li>
                      <li>고객 비즈니스 목표 연계 전략이 우수함</li>
                      <li>질문에 대한 전문적이고 상세한 답변</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-primary font-medium text-sm mb-2">개선 기회</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>ROI 수치 제시가 더 구체적이면 좋을 것</li>
                      <li>성공 사례 공유 시 관련 산업 예시 추가 권장</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <h4 className="text-primary font-medium text-sm mb-2">AI 추천 리소스</h4>
                    <p className="text-sm">김지영 팀장의 "산업별 ROI 계산 프레임워크" 문서 참고</p>
                    <div className="mt-2 text-xs text-primary underline cursor-pointer">리소스 바로가기</div>
                  </div>
                  
                  <div>
                    <h4 className="text-primary font-medium text-sm mb-2">다음 미팅 준비 체크리스트</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-primary" />
                        <span>신규 기능 활용 사례 3가지 준비</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-primary" />
                        <span>분기별 사용량 리포트 시각화 자료</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded text-primary" />
                        <span>확장 전략 제안서 업데이트</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
