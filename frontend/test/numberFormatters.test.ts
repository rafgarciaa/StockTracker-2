import { changeToPercent } from '../utilities/numberFormatters';

test('Changing to percent', () => {
  expect(changeToPercent(0.1234)).toMatch('12.34');
});
