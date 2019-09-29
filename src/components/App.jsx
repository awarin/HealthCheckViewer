import React from 'react';
import ServiceStatuses from './serviceStatuses';

import './App.css';

const App = () => (
  <div>
    <h1>Service health check monitor</h1>
    <ServiceStatuses />
  </div>
);

export default App;
