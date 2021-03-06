import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import ItemPage from './components/items-static';
import BorrowPage from './components/borrowed-static';
import LoanPage from './components/Loaned-static';


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


const BORROWS = [
  {type: 'tool', item: 'Wrench', borrowee: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrowee: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrowee: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrowee: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrowee: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', borrowee: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'}
];
borrows={BORROWS}
*/
const LOANS = [
  {type: 'tool', item: 'Wrench', loanee: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
];


ReactDOM.render(<LoanPage loans={LOANS} />, document.getElementById('root'));
registerServiceWorker();
