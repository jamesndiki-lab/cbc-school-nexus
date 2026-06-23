import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64 transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full pb-32">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
