import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { DashboardStats } from '../components/DashboardStats.jsx';
import { QuickActions } from '../components/QuickActions.jsx';
import { RecentActivity } from '../components/RecentActivity.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, TrendingUp, Users, Calendar } from 'lucide-react';
import heroImage from '@/assets/hr-dashboard-hero.jpg';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 lg:space-y-8">
        {/* Welcome Section */}
        <div className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-primary p-6 lg:p-8 text-white">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-white/20 text-white border-white/20 text-xs">
                    <Bot className="w-3 h-3 mr-1" />
                    AI-Powered
                  </Badge>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold">Good morning, John! 👋</h1>
                <p className="text-primary-light text-sm lg:text-lg">
                  You have 12 new candidates and 5 interviews scheduled for today.
                </p>
              </div>
              <div className="hidden lg:block flex-shrink-0">
                <img 
                  src={heroImage} 
                  alt="HR Dashboard" 
                  className="w-48 h-32 object-cover rounded-lg opacity-80"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        </div>

        {/* Stats Grid */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Quick Actions - Takes 2 columns on XL screens */}
          <div className="xl:col-span-2">
            <QuickActions />
          </div>

          {/* Recent Activity - Takes 1 column on XL screens */}
          <div className="xl:col-span-1">
            <RecentActivity />
          </div>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-base lg:text-lg">AI System Status</CardTitle>
                <Badge className="bg-success text-success-foreground text-xs w-fit">Online</Badge>
              </div>
              <CardDescription className="text-sm">Interview AI is running smoothly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-xs lg:text-sm text-muted-foreground">99.8% uptime</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-base lg:text-lg">Active Sessions</CardTitle>
                <Badge className="bg-accent text-accent-foreground text-xs w-fit">3 Active</Badge>
              </div>
              <CardDescription className="text-sm">Current AI interview sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs lg:text-sm text-muted-foreground">2 interviews, 1 mock session</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning sm:col-span-2 lg:col-span-1">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-base lg:text-lg">Today's Schedule</CardTitle>
                <Badge variant="outline" className="text-xs w-fit">5 Interviews</Badge>
              </div>
              <CardDescription className="text-sm">Upcoming manual interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-warning flex-shrink-0" />
                <span className="text-xs lg:text-sm text-muted-foreground">Next at 2:00 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
