import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Settings2, 
  Layers, 
  Users, 
  BookOpen, 
  PlusCircle, 
  FileEdit, 
  BarChart3, 
  FileText, 
  CreditCard, 
  RefreshCcw, 
  Settings as SettingsIcon,
  X,
  GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Admin', icon: ShieldCheck, path: '/admin' },
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'School Setup', icon: Settings2, path: '/school-setup' },
    { name: 'Grades & Streams', icon: Layers, path: '/grades-streams' },
    { name: 'Students', icon: Users, path: '/students' },
    { name: 'Subjects', icon: BookOpen, path: '/subjects' },
    { name: 'Add Exams', icon: PlusCircle, path: '/add-exams' },
    { name: 'Marks Entry', icon: FileEdit, path: '/marks-entry' },
    { name: 'Results Analysis', icon: BarChart3, path: '/results-analysis' },
    { name: 'Report Cards', icon: FileText, path: '/report-cards' },
    { name: 'Fees', icon: CreditCard, path: '/fees' },
    { name: 'Reset', icon: RefreshCcw, path: '#reset', color: 'text-red-500' },
    { name: 'Settings', icon: SettingsIcon, path: '/settings' },
  ];

  const handleReset = () => {
    if (password === 'admin123') { // Mock password
      toast.success('System reset successfully');
      setIsResetModalOpen(false);
      setPassword('');
      navigate('/');
    } else {
      toast.error('Invalid admin password');
    }
  };

  return (
    <>
      <div className={cn(
        "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={onClose} />
      
      <aside className={cn(
        "fixed top-0 left-0 bottom-0 w-64 bg-sidebar z-50 transition-transform duration-300 transform lg:translate-x-0 border-r border-sidebar-border",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <GraduationCap className="text-black h-5 w-5" />
              </div>
              <span className="font-bold text-lg tracking-tight">Inspire Analytics</span>
            </div>
            <button onClick={onClose} className="lg:hidden p-1 hover:bg-muted rounded text-muted-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1 scrollbar-hide">
            {menuItems.map((item) => {
              if (item.name === 'Reset') {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsResetModalOpen(true);
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-red-500/10 text-red-500"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </button>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "bg-green-500 text-black shadow-lg shadow-green-500/20" 
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="p-4 border-t border-sidebar-border">
            <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/10">
              <p className="text-[10px] text-green-500 uppercase font-bold tracking-widest mb-1">Status</p>
              <p className="text-xs text-muted-foreground font-medium">Standard License</p>
            </div>
          </div>
        </div>
      </aside>

      <Dialog open={isResetModalOpen} onOpenChange={setIsResetModalOpen}>
        <DialogContent className="bg-card border-border sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-500">Admin Reset</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Admin reset — this permanently deletes all school data. Enter the admin password to confirm:
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background border-border"
              onKeyDown={(e) => e.key === 'Enter' && handleReset()}
            />
          </div>
          <DialogFooter className="flex gap-2 sm:justify-end">
            <Button variant="outline" onClick={() => setIsResetModalOpen(false)} className="border-border">
              Cancel
            </Button>
            <Button onClick={handleReset} className="bg-red-600 hover:bg-red-700 text-white">
              Reset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Sidebar;
