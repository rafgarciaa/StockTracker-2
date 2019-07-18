import { connect } from 'react-redux';
import FooterFavorite from './footerFavorite';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  favoriteList: state.quotes.favorites,
  fetchStatus: selectFetchingStatus(state, 'favoritePrices'),
});

export default connect(
  mapStateToProps,
  null
)(FooterFavorite);
