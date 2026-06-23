import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Pencil, Eye, Trash2 } from 'lucide-react';
import BackHomeButton from '@/components/BackHomeButton';

const Subjects = () => {
  const learningAreas = {
    'ECD': [
      'Mathematical Activities', 'Language Activities', 'Environmental Activities', 'Creative Activities', 'Religious Activities'
    ],
    'Lower Primary': [
      'Mathematics Activities', 'English Activities', 'Kiswahili Activities', 'Environmental Activities', 'Integrated Activities'
    ],
    'Upper Primary': [
      'Mathematics', 'English', 'Kiswahili', 'Intergrated science', 'Agriculture and Nutrition', 'Social Studies and CRE', 'Creative Arts'
    ],
    'Junior School': [
      'Mathematics', 'English', 'Kiswahili', 'Int-science', 'Agriculture', 'Social Studies', 'Pre-tech', 'Creative Arts', 'C.R.E.'
    ]
  };

  return (
    <div className="space-y-8">
      {Object.entries(learningAreas).map(([level, subjects]) => (
        <div key={level} className="space-y-4">
          <h2 className="text-xl font-bold text-green-500">{level}</h2>
          <div className="bg-card rounded-lg border border-border divide-y divide-border">
            {subjects.map((subject) => (
              <div key={subject} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{subject}</span>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-muted-foreground border-muted-foreground/30">
                    Default
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-muted rounded-md text-muted-foreground transition-colors">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-md text-muted-foreground transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-md text-destructive transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <BackHomeButton />
    </div>
  );
};

export default Subjects;
