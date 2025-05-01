import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WaitlistSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [source, setSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !company || !companySize || !source) {
      toast({
        title: "입력 오류",
        description: "모든 필드를 작성해주세요.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "웨이트리스트 등록 완료",
        description: "Synapse의 최신 소식을 이메일로 알려드리겠습니다.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setCompanySize('');
      setSource('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            고객 성공의 미래를 먼저 경험하세요
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Synapse는 CSM 업무의 새로운 표준을 제시합니다. 
            웨이트리스트에 등록하여 혁신적인 여정을 함께해 주세요.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="회사명"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                      <SelectValue placeholder="회사 인원 수" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10명</SelectItem>
                      <SelectItem value="11-50">11-50명</SelectItem>
                      <SelectItem value="51-100">51-100명</SelectItem>
                      <SelectItem value="100+">100명 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={source} onValueChange={setSource}>
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                      <SelectValue placeholder="유입 경로" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">구글 광고</SelectItem>
                      <SelectItem value="kakao">카카오톡 톡방</SelectItem>
                      <SelectItem value="interview">인터뷰 진행</SelectItem>
                      <SelectItem value="linkedin">링크드인 광고</SelectItem>
                      <SelectItem value="other">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md text-lg transition-all"
              >
                {isSubmitting ? '처리 중...' : '웨이트리스트 등록하기'}
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              개인정보는 Synapse의 최신 소식을 알려드리는 목적으로만 사용됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
