import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from 'recharts';

interface SourcesPieChartCardProps {
  className?: string;
}

interface SourceData {
  name: string;
  value: number; // The actual value, e.g., number of leads or deal size
  displayValue: string; // Formatted string for display, e.g., "$ 3000"
  percentage: number;
  color: string; // Hex color code
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, displayValue: '$ 3000', percentage: 50, color: 'var(--accent-red)' }, // #DC3545
  { name: 'Behance', value: 2000, displayValue: '$ 1000', percentage: 25, color: 'var(--accent-yellow)' }, // #FFC107 -- value adjusted for 100% total
  { name: 'Instagram', value: 1500, displayValue: '$ 1000', percentage: 15, color: '#14B8A6' }, // Teal-500
  { name: 'Dribbble', value: 1000, displayValue: '$ 1000', percentage: 10, color: '#84CC16' }, // Lime-500
];
// Make percentages sum to 100 for a standard pie chart
const totalValue = sourcesData.reduce((sum, item) => sum + item.value, 0);
const chartData = sourcesData.map(src => ({ ...src, percentageCorrected: (src.value / totalValue) * 100 }));

const SourcesPieChartCard: React.FC<SourcesPieChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary-text-color">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="w-full h-[200px] md:h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip
                  contentStyle={{ backgroundColor: 'white', borderRadius: '0.375rem', border: '1px solid hsl(var(--border))' }}
                  itemStyle={{ color: 'hsl(var(--primary-text-color))' }}
                  cursor={{ fill: 'hsl(var(--muted))' }}
                />
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius="80%"
                  innerRadius="50%" // Donut chart
                  fill="#8884d8"
                  dataKey="value"
                  stroke="var(--card)"
                  strokeWidth={2}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="space-y-3">
            {sourcesData.map((source) => (
              <li key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span 
                    className="w-3 h-3 rounded-sm mr-3"
                    style={{ backgroundColor: source.color }}
                  />
                  <span className="text-primary-text-color">{source.name}</span>
                </div>
                <div className="flex items-center text-secondary-text-color">
                  <span className="w-20 text-right">{source.displayValue}</span>
                  <span className="w-12 text-right font-medium text-primary-text-color">{source.percentage}%</span>
                  {source.name === 'Dribbble' && (
                    <span className="ml-2 text-xs text-muted-foreground whitespace-nowrap">from leads total</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChartCard;
