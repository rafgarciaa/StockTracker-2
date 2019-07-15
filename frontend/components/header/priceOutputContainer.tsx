import { connect } from 'react-redux';
import PriceOutput from './priceOutput';
import { RootState } from '../../reducers/rootReducer';

const mapStateToProps = (state: RootState) => ({
  latestPrice: state.quotes.companyStats.latestPrice,
  change: state.quotes.companyStats.change,
  changePercent: state.quotes.companyStats.changePercent,
});

export default connect(mapStateToProps)(PriceOutput);
