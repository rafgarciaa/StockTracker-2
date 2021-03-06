import { connect } from 'react-redux';
import SearchInput from './searchInput';
import { searchAction, fetchCompanyNames } from '../../actions/quotesActions';
import { RootState } from '../../utilities/interfaces';
import { ThunkDispatch } from 'redux-thunk';

const mapStateToProps = ({ quotes }: RootState) => ({
  companyNames: quotes.companyNames,
  companyName: quotes.companyInfo.companyName,
  companySymbol: quotes.companyInfo.symbol,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  searchAction: (symbol: string) => dispatch(searchAction(symbol)),
  fetchCompanyNames: () => dispatch(fetchCompanyNames()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
