import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import BackHomeButton from '@/components/BackHomeButton';

const GradesStreams = () => {
  const [streams, setStreams] = useState(['Blue', 'Green', 'Yellow']);
  const [newStream, setNewStream] = useState('');

  const categories = [
    { name: 'ECD', grades: ['PP1', 'PP2'] },
    { name: 'Lower Primary', grades: ['Grade 1', 'Grade 2', 'Grade 3'] },
    { name: 'Upper Primary', grades: ['Grade 4', 'Grade 5', 'Grade 6'] },
    { name: 'Junior School', grades: ['Grade 7', 'Grade 8', 'Grade 9'] },
  ];

  const handleAddStream = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newStream.trim()) {
      setStreams([...streams, newStream.trim()]);
      setNewStream('');
    }
  };

  const removeStream = (stream: string) => {
    setStreams(streams.filter((s) => s !== stream));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Grade Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.name} className="space-y-2">
                <h3 className="text-sm font-semibold text-green-500">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.grades.map((grade) => (
                    <Badge key={grade} variant="secondary">
                      {grade}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Streams Manager</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Type new stream and press Enter</label>
              <input
                type="text"
                value={newStream}
                onChange={(e) => setNewStream(e.target.value)}
                onKeyDown={handleAddStream}
                placeholder="e.g. Red"
                className="w-full bg-background border border-border rounded-md px-3 py-2 focus:ring-1 focus:ring-green-500 outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {streams.map((stream) => (
                <Badge 
                  key={stream} 
                  className="bg-green-600/20 text-green-400 border-green-600/30 px-3 py-1 flex items-center gap-1 cursor-pointer hover:bg-green-600/30"
                  onClick={() => removeStream(stream)}
                >
                  {stream}
                  <X className="h-3 w-3" />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <BackHomeButton />
    </div>
  );
};

export default GradesStreams;
