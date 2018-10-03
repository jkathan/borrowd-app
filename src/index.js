import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ItemPage from './components/items-static'
/*
const ITEMLOAN = [
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
];
itemLoan={ITEMLOAN}
*/
const ITEMBORROW = [
  {type: 'tool', item: 'Wrench', owner: "Joey"},
  {type: 'tool', item: 'Tornado', owner: "Joey"},
  {type: 'tool', item: 'Wrench', owner: "Joey"},
  {type: 'tool', item: 'Turtle', owner: "Joey"},
  {type: 'tool', item: 'Wrench', owner: "Joey"},
  {type: 'tool', item: 'Wrench', owner: "Joey"},
];



ReactDOM.render(<ItemPage  itemBorrow={ITEMBORROW} />, document.getElementById('root'));
registerServiceWorker();
