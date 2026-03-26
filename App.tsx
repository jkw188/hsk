import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MarkdownView from './components/MarkdownView';
import GeminiTutor from './components/GeminiTutor';
import { COURSE_MODULES } from './constants';
import { Module, Lesson, LessonType } from './types';
import { Play, FileText, Dumbbell, Sparkles, Menu, ChevronRight } from 'lucide-react';

// --- Dashboard Component ---
const Dashboard = ({ onSelectModule }: { onSelectModule: (m: Module) => void }) => {
  // Get distinct levels
  const levels = Array.from(new Set(COURSE_MODULES.map(m => m.level)));

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Welcome to HSK Mastery</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Your structured path to Chinese fluency. Select a level to continue your journey.
        </p>
      </header>

      <div className="space-y-10">
        {levels.map(level => (
          <div key={level}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{level}</h2>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSE_MODULES.filter(m => m.level === level).map(module => (
                <div 
                  key={module.id} 
                  onClick={() => onSelectModule(module)}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-sm">
                        {module.lessons.length}
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded uppercase tracking-wide">
                        Module
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {module.description}
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600 group-hover:bg-red-50/50 transition-colors">
                    <span>Start Learning</span>
                    <ChevronRight size={16} className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Module View Component ---
const ModuleView = ({ module }: { module: Module }) => {
  const [activeLesson, setActiveLesson] = useState<Lesson>(module.lessons[0] || null);
  const [isAiOpen, setIsAiOpen] = useState(false);

  useEffect(() => {
    // Reset active lesson when module changes
    if (module.lessons.length > 0) {
      setActiveLesson(module.lessons[0]);
    }
    setIsAiOpen(false); 
  }, [module]);

  if (!activeLesson) {
    return (
      <div className="p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <FileText className="text-gray-400" size={32} />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">No Content Yet</h2>
        <p className="text-gray-500">This module is being prepared.</p>
      </div>
    );
  }

  const getIcon = (type: LessonType) => {
    switch (type) {
      case LessonType.GRAMMAR: return <FileText size={18} />;
      case LessonType.VOCABULARY: return <BookOpenIcon />; 
      case LessonType.EXERCISE: return <Dumbbell size={18} />;
      default: return <FileText size={18} />;
    }
  };

  // Helper because BookOpen is used in Sidebar
  const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Top Bar for Module/Lesson Navigation */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-30 px-8 py-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span>{module.level}</span>
             <ChevronRight size={12} />
             <span>{module.title}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{activeLesson.title}</h2>
        </div>
        
        <button 
          onClick={() => setIsAiOpen(!isAiOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${isAiOpen ? 'bg-red-100 text-red-700 ring-2 ring-red-200' : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'}`}
        >
          <Sparkles size={16} className={isAiOpen ? "text-red-600" : "text-yellow-400"} />
          <span>{isAiOpen ? 'Close AI Tutor' : 'Ask AI Tutor'}</span>
        </button>
      </div>

      {/* Lesson Tabs */}
      <div className="border-b border-gray-200 px-8 bg-gray-50">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {module.lessons.map(lesson => (
            <button
              key={lesson.id}
              onClick={() => setActiveLesson(lesson)}
              className={`flex items-center gap-2 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                activeLesson.id === lesson.id 
                  ? 'border-red-600 text-red-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {getIcon(lesson.type)}
              {lesson.type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-8 lg:p-12 relative bg-white">
        <div className="max-w-4xl mx-auto">
           <MarkdownView content={activeLesson.content} />
           
           {/* Footer Navigation */}
           <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-gray-500 text-sm">
              <span>Finished this lesson?</span>
              <div className="flex gap-2">
                 {/* Logic to find next lesson could go here */}
                 <button 
                  className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                  onClick={() => alert("Great job! Proceeding to next content (Simulation)")}
                 >
                   Mark as Complete
                 </button>
              </div>
           </div>
        </div>
      </div>

      <GeminiTutor 
        contextContent={activeLesson.content} 
        isOpen={isAiOpen} 
        onClose={() => setIsAiOpen(false)} 
      />
    </div>
  );
};


const AppContent = () => {
  const [currentModule, setCurrentModule] = useState<Module | null>(null);

  const handleSelectModule = (module: Module) => {
    setCurrentModule(module);
    window.scrollTo(0,0);
  };

  const handleGoHome = () => {
    setCurrentModule(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentModuleId={currentModule?.id} 
        onSelectModule={handleSelectModule} 
        onGoHome={handleGoHome}
      />
      <main className="ml-64 flex-1 h-screen overflow-y-auto">
        {currentModule ? (
          <ModuleView module={currentModule} />
        ) : (
          <Dashboard onSelectModule={handleSelectModule} />
        )}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
