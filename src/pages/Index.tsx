import React from 'react';

// Layout Component
import MainDashboardLayout from '../components/layout/MainDashboardLayout';

// Organism Components
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import FunnelChartCard from '../components/Dashboard/FunnelChartCard';
import SourcesPieChartCard from '../components/Dashboard/SourcesPieChartCard';
import LeadsTrackingGraph from '../components/Dashboard/LeadsTrackingGraph';
import SummaryCardsGrid from '../components/Dashboard/SummaryCardsGrid';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

// Icons
import { CalendarDays, ChevronDown } from 'lucide-react';

const LeadsDashboardPage: React.FC = () => {
  // Page-level state (e.g., for active filters) could be added here if functionality was required.
  // For this static generation, we'll use default values.

  return (
    <MainDashboardLayout pageTitle="Dashboard">
      <Tabs defaultValue="leads" className="w-full">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <TabsList>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Last 6 months</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
              <DropdownMenuItem>Last 3 months</DropdownMenuItem>
              <DropdownMenuItem>Last 6 months</DropdownMenuItem>
              <DropdownMenuItem>Last 12 months</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Custom Range...</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <TabsContent value="sales">
          <div className="flex items-center justify-center h-96 border border-dashed rounded-lg bg-card">
            <p className="text-muted-foreground">Sales data and visualizations will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          {/* 
            StatsCardGrid is included based on the component hierarchy.
            Note: Some information (e.g., '600 active leads', '680 total closed') 
            might appear redundant as FunnelChartCard and LeadsTrackingGraph 
            also display these numbers integrated within their headers.
            This is per specification; adjust if business logic dictates otherwise.
          */}
          <StatsCardGrid />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <FunnelChartCard className="lg:col-span-3" />
            <SourcesPieChartCard className="lg:col-span-2" />
          </div>

          <LeadsTrackingGraph />

          <SummaryCardsGrid />
        </TabsContent>
      </Tabs>
    </MainDashboardLayout>
  );
};

export default LeadsDashboardPage;
