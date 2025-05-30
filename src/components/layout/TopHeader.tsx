import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, PlusCircle, Edit3, BarChart2 } from 'lucide-react';

interface TopHeaderProps {
  title: string;
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ title, className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-64 right-0 z-10 flex h-[60px] items-center justify-between border-b border-border bg-card px-6',
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-primary-text-color">{title}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>New Lead</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Edit3 className="mr-2 h-4 w-4" />
            <span>New Task</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BarChart2 className="mr-2 h-4 w-4" />
            <span>New Report</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>More Options...</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
