import React from 'react';
import { Activity, CheckCircle2 } from 'lucide-react';
import { SHADOW_CARD } from '../data/mockData';

interface LoadingScreenProps {
  step: number;
}

export default function LoadingScreen({ step }: LoadingScreenProps) {
  const steps = [
    { title: '多源数据采集 (API/爬虫/RPA并跑)', desc: '正在抓取品牌及竞品底层数据...' },
    { title: '大模型语义计算与评分引擎', desc: '进行情感分类、槽点聚类及指标标准化计算...' },
    { title: '报告生成与商业洞察', desc: '融合行业基线产出策略指导...' }
  ];

  return (
    <div className={`max-w-md mx-auto mt-24 p-10 bg-white rounded-3xl ${SHADOW_CARD} text-center animate-in zoom-in-95 duration-700`}>
      <div className="relative w-24 h-24 mx-auto mb-8">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        <Activity className="absolute inset-0 m-auto w-8 h-8 text-blue-600 animate-pulse" />
      </div>
      <h2 className="text-xl font-black text-slate-900 mb-8 tracking-tight">AI 诊断引擎运转中</h2>
      <div className="space-y-6 text-left">
        {steps.map((s, idx) => (
          <div key={idx} className={`flex gap-4 transition-all duration-500 ${step >= idx ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-2'}`}>
            <div className="mt-0.5 shrink-0">
              {step > idx ? <CheckCircle2 className="w-6 h-6 text-blue-600" /> : 
               step === idx ? <div className="w-6 h-6 rounded-full border-[3px] border-blue-600 border-t-transparent animate-spin" /> : 
               <div className="w-6 h-6 rounded-full border-[3px] border-slate-200" />}
            </div>
            <div>
              <p className={`font-bold ${step >= idx ? 'text-slate-900' : 'text-slate-500'}`}>{s.title}</p>
              <p className="text-xs font-medium text-slate-400 mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
