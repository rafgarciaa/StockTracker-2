import { connect } from 'react-redux';
import PriceOutput from './priceOutput';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  latestPrice: state.quotes.companyStats.latestPrice,
  change: state.quotes.companyStats.change,
  changePercent: state.quotes.companyStats.changePercent,
  fetchingStatus: selectFetchingStatus(state, 'companyStats'),
});

export default connect(mapStateToProps)(PriceOutput);
