import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ItemPage from './components/items-static';
import BorrowPage from './components/borrowed-static';

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
const ITEMBORROW = [
  {type: 'tool', item: 'Wrench', owner: "Joey"},
  {type: 'tool', item: 'Tornado', owner: "Joey"},
  {type: 'tool', item: 'Wrench', owner: "Joey"},
  {type: 'tool', item: 'Turtle', owner: "Joey"},
  {type: 'tool', item: 'Wrench', owner: "Joey"},
  {type: 'tool', item: 'Wrench', owner: "Joey"},
];
itemBorrow={ITEMBORROW}
*/

const BORROWS = [
  {type: 'tool', item: 'Wrench', Borrowee: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
];

ReactDOM.render(<ItemPage borrows={BORROWS} />, document.getElementById('root'));
registerServiceWorker();
