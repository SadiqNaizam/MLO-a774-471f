import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelChartCardProps {
  className?: string;
}

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: string;
  time: string;
  color: string; // Tailwind background color class e.g. 'bg-red-500'
  percentage: number; // for the progress bar segment
}

const funnelData: FunnelStage[] = [
  {
    id: 'discovery',
    name: 'Discovery',
    count: 200,
    value: '$ 200',
    time: '2 days',
    color: 'bg-[var(--accent-red)]',
    percentage: 51.28, // 200 / 390
  },
  {
    id: 'qualified',
    name: 'Qualified',
    count: 100,
    value: '$ 100',
    time: '2 days',
    color: 'bg-[var(--accent-yellow)]',
    percentage: 25.64, // 100 / 390
  },
  {
    id: 'inConversation',
    name: 'In conversation',
    count: 50,
    value: '$ 100',
    time: 'average time on this stage',
    color: 'bg-slate-700',
    percentage: 12.82, // 50 / 390
  },
  {
    id: 'negotiations',
    name: 'Negotiations',
    count: 20,
    value: '$ 50',
    time: '8 days',
    color: 'bg-[var(--accent-green)]',
    percentage: 5.13, // 20 / 390
  },
  {
    id: 'closedWon',
    name: 'Closed won',
    count: 20,
    value: '$ 50',
    time: '10 days',
    color: 'bg-purple-500',
    percentage: 5.13, // 20 / 390
  },
];

const FunnelChartCard: React.FC<FunnelChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary-text-color">Funnel count</CardTitle>
        <div className="flex items-baseline space-x-2 mt-1">
          <span className="text-4xl font-bold text-primary-text-color">600</span>
          <span className="text-sm text-secondary-text-color">active leads</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-3 flex rounded-full overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.id}
              className={cn('h-full', stage.color)}
              style={{ width: `${stage.percentage}%` }}
              title={`${stage.name}: ${stage.count}`}
            />
          ))}
        </div>
        <ul className="space-y-3">
          {funnelData.map((stage) => (
            <li key={stage.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className={cn('w-3 h-3 rounded-sm mr-3', stage.color)} />
                <span className="text-primary-text-color">{stage.name}</span>
              </div>
              <div className="flex items-center space-x-6 text-secondary-text-color">
                <span className="w-10 text-right">{stage.count}</span>
                <span className="w-16 text-right">{stage.value}</span>
                {stage.id === 'inConversation' ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="w-12 text-right cursor-help">{stage.count /* Display count or original time text if desired */} days</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stage.time}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <span className="w-12 text-right">{stage.time}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelChartCard;
