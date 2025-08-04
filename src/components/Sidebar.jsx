import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Upload, 
  Bot, 
  GraduationCap, 
  Calendar, 
  Users,
  Home,
  Settings,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils.js';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Resume Upload", icon: Upload, path: "/resume-upload" },
  { title: "AI Interviews", icon: Bot, path: "/ai-interviews" },
  { title: "Mock Interview Zone", icon: GraduationCap, path: "/mock-interviews" },
  { title: "Interview Scheduling", icon: Calendar, path: "/scheduling" },
  { title: "Candidate Ranking", icon: BarChart3, path: "/ranking" },
  { title: "Candidates", icon: Users, path: "/candidates" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-card border-r border-border h-screen fixed left-0 top-0 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Drawer */}
      <div className={cn(
        "lg:hidden w-64 bg-card border-r border-border h-screen fixed left-0 top-0 z-50 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">HireAI</h1>
              <p className="text-xs text-muted-foreground">Interview Platform</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <SidebarContent onItemClick={onClose} />
      </div>
    </>
  );
}

function SidebarContent({ onItemClick }) {
  return (
    <>
      {/* Logo Section - Desktop Only */}
      <div className="hidden lg:block p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">HireAI</h1>
            <p className="text-xs text-muted-foreground">Interview Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 overflow-y-auto h-full pb-24">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onItemClick}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                "hover:bg-secondary/60 hover:shadow-soft",
                isActive
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "text-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium text-sm lg:text-base">{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gradient-soft rounded-lg p-4 text-center">
          <Bot className="w-6 h-6 lg:w-8 lg:h-8 text-primary mx-auto mb-2" />
          <p className="text-xs lg:text-sm font-medium text-foreground">AI Assistant</p>
          <p className="text-xs text-muted-foreground">Ready to help</p>
        </div>
      </div>
    </>
  );
}
