import { connect } from 'react-redux';
import Tags from './tags';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => {
  const { companyInfo } = state.quotes;

  return {
    exchange: companyInfo.exchange,
    sector: companyInfo.sector,
    fetchingStatus: selectFetchingStatus(state, 'companyInfo'),
  };
};

export default connect(mapStateToProps)(Tags);
