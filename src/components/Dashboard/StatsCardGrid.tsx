import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CheckCircle } from 'lucide-react';

interface StatsCardGridProps {
  className?: string;
}

interface StatData {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
}

const statsData: StatData[] = [
  {
    id: 'activeLeads',
    title: 'Active Leads',
    value: '600',
    description: 'Currently in funnel',
    icon: Users,
    iconColor: 'text-blue-500',
  },
  {
    id: 'totalClosed',
    title: 'Total Closed Leads',
    value: '680',
    description: 'Successfully converted',
    icon: CheckCircle,
    iconColor: 'text-green-500',
  },
];

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {statsData.map((stat) => (
        <Card key={stat.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={cn('h-5 w-5', stat.iconColor)} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary-text-color">{stat.value}</div>
            <p className="text-xs text-secondary-text-color pt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCardGrid;
