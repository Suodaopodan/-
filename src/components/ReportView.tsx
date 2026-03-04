import React, { useState } from 'react';
import { 
  ArrowLeft, Download, PieChart, Info, TrendingUp, TrendingDown, 
  Zap, ArrowRight, Layers, BarChart2, Search, Smile, Cloud, 
  ThumbsDown, MessageCircle, Activity, DollarSign, X, Heart
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell,
  AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import { 
  SUMMARY_CARDS, RADAR_DATA, FILLING_DATA, TREND_DATA, 
  PROS_CONS, WORD_CLOUD, CARD_BASE, CONTENT_DETAILS_DATA, COMMENTS_DATA, SEARCH_RANKING_DATA, SEARCH_OCCUPANCY_DATA, KEYWORD_DETAILS_DATA
} from '../data/mockData';

interface ReportViewProps {
  formData: any;
  onBack: () => void;
}

export default function ReportView({ formData, onBack }: ReportViewProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isOccupancyOpen, setIsOccupancyOpen] = useState(false);
  const [isKeywordsOpen, setIsKeywordsOpen] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-24">
      {/* 报告头部 */}
      <div className="flex justify-between items-end">
        <div>
          <button onClick={onBack} className="text-xs font-bold text-slate-400 hover:text-blue-600 flex items-center gap-1.5 mb-5 transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> 返回工作台
          </button>
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">{formData.brand || '珀莱雅 PROYA'}</h1>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg tracking-wide uppercase">商业诊断报告</span>
          </div>
          <div className="flex gap-6 mt-3 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/>行业: {formData.industry || '美妆个护 > 护肤'}</div>
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/>平台: {formData.platform === 'bilibili' ? 'B站' : '小红书'}</div>
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/>周期: 近90天</div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 font-bold rounded-xl hover:text-blue-600 shadow-sm border border-slate-100 transition-all">
          <Download className="w-4 h-4" /> 导出 PDF
        </button>
      </div>

      {/* 核心摘要 Dashboard */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <PieChart className="w-5 h-5 text-blue-600" /> Executive Summary <span className="text-slate-300 font-normal mx-2">|</span> 核心摘要
          </h2>
          <button className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
            <BarChart2 className="w-3.5 h-3.5" /> 查看竞品详细数据 <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        
        {/* 五维指标概览卡片 - 纯净蓝白主题 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">
          {SUMMARY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="bg-white rounded-2xl p-5 flex flex-col justify-between group hover:shadow-md transition-all border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="text-sm font-bold text-slate-700 leading-tight w-14 break-words">{card.title}</span>
                    </div>
                  </div>
                  <div className={`flex items-center text-xs font-bold shrink-0 ml-1 ${card.isUp ? 'text-blue-600' : 'text-slate-400'}`}>
                    {card.isUp ? '+' : ''}{card.trend}%
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">{card.score}</span>
                  <span className="text-sm font-bold text-slate-400">/100</span>
                </div>
                
                {/* 竞品数据展示 */}
                <div className="space-y-2 pt-3 border-t border-slate-50">
                  {card.competitors && card.competitors.map((comp, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-orange-500' : 'bg-purple-500'}`}></div>
                        <span className="font-medium text-slate-500">{comp.name}</span>
                      </div>
                      <span className="font-bold text-slate-700">{comp.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* 左侧：总分与雷达图 */}
          <div className="col-span-12 lg:col-span-5 flex flex-col border-r border-slate-100 pr-10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">内容资产健康度总分</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">85</span>
                  <span className="text-lg font-bold text-slate-400">/100</span>
                </div>
              </div>
              <div className="bg-blue-600 px-5 py-3 rounded-2xl text-center shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
                <p className="text-white font-black text-2xl leading-none mb-1">S<span className="text-sm ml-0.5 font-bold">级</span></p>
                <p className="text-blue-100 text-[10px] font-bold tracking-wider uppercase">领先资产</p>
              </div>
            </div>
            
            <div className="w-full h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RADAR_DATA}>
                  <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="本品" dataKey="A" stroke="#2563eb" strokeWidth={2} fill="#3b82f6" fillOpacity={0.15} />
                  <Radar name="欧莱雅" dataKey="C" stroke="#f97316" strokeWidth={2} fill="none" />
                  <Radar name="雅诗兰黛" dataKey="D" stroke="#a855f7" strokeWidth={2} fill="none" />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 500, paddingTop: '10px' }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 右侧：AI 诊断结论 */}
          <div className="col-span-12 lg:col-span-7 space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-wide">
                <Zap className="w-4 h-4 text-blue-600 fill-current" /> AI 核心发现
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    <span className="font-bold text-slate-900">搜索能见度存在断层：</span>虽然内容填充度高（SOV达85%），但词库Top10核心词的搜索霸屏率极低，搜后真实曝光占比仅为3.2%，<span className="text-slate-900 underline decoration-blue-200 decoration-2 underline-offset-4">内容陷入“海量产出但未被看见”的陷阱</span>。
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    <span className="font-bold text-slate-900">UGC生态健康：</span>真实用户种草（UGC+PGC）占比达72%，舆情净推荐值高于行业均值15%，口碑基础极佳。
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    <span className="font-bold text-slate-900">场景破圈词发力不足：</span>SOV声量高度集中在“防守词”，在核心痛点词下被竞品欧莱雅严重挤压拦截。
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">优先行动建议</h3>
              <p className="text-sm text-blue-700 font-bold mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> 从“堆量防守”转向“搜索卡位”
              </p>
              <p className="text-sm text-slate-500 font-medium mb-4 leading-relaxed">建议缩减日常品宣BGC铺量预算，将资源集中于Top10核心痛点词的爆文矩阵打造与聚光搜索占位，提升搜后转化效率。</p>
              <button className="text-xs font-bold bg-white text-blue-600 px-4 py-2 rounded-lg hover:shadow-md transition-all border border-slate-100">
                生成详细投放策略方案
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 详细诊断 - 维度1：内容填充度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-blue-600" /> 1. 内容填充度诊断 <span className="text-slate-300 font-normal mx-2">|</span> Volume & SOV
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">85</span>
             <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">S级</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧卡片：总量与均值对比 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 flex flex-col justify-center relative group">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <BarChart2 className="w-4 h-4" /> 品牌词内容总量 vs 行业均值
              </h3>
              <button 
                onClick={() => setIsDetailsOpen(true)}
                className="text-[10px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                <Search className="w-3 h-3" /> 查看明细
              </button>
            </div>
            
            <div className="flex items-end gap-6 mb-6">
               <div className="flex-1">
                 <div className="text-xs font-bold text-slate-500 mb-2">本品内容总量 (篇)</div>
                 <div className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                   {FILLING_DATA.brandVolume.toLocaleString()}
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                     <TrendingUp className="w-3 h-3" /> 同比 +{FILLING_DATA.yoy}%
                   </div>
                   <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                     <TrendingUp className="w-3 h-3" /> 环比 +{FILLING_DATA.mom}%
                   </div>
                 </div>
               </div>
               <div className="flex-1">
                 <div className="text-xs font-bold text-slate-400 mb-2">行业Top品牌均值</div>
                 <div className="text-2xl font-black text-slate-400 tracking-tight">
                   {FILLING_DATA.industryAvg.toLocaleString()}
                 </div>
               </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-blue-600">本品</span>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-100/50 px-2 py-1 rounded-md">
                    {(FILLING_DATA.brandVolume / FILLING_DATA.industryAvg).toFixed(1)}x 行业均值
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2 font-bold text-slate-400">
                  <span>行业均值</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-slate-400 h-full rounded-full" 
                    style={{ width: `${(FILLING_DATA.industryAvg / FILLING_DATA.brandVolume) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* 中间卡片：SOV 仪表盘 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 flex flex-col justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <PieChart className="w-4 h-4" /> 品牌内容笔记占有率 (SOV)
            </h3>
            
            <div className="flex-1 flex flex-col items-center justify-end relative h-[180px]">
               <div className="absolute inset-0 top-4">
                 <ResponsiveContainer width="100%" height="100%">
                   <RechartsPieChart>
                      <Pie
                        data={[
                          { value: FILLING_DATA.sov }, 
                          { value: 100 - FILLING_DATA.sov }
                        ]}
                        cx="50%" cy="100%"
                        startAngle={180} endAngle={0}
                        innerRadius={75} outerRadius={110}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={6}
                      >
                        <Cell fill="#2563eb" /> {/* blue-600 */}
                        <Cell fill="#e2e8f0" /> {/* slate-200 */}
                      </Pie>
                   </RechartsPieChart>
                 </ResponsiveContainer>
               </div>
               
               <div className="text-center z-10 pb-2">
                 <div className="text-5xl font-black text-slate-900 tracking-tight">
                   {FILLING_DATA.sov}<span className="text-2xl text-slate-400 ml-1">%</span>
                 </div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-3">
                   大盘总容量: {FILLING_DATA.totalMarket.toLocaleString()} 篇
                 </div>
               </div>
            </div>
          </div>

          {/* 右侧卡片：UGC vs BGC 结构占比 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <PieChart className="w-4 h-4" /> 内容生态结构占比
            </h3>
            
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <div className="w-24 h-24 shrink-0 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={[
                        { value: 72, fill: '#2563eb' }, // blue-600
                        { value: 28, fill: '#94a3b8' }  // slate-400
                      ]}
                      cx="50%" cy="50%"
                      innerRadius="65%" outerRadius="100%"
                      dataKey="value"
                      stroke="none"
                      startAngle={90} endAngle={-270}
                      paddingAngle={2}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex-1 w-full space-y-4">
                <div className="flex justify-between items-start">
                  <div className="pr-2">
                    <div className="text-sm font-bold text-slate-900">非商业笔记 <span className="text-xs font-medium text-slate-400 ml-1">真实种草</span></div>
                    <div className="text-[10px] font-medium text-slate-400 mt-1 leading-snug">生态健康，长尾达人发文意愿强</div>
                  </div>
                  <div className="text-xl font-black text-blue-600">72%</div>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                  <div>
                    <div className="text-sm font-bold text-slate-500">商业笔记 <span className="text-xs font-medium text-slate-400 ml-1">官方干预</span></div>
                  </div>
                  <div className="text-lg font-black text-slate-400">28%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI 生态健康度评估 */}
        <div className="mt-6 bg-blue-50/30 border-l-4 border-blue-600 rounded-r-xl p-6 flex gap-4 items-start">
          <div className="mt-1">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-blue-700">AI 生态健康度评估</h3>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              内容填充度表现卓越，不仅总量与占有率（SOV: <span className="font-bold">35.8%</span>）建立绝对壁垒，且内容生态极度健康（UGC占比 <span className="font-bold">72%</span>），长尾达人自发发文意愿强。
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              <span>行动指引：维持当前 UGC 激励政策，下阶段预算向【搜索卡位】倾斜。</span>
            </div>
          </div>
        </div>
      </section>

      {/* 详细诊断 - 维度2：内容能见度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <Search className="w-5 h-5 text-blue-600" /> 2. 能见度异常剖析 <span className="text-slate-300 font-normal mx-2">|</span> Search Visibility Drop-off
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">45</span>
             <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md">C级</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">词库核心词 搜索霸屏热力图 (Top 10)</h3>
            <div className="bg-[#F8FAFC] rounded-2xl p-6 overflow-x-auto space-y-8">
              
              {/* 热力图 1: 内容洞察 */}
              <div className="min-w-max">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-200/60 pb-2">
                  <div className="w-1.5 h-3 bg-blue-400 rounded-full"></div>
                  <h4 className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">内容洞察 (品类核心词)</h4>
                </div>
                <div className="grid grid-cols-11 gap-1.5 mb-3">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">搜索词 \ 排名</div>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <div key={`c-${n}`} className="text-center text-[10px] text-slate-400 font-bold">Top {n}</div>
                  ))}
                </div>
                {[
                  { word: '抗老面霜', positions: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                  { word: '面霜推荐', positions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
                  { word: '紧致面霜', positions: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
                ].map((row, i) => (
                  <div key={`content-${i}`} className="grid grid-cols-11 gap-1.5 mb-1.5 items-center">
                    <div className="text-xs font-bold text-slate-700 truncate pr-3">{row.word}</div>
                    {row.positions.map((pos, j) => (
                      <div 
                        key={`pos-c-${i}-${j}`} 
                        onClick={() => setIsOccupancyOpen(true)}
                        className={`h-8 rounded-md transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-md ${
                          pos ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-200/50 hover:bg-slate-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>

              {/* 热力图 2: 搜索洞察 */}
              <div className="min-w-max">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-200/60 pb-2">
                  <div className="w-1.5 h-3 bg-blue-600 rounded-full"></div>
                  <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">搜索洞察 (场景痛点词)</h4>
                </div>
                <div className="grid grid-cols-11 gap-1.5 mb-3">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">搜索词 \ 排名</div>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <div key={`s-${n}`} className="text-center text-[10px] text-slate-400 font-bold">Top {n}</div>
                  ))}
                </div>
                {[
                  { word: '敏感肌修护', positions: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
                  { word: '早C晚A平替', positions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0] },
                  { word: '熬夜脸怎么救', positions: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0] },
                ].map((row, i) => (
                  <div key={`search-${i}`} className="grid grid-cols-11 gap-1.5 mb-1.5 items-center">
                    <div className="text-xs font-bold text-slate-700 truncate pr-3">{row.word}</div>
                    {row.positions.map((pos, j) => (
                      <div 
                        key={`pos-s-${i}-${j}`} 
                        onClick={() => setIsOccupancyOpen(true)}
                        className={`h-8 rounded-md transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-md ${
                          pos ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-200/50 hover:bg-slate-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex gap-6 mt-6 text-[11px] font-bold text-slate-400 justify-end pt-4 border-t border-slate-200/50">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-sm"></div> 品牌成功占位</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-200/50 rounded-sm"></div> 竞品或空白占位</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col justify-center space-y-8">
             <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">品牌词转化漏斗 (Brand Funnel)</h3>
              
              <div className="space-y-4 relative py-2">
                {/* 漏斗背景连线 */}
                <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-slate-100 z-0"></div>

                {/* Step 1: 搜索量 */}
                <div className="relative z-10 bg-[#F8FAFC] p-4 rounded-xl flex items-center justify-between border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-transform hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center border-[3px] border-white shrink-0">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 block mb-0.5">品牌搜索量</span>
                      <span className="text-[10px] font-medium text-slate-400">Search Volume</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-slate-900 tracking-tight">854,000</div>
                    <div className="flex items-center justify-end gap-1.5 mt-0.5">
                      <span className="text-[10px] font-bold text-slate-400">行业排名: Top 3</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded flex items-center">
                        <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +5.2%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 2: 搜后曝光渗透率 */}
                <div className="relative z-10 bg-blue-50/30 p-4 rounded-xl flex items-center justify-between border border-blue-100/30 shadow-[0_2px_8px_rgba(0,0,0,0.02)] ml-6 transition-transform hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center border-[3px] border-white shrink-0">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600 block mb-0.5">品牌搜后曝光渗透率</span>
                      <span className="text-[10px] font-medium text-blue-400">Exposure Penetration</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden hidden sm:block">
                          <div className="w-[15.2%] h-full bg-blue-400"></div>
                        </div>
                        <span className="text-sm font-black text-blue-600 w-12 text-right">15.2%</span>
                      </div>
                      <div className="flex items-center justify-end gap-1.5 mt-0.5">
                        <span className="text-[10px] font-bold text-blue-400">行业排名: Top 8</span>
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded flex items-center">
                          <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +2.1%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: 阅读渗透率 */}
                <div className="relative z-10 bg-blue-50/80 p-4 rounded-xl flex items-center justify-between border border-blue-200/50 shadow-[0_4px_12px_rgba(37,99,235,0.06)] ml-12 transition-transform hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center border-[3px] border-white shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-800 block mb-0.5">品牌阅读渗透率</span>
                      <span className="text-[10px] font-medium text-blue-500">Read Penetration</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden hidden sm:block">
                          <div className="w-[3.8%] h-full bg-blue-600"></div>
                        </div>
                        <span className="text-sm font-black text-blue-700 w-12 text-right">3.8%</span>
                      </div>
                      <div className="flex items-center justify-end gap-1.5 mt-0.5">
                        <span className="text-[10px] font-bold text-blue-500">行业排名: Top 15</span>
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded flex items-center">
                          <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +0.5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* AI 流量折损分析 */}
        <div className="mt-6 bg-blue-50/30 border-l-4 border-blue-600 rounded-r-xl p-6 flex gap-4 items-start">
          <div className="mt-1">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-blue-700">AI 流量折损分析</h3>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              我们在“场景痛点词”下的表现极为薄弱。以“<span className="font-bold">熬夜脸怎么救</span>”为例，尽管月搜量高达 12.6万，但品牌有效阅读渗透率仅为 <span className="font-bold text-blue-600 bg-blue-100 px-1 rounded">0.8%</span>，面临严重的流量流失陷阱。
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 pt-2 border-t border-blue-100">
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              <span>行动指引：将品宣预算转移至聚光平台，定向抢占“熬夜脸”等场景痛点词的 Top 3 搜索排位。</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* 详细诊断 - 维度3：内容好感度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <Smile className="w-5 h-5 text-blue-600" /> 3. 内容好感度诊断 <span className="text-slate-300 font-normal mx-2">|</span> Sentiment & Word-of-Mouth
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">68</span>
             <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">B级</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI语义识别 正负面占比</h3>
                <span className="text-xs font-bold text-slate-500">舆情净推荐值: <span className="text-blue-600 text-sm ml-1">+48.2</span></span>
              </div>
              <div className="w-full h-10 flex rounded-xl overflow-hidden gap-0.5">
                <div className="bg-blue-600 h-full flex items-center justify-center text-xs text-white font-bold" style={{ width: '62%' }}>正面 62%</div>
                <div className="bg-slate-300 h-full flex items-center justify-center text-xs text-slate-700 font-bold" style={{ width: '24%' }}>中立 24%</div>
                <div className="bg-slate-800 h-full flex items-center justify-center text-xs text-white font-bold" style={{ width: '14%' }}>负面 14%</div>
              </div>
            </div>
            
            {/* 新增：AI 提炼评论词云 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 flex-1 flex flex-col justify-center relative group">
               <div className="flex justify-between items-start mb-5">
                 <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                   <Cloud className="w-4 h-4 text-slate-400" /> AI 提炼评论词云
                 </h3>
                 <button 
                   onClick={() => setIsCommentsOpen(true)}
                   className="text-[10px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                 >
                   <MessageCircle className="w-3 h-3" /> 查看 Top 100 评论
                 </button>
               </div>
               <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 py-2">
                 {WORD_CLOUD.map((word, i) => (
                    <span
                       key={i}
                       className={`font-black tracking-tight ${word.color} hover:scale-110 transition-transform cursor-default`}
                       style={{ 
                         fontSize: `${12 + word.weight * 2.5}px`, 
                         opacity: 0.5 + (word.weight / 18) 
                       }}
                       title={`词频权重: ${word.weight}`}
                    >
                      {word.text}
                    </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-5">
              <h3 className="text-xs font-bold text-blue-600 mb-4 flex items-center gap-1.5 uppercase tracking-wider"><Smile className="w-4 h-4"/> 核心正面卖点 Top 5</h3>
              <div className="space-y-2.5">
                {PROS_CONS.pros.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm bg-white px-4 py-2.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <span className="text-slate-700 font-bold">{i+1}. {item.text}</span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">提及率 {item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-5">
              <h3 className="text-xs font-bold text-slate-500 mb-4 flex items-center gap-1.5 uppercase tracking-wider"><ThumbsDown className="w-4 h-4"/> 核心负面槽点 Top 5</h3>
              <div className="space-y-2.5">
                {PROS_CONS.cons.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm bg-white px-4 py-2.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <span className="text-slate-500 font-medium">{i+1}. {item.text}</span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">提及率 {item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI 公关舆情预警 */}
        <div className="mt-6 bg-blue-50/30 border-l-4 border-blue-600 rounded-r-xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-blue-700">AI 公关舆情预警</h3>
            </div>
            <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
              整体 NNS 净推荐值健康，但在最新 30 天内，关于<span className="font-bold text-slate-900 underline decoration-blue-300 decoration-2 underline-offset-2">“搓泥”</span>的负面情绪词频激增，已成为 Top 1 负面槽点，存在潜在口碑反噬风险。
            </p>
            <div className="flex items-start gap-2 text-xs font-bold text-slate-500 pt-4 border-t border-blue-100/50">
              <ArrowRight className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
              <span>行动指引：客服团队需加强在小红书评论区的引导，通过官方号置顶正确的使用手法（如乳化后再上脸）。</span>
            </div>
          </div>
          <Zap className="absolute -right-6 -bottom-6 w-32 h-32 text-blue-100/40 z-0 rotate-12" />
        </div>
      </section>

      {/* 详细诊断 - 维度4：内容讨论度 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <MessageCircle className="w-5 h-5 text-blue-600" /> 4. 内容讨论度诊断 <span className="text-slate-300 font-normal mx-2">|</span> Discussion & Trend
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">88</span>
             <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">S级</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5 flex justify-between items-end">
              <span>品牌主动搜索热度趋势 (近90天)</span>
              <button 
                onClick={() => setIsRankingOpen(true)}
                className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1"
              >
                当前行业搜索排名: <span className="text-blue-600 ml-1">Top 3</span> / 30
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </h3>
            <div className="h-56 w-full bg-[#F8FAFC] rounded-2xl p-5">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TREND_DATA} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="date" tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 600}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 600}} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontWeight: 'bold' }} />
                  <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorBlue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100/50 relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                   <Activity className="w-3.5 h-3.5" /> 意图健康得分
                 </h3>
                 <div className="flex items-end gap-2 mb-2.5">
                   <span className="text-4xl font-black text-slate-900 tracking-tighter">78<span className="text-xl text-slate-400 font-bold ml-1">%</span></span>
                 </div>
                 <p className="text-[10px] font-bold text-slate-500 leading-relaxed">
                   用户搜完品牌词后，衍生搜索词中<span className="text-blue-600">“有效意图词”</span>的占比。
                 </p>
               </div>
               <Search className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-100/40 z-0" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">高频有效意图词 (需求扩展)</h3>
                <button 
                  onClick={() => setIsKeywordsOpen(true)}
                  className="text-[10px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-md transition-colors flex items-center gap-1"
                >
                  <Search className="w-3 h-3" /> 查看所有词明细
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['混油皮能用吗', '成分分析', '早C晚A搭配', '孕妇可用', '真假鉴别', '双十一优惠', '跟欧莱雅对比'].map((tag, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-[#F8FAFC] border border-slate-100 text-slate-600 text-[11px] font-bold rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 cursor-default shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI 搜索趋势洞察 */}
        <div className="mt-6 bg-blue-50/30 border-l-4 border-blue-600 rounded-r-xl p-6 flex gap-4 items-start">
          <div className="mt-1">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-blue-700">AI 搜索趋势洞察</h3>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              品牌主动搜索热度在近90天内呈现稳步上升趋势，特别是在大促节点（第10-12周）表现出强劲的爆发力，搜索指数峰值达到 <span className="font-bold">9,500</span>。意图健康度（<span className="font-bold">78%</span>）显示用户搜索目的明确，主要集中在功效验证与成分分析。
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              <span>行动指引：建议在大促返场期继续保持高频种草，承接长尾搜索流量。</span>
            </div>
          </div>
        </div>
      </section>

      {/* 详细诊断 - 维度5：内容效率 */}
      <section className={CARD_BASE}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2.5">
            <DollarSign className="w-5 h-5 text-blue-600" /> 5. 内容效率诊断 <span className="text-slate-300 font-normal mx-2">|</span> Efficiency & ROI
          </h2>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase">得分</span>
             <span className="text-2xl font-black text-slate-900">55</span>
             <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md">C级</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">平均互动成本 (CPE)</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>15.5</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingUp className="w-3.5 h-3.5" /> 优于均值 (￥25.0)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">千次曝光成本 (CPM)</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>85.0</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingUp className="w-3.5 h-3.5" /> 优于均值 (￥110.0)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">独立访客成本 (CPUV)</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>0.68</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingUp className="w-3.5 h-3.5" /> 优于均值 (￥1.20)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">深度交互成本 (CPTI)</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter"><span className="text-lg font-bold text-slate-400 mr-1">￥</span>4.20</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-200/50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingDown className="w-3.5 h-3.5" /> 略逊均值 (￥3.80)
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">爆文率 (千赞+)</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-black text-slate-900 tracking-tighter">2.8<span className="text-lg font-bold text-slate-400 ml-1">%</span></span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-200/50 px-2.5 py-1.5 rounded-lg w-fit">
              <TrendingDown className="w-3.5 h-3.5" /> 低于头部竞品
            </div>
          </div>
        </div>
      </section>

      {/* 底部保留更多维度的示意 */}
      <div className="text-center py-12">
        <button className="text-blue-600 bg-white shadow-sm border border-slate-100 px-8 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.1)]">
          导出完整商业分析报告 (PDF)
        </button>
      </div>

      {/* 关键词明细弹窗 */}
      {isKeywordsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" /> 高频有效意图词明细
              </h3>
              <button 
                onClick={() => setIsKeywordsOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">关键词</th>
                    <th className="px-6 py-4 text-right">月搜索指数</th>
                    <th className="px-6 py-4 text-right">市场出价 (元)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {KEYWORD_DETAILS_DATA.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-700">{item.keyword}</td>
                      <td className="px-6 py-4 text-right font-medium text-slate-600">{item.searchIndex.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right font-medium text-slate-600">¥{item.bid.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setIsKeywordsOpen(false)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 明细弹窗 */}
      {isDetailsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" /> 品牌内容明细 (Top 100)
              </h3>
              <button 
                onClick={() => setIsDetailsOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 w-16 text-center">ID</th>
                    <th className="px-6 py-4 w-20">封面</th>
                    <th className="px-6 py-4">TOP 笔记标题</th>
                    <th className="px-6 py-4 w-32">博主/达人</th>
                    <th className="px-6 py-4 w-48">互动数据</th>
                    <th className="px-6 py-4 w-24 text-center">内容属性</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {CONTENT_DETAILS_DATA.map((item, index) => (
                    <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 text-center text-slate-400 font-medium">{index + 1}</td>
                      <td className="px-6 py-4">
                        <img src={item.image} alt="cover" className="w-10 h-10 rounded-lg object-cover bg-slate-100" referrerPolicy="no-referrer" />
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-700 max-w-xs truncate" title={item.title}>
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{item.author}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <div className="flex items-center gap-1" title="点赞">
                            <Heart className="w-3 h-3" /> {item.likes.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1" title="收藏">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg> {item.bookmarks.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1" title="评论">
                            <MessageCircle className="w-3 h-3" /> {item.comments.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1" title="分享">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                              <circle cx="18" cy="5" r="3"></circle>
                              <circle cx="6" cy="12" r="3"></circle>
                              <circle cx="18" cy="19" r="3"></circle>
                              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg> {item.shares.toLocaleString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                          item.type === 'UGC' 
                            ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}>
                          {item.type === 'UGC' ? '非商业笔记' : '商业笔记'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400">显示 Top 8 / 共 100 条数据</span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-white hover:shadow-sm rounded-lg transition-all disabled:opacity-50" disabled>上一页</button>
                <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-white hover:shadow-sm rounded-lg transition-all">下一页</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 评论明细弹窗 */}
      {isCommentsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 shrink-0">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-600" /> 热门评论明细 (Top 100)
              </h3>
              <button 
                onClick={() => setIsCommentsOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4 bg-slate-50/30">
              {COMMENTS_DATA.map((comment) => (
                <div key={comment.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-500">{comment.user}</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                      <Heart className="w-3.5 h-3.5 fill-slate-100" /> {comment.likes}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {comment.content.split(comment.highlight).map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded mx-0.5">{comment.highlight}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
              
              <div className="text-center pt-4">
                <button className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">加载更多评论...</button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* 搜索排名明细弹窗 */}
      {isRankingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-blue-600" /> 行业 Top 30 搜索榜单对标
              </h3>
              <button 
                onClick={() => setIsRankingOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4">
              {SEARCH_RANKING_DATA.map((item) => (
                <div key={item.rank} className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                    item.rank <= 3 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {item.rank}
                  </div>
                  <div className="w-24 font-bold text-slate-700 shrink-0">{item.brand}</div>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-blue-600" 
                      style={{ width: `${(item.score / 100000) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-20 text-right font-black text-slate-900">{item.score.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 搜索占位分析弹窗 */}
      {isOccupancyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" /> 搜索占位分析
              </h3>
              <button 
                onClick={() => setIsOccupancyOpen(false)}
                className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              {/* Top Info */}
              <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-400">搜索关键词</div>
                  <div className="text-xl font-black text-slate-900">{SEARCH_OCCUPANCY_DATA.keyword}</div>
                </div>
                <div className="space-y-1 text-center">
                  <div className="text-xs font-bold text-slate-400">当前排名</div>
                  <div className="text-xl font-black text-blue-600">{SEARCH_OCCUPANCY_DATA.rank}</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-xs font-bold text-slate-400">占位归属</div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-2 h-2 text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    品牌成功占位
                  </div>
                </div>
              </div>

              {/* Note Card */}
              <div className="border border-slate-200 rounded-2xl p-4 flex gap-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                {/* Image Placeholder */}
                <div className="w-32 h-32 bg-slate-100 rounded-xl shrink-0 flex items-center justify-center text-slate-300 group-hover:bg-slate-200 transition-colors">
                   <div className="w-10 h-10 border-2 border-current rounded-lg border-dashed"></div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                       <h4 className="font-bold text-slate-900 line-clamp-2 leading-snug text-lg group-hover:text-blue-600 transition-colors">
                         {SEARCH_OCCUPANCY_DATA.note.title}
                       </h4>
                       <span className="shrink-0 px-2 py-0.5 border border-blue-200 text-blue-600 text-[10px] font-bold rounded">
                         {SEARCH_OCCUPANCY_DATA.note.tags[0]}
                       </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                      <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                      <span className="font-medium">{SEARCH_OCCUPANCY_DATA.note.author}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-400">归属品牌: {SEARCH_OCCUPANCY_DATA.note.brand}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-slate-400 text-xs font-bold">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4" /> {SEARCH_OCCUPANCY_DATA.note.stats.likes.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                      {SEARCH_OCCUPANCY_DATA.note.stats.bookmarks.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" /> {SEARCH_OCCUPANCY_DATA.note.stats.comments}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Strategy */}
              <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100 flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 text-blue-600 fill-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-700 mb-1">AI 优化策略：</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {SEARCH_OCCUPANCY_DATA.aiStrategy}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
