import React from 'react';
import { Clock, CheckCircle, AlertCircle, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    id: 1,
    type: "interview_completed",
    candidate: "Sarah Johnson",
    action: "Completed AI Interview",
    time: "2 hours ago",
    status: "completed",
    score: 92
  },
  {
    id: 2,
    type: "resume_uploaded",
    candidate: "Michael Chen",
    action: "Resume uploaded and screened",
    time: "4 hours ago",
    status: "pending",
    score: null
  },
  {
    id: 3,
    type: "interview_scheduled",
    candidate: "Emily Rodriguez",
    action: "Interview scheduled for tomorrow",
    time: "6 hours ago",
    status: "scheduled",
    score: null
  },
  {
    id: 4,
    type: "mock_interview",
    candidate: "David Kim",
    action: "Completed mock interview practice",
    time: "1 day ago",
    status: "completed",
    score: 78
  },
  {
    id: 5,
    type: "interview_completed",
    candidate: "Lisa Thompson",
    action: "Completed AI Interview",
    time: "1 day ago",
    status: "completed",
    score: 85
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-success text-success-foreground';
    case 'pending':
      return 'bg-warning text-warning-foreground';
    case 'scheduled':
      return 'bg-primary text-primary-foreground';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

const getIcon = (type) => {
  switch (type) {
    case 'interview_completed':
      return CheckCircle;
    case 'resume_uploaded':
      return User;
    case 'interview_scheduled':
      return Clock;
    case 'mock_interview':
      return AlertCircle;
    default:
      return Clock;
  }
};

export function RecentActivity() {
  return (
    <Card className="h-fit">
      <CardHeader className="p-4 lg:p-6">
        <CardTitle className="flex items-center space-x-2 text-base lg:text-lg">
          <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
          <span>Recent Activity</span>
        </CardTitle>
        <CardDescription className="text-sm">
          Latest candidate interactions and system events
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 p-4 lg:p-6 pt-0">
        {activities.map((activity) => {
          const Icon = getIcon(activity.type);
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-2 lg:p-3 rounded-lg hover:bg-secondary/30 transition-colors">
              <div className="p-1.5 lg:p-2 bg-primary-light rounded-lg flex-shrink-0">
                <Icon className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.candidate}
                  </p>
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    {activity.score && (
                      <Badge variant="outline" className="text-xs px-1">
                        {activity.score}%
                      </Badge>
                    )}
                    <Badge className={`text-xs px-1.5 ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          );
        })}
        
        <div className="pt-2 border-t border-border">
          <button className="text-xs lg:text-sm text-primary hover:text-primary/80 font-medium">
            View all activity →
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
