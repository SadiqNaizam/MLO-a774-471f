import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SummaryCardsGridProps {
  className?: string;
}

interface ReasonData {
  id: string;
  percentage: string;
  reason: string;
}

const reasonsLostData: ReasonData[] = [
  { id: 'reason1', percentage: '40%', reason: 'The proposal is unclear' },
  { id: 'reason2', percentage: '20%', reason: 'However venture pursuit' },
  { id: 'reason3', percentage: '10%', reason: 'Other' },
  { id: 'reason4', percentage: '30%', reason: 'The proposal is unclear' }, // Note: duplicate reason text as per image
];

interface OtherStatData {
  id: string;
  value: string;
  label: string;
  tooltip?: string;
}

const otherDataStats: OtherStatData[] = [
  { id: 'stat1', value: '900', label: 'total leads count' },
  { id: 'stat2', value: '12', label: 'days in average to convert lead' },
  { id: 'stat3', value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days' },
];

const SummaryCardsGrid: React.FC<SummaryCardsGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {/* Reasons of leads lost card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text-color">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-8 gap-y-6">
          {reasonsLostData.map((item) => (
            <div key={item.id}>
              <div className="text-3xl font-bold text-primary-text-color">{item.percentage}</div>
              <p className="text-sm text-secondary-text-color mt-1">{item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Other data card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text-color">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 text-center md:text-left">
          {otherDataStats.map((stat) => (
            <div key={stat.id}>
              <div className="text-3xl font-bold text-primary-text-color">{stat.value}</div>
              <div className="text-sm text-secondary-text-color mt-1 flex items-center justify-center md:justify-start">
                <span>{stat.label}</span>
                {stat.tooltip && (
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-1.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCardsGrid;
