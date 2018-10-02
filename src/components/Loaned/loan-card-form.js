import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';


//this needs the api to make a static app
class AddLoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            loanee: '',
            email: '',
            phone: '',
            returnDate: ''
        };
    }
    setEditing(editing) {
        this.setState({
            editing
        });
    }
    onSubmit(event) {
         event.preventDefault();
         const target = event.target;
         const name = target.name;
         const value = target.value;

         this.setState({
            [name]: value
         })
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
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}> 
                <input name="loanee" type="text" label="Loanee:" value={this.state.value} //validate={[required, nonEmpty]} 
                />
                <input name="email" type="email" label="Email address:" value={this.state.value} //validate={[required, nonEmpty, email]}
                />
                <input name="phone" type="tel" label="Phone #:" value={this.state.value}//validate={[required, nonEmpty]} 
                />
                <input name="return" type="date" label="Date of Return:" value={this.state.value}
                    //validate={[required, nonEmpty]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}