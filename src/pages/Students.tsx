import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Plus, Users, Search } from 'lucide-react';
import BackHomeButton from '@/components/BackHomeButton';
import { toast } from 'sonner';

const Students = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate POST request
    try {
      console.log('Triggering POST request to /api/students/register...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Student registered successfully');
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to register student');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBulkAdd = () => {
    setIsBulkModalOpen(true);
  };

  const students = [
    { adm: '1001', name: 'James Kimani', grade: 'Grade 4', stream: 'Blue' },
    { adm: '1002', name: 'Mary Wanjiku', grade: 'Grade 4', stream: 'Green' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-green-500" />
          <span className="text-lg font-bold">{students.length} total</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-border" onClick={handleBulkAdd}>
            Bulk Add
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by name or admission no..." className="pl-10 bg-card" />
        </div>
        <Select>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="All grades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="g1">Grade 1</SelectItem>
            <SelectItem value="g2">Grade 2</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="All streams" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="green">Green</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-12"><Checkbox /></TableHead>
              <TableHead>ADM NO</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>GRADE</TableHead>
              <TableHead>STREAM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.adm}>
                <TableCell><Checkbox /></TableCell>
                <TableCell className="font-mono">{student.adm}</TableCell>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.stream}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Student Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="bg-card border-border sm:max-w-[425px]">
          <form onSubmit={handleAddStudent}>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Enter the student's details to register them in the system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="e.g. John Doe" required className="bg-background" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="adm">Admission Number</Label>
                <Input id="adm" placeholder="e.g. 1003" required className="bg-background" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Grade</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="g4">Grade 4</SelectItem>
                      <SelectItem value="g5">Grade 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Stream</Label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isLoading} className="bg-green-600 hover:bg-green-700 text-white w-full">
                {isLoading ? 'Registering...' : 'Register Student'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Bulk Add Modal */}
      <Dialog open={isBulkModalOpen} onOpenChange={setIsBulkModalOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle>Bulk Student Upload</DialogTitle>
            <DialogDescription>
              Upload an Excel file containing multiple student records.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 gap-4 bg-muted/20">
            <Button variant="outline" className="border-border">Choose File</Button>
            <p className="text-sm text-muted-foreground">Supports .xlsx, .csv</p>
          </div>
        </DialogContent>
      </Dialog>

      <BackHomeButton />
    </div>
  );
};

export default Students;
