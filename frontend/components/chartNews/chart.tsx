import React, { FunctionComponent, useState, useCallback } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { ChartDataTypes, ChartDataDay } from '../../utilities/interfaces';

interface ChartProps {
  chartDayData: ChartDataDay;
  chartData: ChartDataTypes;
}

const Chart: FunctionComponent<ChartProps> = ({ chartDayData, chartData }) => {
  const { fiveDay, oneMonth, oneYear, fiveYear, max } = chartData;
  const [displayedChartData, setDisplayedChartData] = useState(undefined);

  return (
    <div>
      <div className="chart">
        <div className="chart__select">
          <a href="#"> 1D </a>
          <a href="#" onClick={() => setDisplayedChartData(chartDayData)}>
            {' '}
            5D{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(fiveDay)}>
            {' '}
            1M{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(oneMonth)}>
            {' '}
            1Y{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(oneYear)}>
            {' '}
            5Y{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(max)}>
            {' '}
            MAX{' '}
          </a>
        </div>

        <ResponsiveContainer width="100%" aspect={2}>
          <AreaChart
            data={displayedChartData}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#8884d8" stopOpacity={1} />
                <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="dateTime"
              interval={'preserveStart'}
              tick={{ stroke: '#f4f6f9', strokeWidth: 0.1 }}
            />
            <YAxis
              orientation="right"
              domain={['dataMin', 'auto']}
              tick={{ stroke: '#f4f6f9', strokeWidth: 0.1 }}
            />
            <Tooltip
              cursor={{ stroke: 'red', strokeWidth: 2 }}
              labelStyle={{ color: 'black' }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="url(#colorPrice)"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
