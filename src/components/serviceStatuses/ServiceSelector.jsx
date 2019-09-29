import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

import './ServiceSelector.css';

const { Option } = Select;

const propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

const ServiceSelector = ({ services, onChange }) => (
  <div className="service-selector__container">
    <Select defaultValue="Please select a service" onChange={onChange}>
      {services.map((service) => <Option key={service} value={service}>{service}</Option>)}
    </Select>
  </div>
);

ServiceSelector.propTypes = propTypes;

export default ServiceSelector;
