import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import ItemList from './itemList';


import { apiEndpoint } from './config';
import fetchJson from './fetchJson';


const response = await fetchJson(apiEndpoint)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ItemList dataArray={response.data} />
)