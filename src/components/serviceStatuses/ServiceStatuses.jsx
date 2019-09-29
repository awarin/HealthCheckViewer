import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import ServiceSelector from './ServiceSelector';
import { columns } from './constant.jsx';

import './ServiceStatuses.css';

const propTypes = {
  statuses: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
};

class ServiceStatuses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  handleServiceChange = (service) => {
    this.setState({
      selected: service,
    });
  }

  render() {
    const { selected } = this.state;
    const { statuses, services } = this.props;

    let content = selected ? <span>No data found!</span> : null;

    if (selected && Reflect.has(statuses, selected)) {
      const statusesWithKey = statuses[selected].map((status, key) => ({
        ...status,
        key,
      }));

      content = (
        <div>
          <Table
            className="service-statuses__table"
            columns={columns}
            dataSource={statusesWithKey}
            size="small"
          />
        </div>
      );
    }

    return (
      <div>
        <ServiceSelector services={services} onChange={this.handleServiceChange} />
        {content}
      </div>
    );
  }
}

ServiceStatuses.propTypes = propTypes;

export default ServiceStatuses;
