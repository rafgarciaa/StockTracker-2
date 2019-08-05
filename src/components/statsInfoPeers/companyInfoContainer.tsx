import { connect } from 'react-redux';
import CompanyInfo from './companyInfo';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  companyInfo: state.quotes.companyInfo,
  fetchStatus: state.fetchStatus.companyInfo,
});

export default connect(
  mapStateToProps,
  null
)(CompanyInfo);
