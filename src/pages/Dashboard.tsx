import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, BookOpen, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: 'Students', value: '2,540', icon: Users, color: 'text-green-500' },
    { title: 'Grades', value: '12', icon: GraduationCap, color: 'text-blue-500' },
    { title: 'Subjects', value: '24', icon: BookOpen, color: 'text-purple-500' },
    { title: 'Exams', value: '8', icon: FileText, color: 'text-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card/50 border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button 
          onClick={() => navigate('/marks-entry')}
          className="h-24 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white flex flex-col items-center justify-center gap-2"
        >
          <FileText className="h-6 w-6" />
          Enter Marks
        </Button>
        <Button 
          onClick={() => navigate('/report-cards')}
          className="h-24 text-lg font-semibold bg-white/10 hover:bg-white/20 text-white border-white/20 flex flex-col items-center justify-center gap-2"
        >
          <GraduationCap className="h-6 w-6" />
          Report Cards
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
