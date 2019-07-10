import { connect } from 'react-redux';
import Tags from './tags';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => {
  const { companyInfo } = state.quotes;

  return {
    exchange: companyInfo.exchange,
    sector: companyInfo.sector,
  };
};

export default connect(mapStateToProps)(Tags);
