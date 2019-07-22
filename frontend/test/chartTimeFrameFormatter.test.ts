import { chartTimeFrameFormatter } from '../utilities/chartTimeFrameFormatter';

test('Returning the correct chart timeseries name', () => {
  expect(chartTimeFrameFormatter('5DM')).toMatch('fiveDay');
  expect(chartTimeFrameFormatter('1M')).toMatch('oneMonth');
  expect(chartTimeFrameFormatter('1Y')).toMatch('oneYear');
  expect(chartTimeFrameFormatter('5Y')).toMatch('fiveYear');
  expect(chartTimeFrameFormatter('MAX')).toMatch('max');
  expect(chartTimeFrameFormatter('anything')).toMatch('anything');
});
