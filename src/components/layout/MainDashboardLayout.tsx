import React from 'react';
import SidebarNav from './SidebarNav';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface MainDashboardLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const MainDashboardLayout: React.FC<MainDashboardLayoutProps> = ({ 
  children,
  pageTitle = 'Dashboard' // Default title as per common usage
}) => {
  return (
    <div className={cn('min-h-screen bg-background text-foreground')}>
      <SidebarNav />
      {/* This div is the main content column that sits to the right of the fixed sidebar */}
      <div className="ml-64"> 
        <TopHeader title={pageTitle} />
        {/* 
          Main content area configuration based on Layout Requirements:
          - mt-[60px]: Offset for the fixed TopHeader (height 60px).
          - h-[calc(100vh-60px)]: Ensures the main content area takes up the remaining viewport height below the header.
          - overflow-y-auto: Allows content within to scroll if it exceeds the available height.
          - min-w-0: Important for flex/grid children to prevent overflow issues with large content.
        */}
        <main className="mt-[60px] h-[calc(100vh-60px)] min-w-0 overflow-y-auto">
          {/* p-6: Padding for the content itself, as per mainContent.layout */}
          <div className="p-6">
            {/* flex flex-col gap-6: Container for dashboard widgets, as per mainContent.container */}
            <div className="flex flex-col gap-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDashboardLayout;
