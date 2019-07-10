import { connect } from 'react-redux';
import NewsList from './newsList';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  newsList: state.quotes.companyNews,
});

export default connect(
  mapStateToProps,
  null
)(NewsList);
