import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import BackHomeButton from '@/components/BackHomeButton';

const Admin = () => {
  const schools = [
    { name: 'Munyaka Comprehensive School', email: 'admin@munyaka.edu.ke' },
    { name: 'Riverside Academy', email: 'info@riverside.ac.ke' },
    { name: 'Sunshine Primary', email: 'contact@sunshine.sc.ke' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead>School</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schools.map((school) => (
              <TableRow key={school.name}>
                <TableCell className="font-medium">{school.name}</TableCell>
                <TableCell>{school.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <BackHomeButton />
    </div>
  );
};

export default Admin;
