import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import DashboardView from './components/DashboardView';
import CreationForm from './components/CreationForm';
import LoadingScreen from './components/LoadingScreen';
import ReportView from './components/ReportView';

export default function CADPPrototype() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [formData, setFormData] = useState({ brand: '', industry: '美妆个护', platform: '' });

  const [loadingStep, setLoadingStep] = useState(0);
  useEffect(() => {
    if (currentView === 'loading') {
      const timer1 = setTimeout(() => setLoadingStep(1), 1500);
      const timer2 = setTimeout(() => setLoadingStep(2), 3000);
      const timer3 = setTimeout(() => setCurrentView('report'), 4500);
      return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
    }
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#F4F7F9] font-sans text-slate-800">
      {/* 顶部导航 */}
      <header className="bg-white px-8 py-4 flex items-center justify-between sticky top-0 z-10 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('dashboard')}>
          <div className="bg-blue-600 p-2 rounded-xl">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-900 leading-tight">CADP 内容资产诊断台</h1>
            <p className="text-[11px] font-medium text-slate-400 tracking-wider">COMMERCIAL DIAGNOSTIC PLATFORM</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
            <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">策</div>
            <span>策略团队</span>
          </div>
        </div>
      </header>

      {/* 主视图区域 */}
      <main className="max-w-7xl mx-auto p-6 md:p-8">
        {currentView === 'dashboard' && (
          <DashboardView 
            onNew={() => setCurrentView('form')} 
            onViewReport={(item: any) => {
              setFormData({
                brand: item.brand,
                industry: item.industry,
                platform: item.platform.includes('B站') ? 'bilibili' : 'xiaohongshu'
              });
              setCurrentView('report');
            }}
          />
        )}
        {currentView === 'form' && <CreationForm onBack={() => setCurrentView('dashboard')} onSubmit={(data: any) => { setFormData(data); setCurrentView('loading'); setLoadingStep(0); }} />}
        {currentView === 'loading' && <LoadingScreen step={loadingStep} />}
        {currentView === 'report' && <ReportView formData={formData} onBack={() => setCurrentView('dashboard')} />}
      </main>
    </div>
  );
}
