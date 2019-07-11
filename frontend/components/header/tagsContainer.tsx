import { connect } from 'react-redux';
import Tags from './tags';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = ({ quotes }: RootState) => ({
  exchange: quotes.companyInfo.exchange,
  sector: quotes.companyInfo.sector,
});

export default connect(mapStateToProps)(Tags);
