import { connect } from 'react-redux';
import PriceOutput from './priceOutput';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = ({ quotes }: RootState) => ({
  latestPrice: quotes.companyStats.latestPrice,
  change: quotes.companyStats.change,
  changePercent: quotes.companyStats.changePercent,
});

export default connect(mapStateToProps)(PriceOutput);
