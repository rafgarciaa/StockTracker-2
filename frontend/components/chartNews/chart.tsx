import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Temp {
  dateTime: string;
  price: number;
}

interface ChartProps {
  oneDayData: Temp[];
  fiveDayData: Temp[];
  oneMonthData: Temp[];
  oneYearData: Temp[];
  fiveYearData: Temp[];
  maxData: Temp[];
  isFetchingChart: boolean;
}

const Chart: FunctionComponent<ChartProps> = ({
  oneDayData,
  fiveDayData,
  oneMonthData,
  oneYearData,
  fiveYearData,
  maxData,
  isFetchingChart,
}) => {
  const [displayedChartData, setDisplayedChartData] = useState(undefined);

  const setOneDay = useCallback(() => setDisplayedChartData(oneDayData), [
    oneDayData,
  ]);
  const setFiveDay = useCallback(() => setDisplayedChartData(fiveDayData), [
    fiveDayData,
  ]);
  const setOneMonth = useCallback(() => setDisplayedChartData(oneMonthData), [
    oneMonthData,
  ]);
  const setOneYear = useCallback(() => setDisplayedChartData(oneYearData), [
    oneYearData,
  ]);
  const setFiveYear = useCallback(() => setDisplayedChartData(fiveYearData), [
    fiveYearData,
  ]);
  const setMax = useCallback(() => setDisplayedChartData(maxData), [maxData]);

  useEffect(() => {
    if (!displayedChartData && oneDayData.length !== 0) {
      setDisplayedChartData(oneDayData);
    }
  });

  return (
    <div>
      <div className="chart">
        <div className="chart__select">
          <a href="#" onClick={setOneDay}>
            {' '}
            1D{' '}
          </a>
          <a href="#" onClick={setFiveDay}>
            {' '}
            5D{' '}
          </a>
          <a href="#" onClick={setOneMonth}>
            {' '}
            1M{' '}
          </a>
          <a href="#" onClick={setOneYear}>
            {' '}
            1Y{' '}
          </a>
          <a href="#" onClick={setFiveYear}>
            {' '}
            5Y{' '}
          </a>
          <a href="#" onClick={setMax}>
            {' '}
            MAX{' '}
          </a>
        </div>

        {isFetchingChart ? (
          'LOADING...'
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Chart;
