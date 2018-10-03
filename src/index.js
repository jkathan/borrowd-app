import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ItemPage from './components/items-static'

ReactDOM.render(<ItemPage itemLoan={ITEMLOAN} />, document.getElementById('root'));
registerServiceWorker();
