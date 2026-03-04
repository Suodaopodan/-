import React from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import { MOCK_HISTORY, SHADOW_CARD } from '../data/mockData';

interface DashboardViewProps {
  onNew: () => void;
  onViewReport: (item: any) => void;
}

export default function DashboardView({ onNew, onViewReport }: DashboardViewProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-900">诊断项目管理</h2>
          <p className="text-sm text-slate-500 mt-1 font-medium">查看并管理您的历史品牌数据资产</p>
        </div>
        <button 
          onClick={onNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] font-medium"
        >
          <Plus className="w-4 h-4" />
          新建诊断项目
        </button>
      </div>

      <div className={`bg-white rounded-2xl ${SHADOW_CARD} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/50 text-slate-400">
              <tr>
                <th className="px-8 py-5 font-bold uppercase tracking-wider text-xs">品牌</th>
                <th className="px-8 py-5 font-bold uppercase tracking-wider text-xs">所属行业</th>
                <th className="px-8 py-5 font-bold uppercase tracking-wider text-xs">诊断平台</th>
                <th className="px-8 py-5 font-bold uppercase tracking-wider text-xs">健康度得分</th>
                <th className="px-8 py-5 font-bold uppercase tracking-wider text-xs">诊断日期</th>
                <th className="px-8 py-5 font-bold uppercase tracking-wider text-xs text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/50">
              {MOCK_HISTORY.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5 font-bold text-slate-900">{item.brand}</td>
                  <td className="px-8 py-5 font-medium text-slate-500">{item.industry}</td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-600">
                      {item.platform}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-black text-slate-900 text-lg">{item.score}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 font-bold">
                        {item.level}级
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-medium text-slate-400">{item.date}</td>
                  <td className="px-8 py-5 text-right">
                    <button 
                      onClick={() => onViewReport(item)}
                      className="text-blue-600 hover:text-blue-800 font-bold text-sm inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      查看报告 <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
