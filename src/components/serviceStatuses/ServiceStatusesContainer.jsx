import { connect } from 'react-redux';
import ServiceStatuses from './ServiceStatuses';

const mapStateToProps = (state) => ({
  statuses: state.serviceStatus,
  services: state.service
});

export default connect(mapStateToProps)(ServiceStatuses);
