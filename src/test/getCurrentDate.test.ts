import { getCurrentDate } from '../utilities/getCurrentDate';

test('Return current date in locale time string', () => {
  expect(getCurrentDate());
});
