import { connect } from 'react-redux';
import Tags from './tags';
import { RootState } from '../../reducers/rootReducer';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => {
  const { companyInfo } = state.quotes;

  return {
    exchange: companyInfo.exchange,
    sector: companyInfo.sector,
    fetchStatus: selectFetchingStatus(state, 'companyInfo'),
  };
};

export default connect(mapStateToProps)(Tags);
