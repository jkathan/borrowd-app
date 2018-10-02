import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoanItemBoard from './components/Loaned/loan-item-list'

ReactDOM.render(<LoanItemList />, document.getElementById('root'));
registerServiceWorker();
