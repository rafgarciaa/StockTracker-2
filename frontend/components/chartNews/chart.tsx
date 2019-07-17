import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
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
import {
  FetchStatusElement,
  ChartData,
  ChartDataDay,
} from '../../utilities/interfaces';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';
import * as Selectors from '../../utilities/selectors';

interface ChartDataProps {
  dateTime: string | null;
  price: number | null;
}

interface ChartProps {
  oneDayData: ChartDataDay[];
  fiveDayData: ChartDataDay[];
  oneMonthData: ChartData[];
  oneYearData: ChartData[];
  fiveYearData: ChartData[];
  maxData: ChartData[];
  fetchStatus: FetchStatusElement;
}

const Chart: FunctionComponent<ChartProps> = (props: ChartProps) => {
  const [displayedChartData, setDisplayedChartData] = useState<
    ChartDataProps[]
  >(Selectors.selectChartDataDay(props.oneDayData));

  const setOneDay = useCallback(
    () => setDisplayedChartData(Selectors.selectChartDataDay(props.oneDayData)),
    [props.oneDayData]
  );
  const setFiveDay = useCallback(
    () =>
      setDisplayedChartData(
        Selectors.selectChartDataFiveDay(props.fiveDayData)
      ),
    [props.fiveDayData]
  );
  const setOneMonth = useCallback(
    () =>
      setDisplayedChartData(
        Selectors.selectChartDataOneMonth(props.oneMonthData)
      ),
    [props.oneMonthData]
  );
  const setOneYear = useCallback(
    () =>
      setDisplayedChartData(Selectors.selectChartDataYear(props.oneYearData)),
    [props.oneYearData]
  );
  const setFiveYear = useCallback(
    () =>
      setDisplayedChartData(Selectors.selectChartDataYear(props.fiveYearData)),
    [props.fiveYearData]
  );
  const setMax = useCallback(
    () => setDisplayedChartData(Selectors.selectChartDataYear(props.maxData)),
    [props.maxData]
  );

  useEffect(() => {
    setDisplayedChartData(Selectors.selectChartDataDay(props.oneDayData));
  }, [props.oneDayData]);

  return (
    <div className="section-chart">
      {props.fetchStatus.startFetching && (
        <div>
          <div className="section-chart__timelines">
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

          {!props.fetchStatus.doneFetching ? (
            <AdaptiveLoader />
          ) : props.fetchStatus.fetchSuccess !== '' ? (
            props.fetchStatus.fetchSuccess
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
      )}
    </div>
  );
};

export default Chart;
