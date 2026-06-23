import React from 'react';
import { Menu, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const location = useLocation();
  
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return 'Dashboard';
      case '/admin': return 'Admin';
      case '/school-setup': return 'School Setup';
      case '/grades-streams': return 'Grades & Streams';
      case '/students': return 'Students';
      case '/subjects': return 'Subjects';
      case '/add-exams': return 'Add Exams';
      case '/marks-entry': return 'Marks Entry';
      case '/results-analysis': return 'Results Analysis';
      case '/report-cards': return 'Report Cards';
      case '/fees': return 'Fees';
      case '/settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 lg:px-8 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-muted rounded-md text-muted-foreground"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium overflow-hidden">
          <span className="whitespace-nowrap">School: Munyaka Comprehensive School</span>
          <ChevronRight className="h-4 w-4 shrink-0" />
          <span className="text-foreground font-bold whitespace-nowrap">{getPageTitle(location.pathname)}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-border text-[11px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/30">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Exit view-as
        </div>
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 border border-border">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
