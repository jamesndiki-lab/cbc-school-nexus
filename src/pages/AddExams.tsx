import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus } from 'lucide-react';
import BackHomeButton from '@/components/BackHomeButton';

const AddExams = () => {
  const exams = [
    { year: '2026', term: 'Term 1', type: 'Endterm', open: '2026-03-20', close: '2026-03-27' },
    { year: '2026', term: 'Term 2', type: 'Midterm', open: '2026-06-29', close: '2026-07-05' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Manage Exams</h2>
          <p className="text-sm text-muted-foreground">Create and manage exams across terms and years.</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          New Exam
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="All years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2026">2026</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="All terms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="t1">Term 1</SelectItem>
            <SelectItem value="t2">Term 2</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mid">Midterm</SelectItem>
            <SelectItem value="end">Endterm</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>YEAR</TableHead>
              <TableHead>TERM</TableHead>
              <TableHead>TYPE</TableHead>
              <TableHead>OPENING DATE</TableHead>
              <TableHead>CLOSING DATE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam, i) => (
              <TableRow key={i}>
                <TableCell>{exam.year}</TableCell>
                <TableCell>{exam.term}</TableCell>
                <TableCell>{exam.type}</TableCell>
                <TableCell>{exam.open}</TableCell>
                <TableCell>{exam.close}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <BackHomeButton />
    </div>
  );
};

export default AddExams;
