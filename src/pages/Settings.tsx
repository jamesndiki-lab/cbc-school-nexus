import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Key, User } from 'lucide-react';
import BackHomeButton from '@/components/BackHomeButton';

const Settings = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5 text-green-500" />
            School Code Panel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground font-mono">Current code: — none —</p>
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Change School Code
            </Button>
            <Button variant="outline" className="border-border">
              Switch School School
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-green-500" />
            Account Profile Badge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Signed in as <span className="text-white font-medium">admin@inspireanalytics.com</span>
          </p>
        </CardContent>
      </Card>
      <BackHomeButton />
    </div>
  );
};

export default Settings;
