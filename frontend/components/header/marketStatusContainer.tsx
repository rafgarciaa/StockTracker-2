import { connect } from 'react-redux';
import MarketStatus from './marketStatus';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = ({ updateTime }: RootState) => ({
  updateTime,
});

export default connect(mapStateToProps)(MarketStatus);
