import React from 'react';
//import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
//import Input from './input';
//import {required, nonEmpty, email} from '../validators';


//this needs the api to make a static app
export default class AddLoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            loanee: "",
            email: "",
            phone: "",
            returnDate: ''
        }
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state)
        this.setState({loanee: "", email: "", phone: "", returnDate: ''});
    }

    handleUpdate(event) {
        event.preventDefault();
        this.setState({[event.currentTarget.name]: event.currentTarget.value});
    }
       
//add checks for email and date
render() {
    if (!this.state.editing) {
            return (
                <button
                    className="add-button"
                    onClick={() => this.setEditing(true)}>
                    Add a Loan
                </button>
            );
        }

        return (
            <form
                onSubmit={this.onSubmit}
                )}> 
                <input name="loanee" type="text" label="Loanee:" value={this.state.loanee} onChange= {this.handleUpdate}//validate={[required, nonEmpty]} 
                />
                <input name="email" type="email" label="Email address:" value={this.state.email} onChange= {this.handleUpdate}//validate={[required, nonEmpty, email]}
                />
                <input name="phone" type="tel" label="Phone #:" value={this.state.phone} onChange= {this.handleUpdate}//validate={[required, nonEmpty]} 
                />
                <input name="returnDate" type="date" label="Date of Return:" value={this.state.returnDate} onChange= {this.handleUpdate}
                    //validate={[required, nonEmpty]}
                />
                <button
                    type="submit"
                    onClick={() => this.setEditing(false)}
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}