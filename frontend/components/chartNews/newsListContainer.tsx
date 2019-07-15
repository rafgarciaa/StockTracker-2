import { connect } from 'react-redux';
import NewsList from './newsList';
import { RootState } from '../../reducers/rootReducer';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  newsList: state.quotes.companyNews,
  fetchStatus: selectFetchingStatus(state, 'companyNews'),
});

export default connect(
  mapStateToProps,
  null
)(NewsList);
