import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Upload } from 'lucide-react';
import BackHomeButton from '@/components/BackHomeButton';

const MarksEntry = () => {
  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-border space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Exam</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select exam" />
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
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="g4">Grade 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Stream</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All streams" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Combined</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Mathematics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-md text-sm text-blue-400">
          Pick filters, then enter marks. Scores are rounded to whole numbers (0–100).
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <Button variant="outline" className="flex-1 border-border gap-2">
            <Download className="h-4 w-4" />
            Download Template
          </Button>
          <Button variant="outline" className="flex-1 border-border gap-2">
            <Upload className="h-4 w-4" />
            Upload Excel
          </Button>
        </div>
      </div>
      <BackHomeButton />
    </div>
  );
};

export default MarksEntry;
