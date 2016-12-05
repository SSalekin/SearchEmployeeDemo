import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './EmployeeList';
import list from './list';
import './index.css';

ReactDOM.render(
  <EmployeeList employees={list} />,
  document.getElementById('root')
);
