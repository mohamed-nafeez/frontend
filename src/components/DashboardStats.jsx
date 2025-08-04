import React from 'react';
import { Users, Calendar, Trophy, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: "Total Candidates",
    value: "2,847",
    change: "+12%",
    changeType: "positive",
    icon: Users,
    description: "Active applications this month"
  },
  {
    title: "AI Interviews",
    value: "156",
    change: "+8%",
    changeType: "positive",
    icon: Bot,
    description: "Completed this week"
  },
  {
    title: "Scheduled Interviews",
    value: "23",
    change: "-3%",
    changeType: "negative",
    icon: Calendar,
    description: "Upcoming this week"
  },
  {
    title: "Top Performers",
    value: "89",
    change: "+15%",
    changeType: "positive",
    icon: Trophy,
    description: "Candidates scoring 85%+"
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-medium transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4 lg:p-6">
            <CardTitle className="text-xs lg:text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="p-1.5 lg:p-2 bg-primary-light rounded-lg">
              <stat.icon className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="p-4 lg:p-6 pt-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-xl lg:text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </div>
              <div className={`text-xs lg:text-sm font-medium ml-2 ${
                stat.changeType === 'positive' ? 'text-success' : 'text-destructive'
              }`}>
                {stat.change}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
