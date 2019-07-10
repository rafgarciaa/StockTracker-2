import { connect } from 'react-redux';
import CompanyInfo from './companyInfo';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  companyInfo: state.quotes.companyInfo,
});

export default connect(
  mapStateToProps,
  null
)(CompanyInfo);
