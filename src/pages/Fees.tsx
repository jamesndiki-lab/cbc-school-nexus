import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, List, Settings2 } from 'lucide-react';
import BackHomeButton from '@/components/BackHomeButton';

const Fees = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Fees</h2>
        <p className="text-sm text-muted-foreground">Manage payments, view records, and set per-level term fees.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2 flex-1 md:flex-none">
          <Plus className="h-4 w-4" />
          Add Payment
        </Button>
        <Button variant="secondary" className="bg-muted hover:bg-muted/80 gap-2 flex-1 md:flex-none">
          <List className="h-4 w-4" />
          Fee Records
        </Button>
        <Button variant="secondary" className="bg-muted hover:bg-muted/80 gap-2 flex-1 md:flex-none">
          <Settings2 className="h-4 w-4" />
          Set Term Fees
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search by name or admission no..." className="pl-10 bg-card h-12" />
      </div>

      <div className="bg-card border border-border rounded-lg p-12 text-center text-muted-foreground">
        No records found. Start by adding a payment or searching for a student.
      </div>
      <BackHomeButton />
    </div>
  );
};

export default Fees;
