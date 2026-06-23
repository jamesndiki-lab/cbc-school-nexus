import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import BackHomeButton from '@/components/BackHomeButton';

const ReportCards = () => {
  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-border space-y-6">
        <div>
          <h2 className="text-xl font-bold text-green-500">Report Cards</h2>
          <p className="text-sm text-muted-foreground">One-page CBC report cards. Browse, edit comments and download.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Exam</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="e1">2026 Term 1 Endterm</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Grade</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="g4">Grade 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Stream</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="All streams" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All streams</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12">
          Load Report Cards
        </Button>
      </div>
      <BackHomeButton />
    </div>
  );
};

export default ReportCards;
