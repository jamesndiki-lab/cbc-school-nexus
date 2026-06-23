import React from 'react';
import BackHomeButton from '@/components/BackHomeButton';

const SchoolSetup = () => {
  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-bold mb-4">School Setup</h2>
        <p className="text-muted-foreground">Configure your school profile and general settings.</p>
      </div>
      <BackHomeButton />
    </div>
  );
};

export default SchoolSetup;
