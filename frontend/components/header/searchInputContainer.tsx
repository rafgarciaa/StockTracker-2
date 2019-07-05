import { connect } from 'react-redux';
import SearchInput from './searchInput';

import { searchAction, fetchCompanyNames } from '../../actions/quotesActions';

const mapDispatchToProps = (dispatch: any) => ({
  searchAction: (symbol: string) => dispatch(searchAction(symbol)),
  fetchCompanyNames: () => dispatch(fetchCompanyNames()),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
