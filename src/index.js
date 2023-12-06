import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ItemList from './itemList';
import {response} from './data'

const root = ReactDOM.createRoot(document.getElementById('root'));



// const details = require('./data.json')
const dataArray = response.data




root.render(
  <ItemList dataArray={dataArray}/>
)