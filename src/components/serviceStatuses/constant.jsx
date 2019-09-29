import { DateTime } from 'luxon';
import React from 'react';

const getStatusClassName = (text) => {
  return text === 'Ok' ? 'status-table__ok' : 'status-table__error';
};

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    filters: [
      {
        text: 'Ok',
        value: 'Ok',
      },
      {
        text: 'Error',
        value: 'Error',
      }
    ],
    onFilter: (value, record) => record.status === value,
    render: (text) => (<span className={getStatusClassName(text)}>{text}</span>)
  },
  {
    title: 'Time',
    dataIndex: 'statusTime',
    key: 'statusTime',
    render: (text) => DateTime.fromISO(text).toFormat('yyyy LLL dd \'at\' HH:mm'),
    sorter: (a, b) => DateTime.fromISO(a.statusTime).toMillis()
      - DateTime.fromISO(b.statusTime).toMillis()
  }
];

export {
  columns
};
