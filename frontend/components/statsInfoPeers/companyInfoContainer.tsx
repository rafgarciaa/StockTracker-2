import { connect } from 'react-redux';
import CompanyInfo from './companyInfo';
import { RootState } from '../../utilities/interfaces';
// you have an unused import statement that should be removed, webpack will include this and all the files that they import, which is unnecessary
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  companyInfo: state.quotes.companyInfo,
  fetchStatus: state.fetchStatus.companyInfo,
});

export default connect(
  mapStateToProps,
  null
)(CompanyInfo);
