import { connect } from 'react-redux';
import ChartNewsLayout from './chartNewsLayout';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  newsList: state.quotes.companyNews,
});

export default connect(
  mapStateToProps,
  null
)(ChartNewsLayout);
