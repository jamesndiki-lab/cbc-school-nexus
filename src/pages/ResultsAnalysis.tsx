import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import BackHomeButton from '@/components/BackHomeButton';

const ResultsAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-border space-y-6">
        <div>
          <h2 className="text-xl font-bold">Analytics Setup</h2>
          <p className="text-sm text-muted-foreground">Pick filters to compute the scoresheet, top performers and subject ranks.</p>
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
            <label className="text-sm font-medium">Stream (optional)</label>
            <Select defaultValue="combined">
              <SelectTrigger>
                <SelectValue placeholder="Combined" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="combined">Combined</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12">
          Compute Results Analysis
        </Button>
      </div>
      <BackHomeButton />
    </div>
  );
};

export default ResultsAnalysis;
