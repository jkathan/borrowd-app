import React from 'react';
//import {connect} from 'react-redux';

import LoanCard from './loan-card'
import AddLoanForm from './loan-card-form';

//import {addCard} from '../actions';

export class LoanItemBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }

        //this.addCard = this.addCard.bind(this);
    }
/*
    removeLoanCard(id) {
     const cards = this.state.cards.filter(card => card.id !== id);
     this.setState({ cards });
};
*/
addContactHandler(event) {
    event.preventDefault();
    //console.log(event.target[0].value);
    //console.log(event.target.name.value);
    const name = this.input1.value;
    const phone = this.input3.value;
    const email = this.input2.value;
    const returnDate = this.input4.value;
    let cards = [...this.state.cards];
    if (name.length>0 && phone.length>0 && email.length>0 && returnDate.length>0){

      let card = {
        name: name,
        email: email,
        phone: phone,
        returnDate: returnDate
      };
      //this can be done better. talk to jacob about how
      contacts.push(card);
      console.log("cards: ", cards);
      this.setState({
        cards:cards
      });
    }
    this.input1.value = '';
    this.input2.value = ''; 
    this.input3.value = '';
    this.input4.value = '';
  };

//removeCard={this.removeCard}
    render() {  
        const cards = this.state.cards.map((card, index) =>
            <li key={index}>
                <LoanCard {...card} />
            </li>
        );
        return (
            <div>
                <ul className="list">
                    {cards}
                    <li>
                        <AddLoanForm
                             onAdd={(newCard)=>this.addContactHandler(newCard)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}


    /*constructor(props) {
        super(props);

        this.state = {
            lists: []
        };

        this.addList = this.addList.bind(this);
    }

    addList() {
        this.setState({
            lists: [...this.state.lists]
        });
    }
   /* 
    returnBook() {
        fetch(
            //edit this book to not have loan info
            )
    }

    renewBook(text) {
        //api edit
        this.props.dispatch(addCard(text, this.props.index));
    }
<li>
                        this.props.id
                        <p>Lendee: {this.props.lendee} </p>
                        <p> Due date: {this.props.returnDate} </p>
                        <button
                        //dont quite get how to find id here
                            returnBook={text => this.returnBook(text)}
                        ></button>
                        <RenewBookForm renewBook = {text => this.returnBook(text)} />
                    </li>
    addCard(text) {
        this.props.dispatch(addCard(text, this.props.index));
    }

    render() {
        const lists = this.state.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List {...list} />
            </li>
        ));

        return (
            <div>
                <ul className="list">
                    {lists}
                    <AddLoanForm 
                        type: "list"
                        onAdd = {}
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};

export default connect()(List);
*/