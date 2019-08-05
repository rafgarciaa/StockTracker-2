export const chartTimeFrameFormatter = (timeFrame: string) => {
  switch (timeFrame) {
    case '5DM':
      return 'fiveDay';

    case '1M':
      return 'oneMonth';

    case '1Y':
      return 'oneYear';

    case '5Y':
      return 'fiveYear';

    case 'MAX':
      return 'max';

    default:
      return timeFrame;
  }
};
