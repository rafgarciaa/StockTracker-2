import { connect } from 'react-redux';
import NewsList from './newsList';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  newsList: state.quotes.companyNews,
  fetchStatus: state.fetchStatus.companyNews,
});

export default connect(
  mapStateToProps,
  null
)(NewsList);
