import React from 'react';
import { Upload, Bot, Calendar, Users, Play, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const actions = [
  {
    title: "Upload Resume",
    description: "Start AI screening with resume upload",
    icon: Upload,
    color: "primary",
    action: "Upload Files"
  },
  {
    title: "Start AI Interview",
    description: "Launch real-time AI interview session",
    icon: Bot,
    color: "accent",
    action: "Begin Interview"
  },
  {
    title: "Schedule Interview",
    description: "Book manual interview slots",
    icon: Calendar,
    color: "secondary",
    action: "Open Calendar"
  },
  {
    title: "Mock Interview",
    description: "Practice session for candidates",
    icon: Play,
    color: "accent",
    action: "Start Practice"
  },
  {
    title: "View Candidates",
    description: "Browse and manage candidate pool",
    icon: Users,
    color: "primary",
    action: "View All"
  },
  {
    title: "Generate Reports",
    description: "Download interview analytics",
    icon: FileText,
    color: "secondary",
    action: "Create Report"
  }
];

export function QuickActions() {
  return (
    <div className="space-y-4 lg:space-y-6">
      <div>
        <h2 className="text-lg lg:text-xl font-semibold text-foreground mb-2">Quick Actions</h2>
        <p className="text-sm lg:text-base text-muted-foreground">Common tasks and shortcuts</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
        {actions.map((action) => (
          <Card key={action.title} className="hover:shadow-medium transition-all duration-200 hover:-translate-y-1">
            <CardHeader className="pb-3 p-4 lg:p-6">
              <div className="flex items-start justify-between mb-2">
                <div className={`p-2 lg:p-3 rounded-lg ${
                  action.color === 'primary' ? 'bg-primary-light' :
                  action.color === 'accent' ? 'bg-accent-light' :
                  'bg-secondary'
                }`}>
                  <action.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${
                    action.color === 'primary' ? 'text-primary' :
                    action.color === 'accent' ? 'text-accent' :
                    'text-foreground'
                  }`} />
                </div>
              </div>
              <CardTitle className="text-base lg:text-lg">{action.title}</CardTitle>
              <CardDescription className="text-sm">{action.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 lg:p-6 pt-0">
              <Button 
                className={`w-full text-sm ${
                  action.color === 'primary' ? 'bg-primary hover:bg-primary/90' :
                  action.color === 'accent' ? 'bg-accent hover:bg-accent/90' :
                  'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
                size="sm"
              >
                {action.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
