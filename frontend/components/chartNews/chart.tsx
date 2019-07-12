import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FetchStatusElement } from '../../utilities/interfaces';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface ChartDataProps {
  dateTime: string | null;
  price: number | null;
}

interface ChartProps {
  oneDayData: ChartDataProps[];
  fiveDayData: ChartDataProps[];
  oneMonthData: ChartDataProps[];
  oneYearData: ChartDataProps[];
  fiveYearData: ChartDataProps[];
  maxData: ChartDataProps[];
  fetchStatus: FetchStatusElement;
}

interface ChartState {
  displayedChartData: ChartDataProps[];
}

export default class Chart extends React.Component<ChartProps, ChartState> {
  public readonly state: ChartState = {
    displayedChartData: [],
  };

  public componentDidMount() {
    this.setState({ displayedChartData: this.props.oneDayData });
  }

  public componentDidUpdate(prevProps: ChartProps) {
    if (prevProps.oneDayData !== this.props.oneDayData) {
      this.setState({ displayedChartData: this.props.oneDayData });
    }
  }

  public setDisplayedChartData = (chartData: ChartDataProps[]) => {
    this.setState({ displayedChartData: chartData });
  };

  public render() {
    const { displayedChartData } = this.state;
    const {
      oneDayData,
      fiveDayData,
      oneMonthData,
      oneYearData,
      fiveYearData,
      maxData,
      fetchStatus,
    } = this.props;

    return (
      <div className="section-chart">
        {fetchStatus.startFetching && (
          <div>
            <div className="section-chart__timelines">
              <a
                href="#"
                onClick={() => this.setDisplayedChartData(oneDayData)}
              >
                {' '}
                1D{' '}
              </a>
              <a
                href="#"
                onClick={() => this.setDisplayedChartData(fiveDayData)}
              >
                {' '}
                5D{' '}
              </a>
              <a
                href="#"
                onClick={() => this.setDisplayedChartData(oneMonthData)}
              >
                {' '}
                1M{' '}
              </a>
              <a
                href="#"
                onClick={() => this.setDisplayedChartData(oneYearData)}
              >
                {' '}
                1Y{' '}
              </a>
              <a
                href="#"
                onClick={() => this.setDisplayedChartData(fiveYearData)}
              >
                {' '}
                5Y{' '}
              </a>
              <a href="#" onClick={() => this.setDisplayedChartData(maxData)}>
                {' '}
                MAX{' '}
              </a>
            </div>

            {!fetchStatus.doneFetching ? (
              <AdaptiveLoader />
            ) : !fetchStatus.fetchSuccess ? (
              'ERROR: Cannot display chart'
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
  }
}
