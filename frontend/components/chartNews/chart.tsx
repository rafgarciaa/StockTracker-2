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
  oneDayData: [];
  fiveDayData: [];
  oneMonthData: [];
  oneYearData: [];
  maxData: [];
}

const Chart: FunctionComponent<ChartProps> = ({
  oneDayData,
  fiveDayData,
  oneMonthData,
  oneYearData,
  maxData,
}) => {
  const [displayedChartData, setDisplayedChartData] = useState(oneDayData);

  return (
    <div>
      <div className="chart">
        <div className="chart__select">
          <a href="#"> 1D </a>
          <a href="#" onClick={() => setDisplayedChartData(oneDayData)}>
            {' '}
            5D{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(fiveDayData)}>
            {' '}
            1M{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(oneMonthData)}>
            {' '}
            1Y{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(oneYearData)}>
            {' '}
            5Y{' '}
          </a>
          <a href="#" onClick={() => setDisplayedChartData(maxData)}>
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
