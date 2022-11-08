import { Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
  },
  {
    title: 'File Size',
    dataIndex: 'size', 
  },
  {
    title: 'File',
    dataIndex: 'url',
    render: (url) => <img width={80} src={url} alt={url}/>,
  },
  {
    title: 'Created Date',
    dataIndex: 'createdAt',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const DataTable = ({_data}) => <Table columns={columns} dataSource={_data} onChange={onChange} />;
export default DataTable;