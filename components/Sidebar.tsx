import React from 'react';
import { BookOpen, ChevronRight, LayoutDashboard, GraduationCap } from 'lucide-react';
import { COURSE_MODULES } from '../constants';
import { HSKLevel, Module } from '../types';

interface SidebarProps {
  currentModuleId?: string;
  onSelectModule: (module: Module) => void;
  onGoHome: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentModuleId, onSelectModule, onGoHome }) => {
  // Group modules by level
  const groupedModules = COURSE_MODULES.reduce((acc, module) => {
    if (!acc[module.level]) acc[module.level] = [];
    acc[module.level].push(module);
    return acc;
  }, {} as Record<HSKLevel, Module[]>);

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto border-r border-slate-800 z-10">
      <div className="p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-20">
        <div 
          onClick={onGoHome}
          className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
        >
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold font-serif">
            中
          </div>
          <h1 className="font-bold text-xl text-white tracking-tight">HSK Mastery</h1>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-6">
        <div className="space-y-1">
          <button 
            onClick={onGoHome}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${!currentModuleId ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}
          >
            <LayoutDashboard size={18} />
            <span className="font-medium">Dashboard</span>
          </button>
        </div>

        {Object.entries(groupedModules).map(([level, modules]) => (
          <div key={level}>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">{level}</h3>
            <div className="space-y-1">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => onSelectModule(module)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all group ${currentModuleId === module.id ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={16} className={currentModuleId === module.id ? 'text-red-500' : 'text-slate-600 group-hover:text-slate-500'} />
                    <span className="truncate max-w-[120px]">{module.title}</span>
                  </div>
                  {currentModuleId === module.id && <ChevronRight size={14} className="text-slate-500" />}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500">
          <GraduationCap size={16} />
          <span>Study Streak: <span className="text-red-500 font-bold">3 Days</span></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
