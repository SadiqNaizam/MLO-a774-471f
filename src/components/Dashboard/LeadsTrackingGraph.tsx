import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface LeadsTrackingGraphProps {
  className?: string;
}

interface TrackingDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: TrackingDataPoint[] = [
  { month: 'March', closedWon: 65, closedLost: 50 },
  { month: 'April', closedWon: 59, closedLost: 40 },
  { month: 'May', closedWon: 80, closedLost: 30 },
  { month: 'June', closedWon: 70, closedLost: 10 },
  { month: 'July', closedWon: 56, closedLost: 45 },
  { month: 'August', closedWon: 95, closedLost: 32 },
];

const LeadsTrackingGraph: React.FC<LeadsTrackingGraphProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary-text-color">Leads tracking</CardTitle>
        <div className="flex items-baseline space-x-6 mt-1">
          <div>
            <span className="text-3xl font-bold text-primary-text-color">680</span>
            <span className="text-sm text-secondary-text-color ml-2">total closed</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-primary-text-color">70</span>
            <span className="text-sm text-secondary-text-color ml-2">total lost</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-8">
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-red)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--accent-red)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis 
                dataKey="month" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                domain={['auto', 'auto']}
              />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'var(--card)', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))' }}
                itemStyle={{ color: 'hsl(var(--primary-text-color))' }}
                cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3'}}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="square"
                iconSize={10}
                formatter={(value) => <span className="text-sm text-secondary-text-color ml-1">{value}</span>}
              />
              <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#0D9488" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, fill: '#0D9488', strokeWidth:2, stroke:'var(--card)' }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="var(--accent-red)" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, fill: 'var(--accent-red)', strokeWidth:2, stroke:'var(--card)' }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingGraph;
