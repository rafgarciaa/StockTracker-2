import { connect } from 'react-redux';
import NewsList from './newsList';

const mapStateToProps = state => ({
  newsList: state.quotes.companyNews,
});

export default connect(
  mapStateToProps,
  null
)(NewsList);
