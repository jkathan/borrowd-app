import React from 'react';
import {connect} from 'react-redux';

import Card from './card';
import AddForm from './add-form';

import {addCard} from '../actions';

export class LoanItemList extends React.Component {

    returnBook() {
        fetch(
            //edit this book to not have loan info
            )
    }

    renewBook(text) {
        //api edit
        this.props.dispatch(addCard(text, this.props.index));
    }

    addCard(text) {
        this.props.dispatch(addCard(text, this.props.index));
    }

    render() {
        return (
            <div>
                <ul className="list">
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
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};

export default connect()(List);
