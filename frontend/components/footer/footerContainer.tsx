import { connect } from 'react-redux';
import FooterLayout from './footerLayout';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({});

export default connect(
  mapStateToProps,
  null
)(FooterLayout);
