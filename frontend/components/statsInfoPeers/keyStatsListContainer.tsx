import { connect } from 'react-redux';
import KeyStatsList from './keyStatsList';
import { RootState } from '../../utilities/interfaces';
import { selectCompanyStats } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  companyStats: selectCompanyStats(state.quotes.companyStats),
});

export default connect(
  mapStateToProps,
  null
)(KeyStatsList);
