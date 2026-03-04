import React, { useState } from 'react';
import { ArrowLeft, Zap } from 'lucide-react';
import { SHADOW_CARD } from '../data/mockData';

interface CreationFormProps {
  onBack: () => void;
  onSubmit: (data: any) => void;
}

export default function CreationForm({ onBack, onSubmit }: CreationFormProps) {
  const [formData, setFormData] = useState({
    brand: '珀莱雅 PROYA',
    industry: '美妆个护 > 护肤 > 面霜',
    competitors: '欧莱雅, 兰蔻',
    platform: 'xiaohongshu',
    timePeriod: 'last_30_days',
    brandKeywords: '',
    otherKeywords: ''
  });

  return (
    <div className={`max-w-3xl mx-auto bg-white rounded-2xl ${SHADOW_CARD} overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      <div className="px-8 py-6 border-b border-slate-100/50 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-xl font-black text-slate-900">新建品牌诊断</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">配置诊断参数以生成深度分析报告</p>
        </div>
      </div>
      
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">品牌名称</label>
            <input 
              type="text" 
              value={formData.brand}
              onChange={e => setFormData({...formData, brand: e.target.value})}
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">所属行业 (4级架构)</label>
            <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900 appearance-none">
              <option>美妆个护 &gt; 护肤 &gt; 面部护肤 &gt; 面霜</option>
              <option>美妆个护 &gt; 彩妆 &gt; 底妆</option>
              <option>3C数码 &gt; 手机</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">时间周期</label>
          <select 
            value={formData.timePeriod}
            onChange={e => setFormData({...formData, timePeriod: e.target.value})}
            className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900 appearance-none"
          >
            <option value="last_7_days">近7天</option>
            <option value="last_30_days">近30天</option>
            <option value="last_90_days">近90天</option>
            <option value="custom">自定义时间</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">核心竞品</label>
          <div className="flex gap-3">
            <input 
              type="text" 
              value={formData.competitors}
              onChange={e => setFormData({...formData, competitors: e.target.value})}
              className="flex-1 px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none font-medium text-slate-900"
            />
            <button className="px-5 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 flex items-center gap-2 text-sm font-bold transition-colors">
              <Zap className="w-4 h-4 fill-current" />
              AI推荐
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">品牌词 (多个词用逗号分隔)</label>
            <textarea 
              value={formData.brandKeywords}
              onChange={e => setFormData({...formData, brandKeywords: e.target.value})}
              placeholder="例如：珀莱雅, 红宝石面霜, 双抗精华..."
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900 h-24 resize-none"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">其他关键词 (多个词用逗号分隔)</label>
            <textarea 
              value={formData.otherKeywords}
              onChange={e => setFormData({...formData, otherKeywords: e.target.value})}
              placeholder="例如：抗老, 紧致, 淡纹, 早C晚A..."
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900 h-24 resize-none"
            />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">选择诊断平台</label>
          <div className="flex gap-4">
            <label className={`flex-1 rounded-2xl p-5 cursor-pointer transition-all border-2 ${formData.platform === 'xiaohongshu' ? 'border-blue-600 bg-blue-50/30 shadow-[0_0_0_4px_rgba(37,99,235,0.05)]' : 'border-transparent bg-slate-50 hover:bg-slate-100'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`font-black ${formData.platform === 'xiaohongshu' ? 'text-blue-600' : 'text-slate-700'}`}>小红书</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.platform === 'xiaohongshu' ? 'border-blue-600' : 'border-slate-300'}`}>
                  {formData.platform === 'xiaohongshu' && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </div>
              </div>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">侧重搜索占位、种草漏斗、能见度分析</p>
            </label>
            <label className={`flex-1 rounded-2xl p-5 cursor-pointer transition-all border-2 ${formData.platform === 'bilibili' ? 'border-blue-600 bg-blue-50/30 shadow-[0_0_0_4px_rgba(37,99,235,0.05)]' : 'border-transparent bg-slate-50 hover:bg-slate-100'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`font-black ${formData.platform === 'bilibili' ? 'text-blue-600' : 'text-slate-700'}`}>Bilibili</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.platform === 'bilibili' ? 'border-blue-600' : 'border-slate-300'}`}>
                  {formData.platform === 'bilibili' && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </div>
              </div>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">侧重内容叙事、弹幕情感、长尾流转率</p>
            </label>
          </div>
        </div>

      </div>
      <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100/50 flex justify-end gap-4">
        <button onClick={onBack} className="px-5 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-xl transition-colors">取消</button>
        <button onClick={() => onSubmit(formData)} className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
          开始智能诊断
        </button>
      </div>
    </div>
  );
}
