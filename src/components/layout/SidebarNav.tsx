import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserSquare2,
  FileText,
  FileSpreadsheet,
  ShoppingCart,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  UserCircle,
  Menu as MenuIcon, // Renamed to avoid conflict with potential Menu component
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  id: string;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', href: '#', label: 'Dashboard', icon: LayoutGrid },
  { id: 'leads', href: '#', label: 'Leads', icon: Users },
  { id: 'customers', href: '#', label: 'Customers', icon: UserSquare2 },
  { id: 'proposals', href: '#', label: 'Proposals', icon: FileText },
  { id: 'invoices', href: '#', label: 'Invoices', icon: FileSpreadsheet },
  { id: 'items', href: '#', label: 'Items', icon: ShoppingCart },
  { id: 'mail', href: '#', label: 'Mail', icon: Mail },
  { id: 'shoebox', href: '#', label: 'Shoebox', icon: Archive },
  { id: 'calendar', href: '#', label: 'Calendar', icon: CalendarDays },
];

const userActionItems: NavItem[] = [
  { id: 'help', href: '#', label: 'Help', icon: HelpCircle },
  { id: 'settingsLink', href: '#', label: 'Settings', icon: Settings }, // Changed id to avoid conflict with Settings icon component
  { id: 'profile', href: '#', label: 'Profile', icon: UserCircle },
];

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [activeId, setActiveId] = useState<string>('dashboard');

  const NavLink: React.FC<{ item: NavItem; isActive: boolean; onClick: () => void }> = ({ item, isActive, onClick }) => (
    <a
      href={item.href}
      onClick={onClick}
      className={cn(
        'flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-150',
        isActive
          ? 'bg-sidebar-accent text-sidebar-primary'
          : 'text-sidebar-foreground hover:bg-black/5 dark:hover:bg-white/5',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar'
      )}
    >
      <item.icon className={cn('h-5 w-5 mr-3', isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground/80')} />
      {item.label}
    </a>
  );

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground',
        className
      )}
    >
      <div className="flex h-[60px] items-center justify-start px-4 border-b border-sidebar-border">
        <MenuIcon className="h-6 w-6 text-sidebar-foreground/80 mr-3 cursor-pointer" /> 
        <div className="flex items-center justify-center h-9 w-9 bg-gray-800 text-white rounded-full text-lg font-bold">
          bo
        </div>
      </div>

      <nav className="flex-1 space-y-1.5 p-4 overflow-y-auto">
        {mainNavItems.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </nav>

      <Separator className="bg-sidebar-border my-2" />

      <div className="p-4 space-y-1.5">
        {userActionItems.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;
