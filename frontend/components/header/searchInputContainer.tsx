import { connect } from 'react-redux';
import SearchInput from './searchInput';

import {
  searchAction,
  // fetchCompanyInfo,
  // fetchCompanyNews,
} from '../../actions/quotesActions';

const mapDispatchToProps = (dispatch: any) => ({
  searchAction: (symbol: string) => dispatch(searchAction(symbol)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
