/*import React from 'react';

import './add-form.css';

export default class RenewBookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
//not sure how to build static app without api
    onSubmit(event) {
        event.preventDefault();
        //edit to api, 
        const date = this.dateInput.value();
        if (date && this.props.onAdd) {
            this.props.onAdd(this.dateInput.value);
        }
        //reorder date here
        this.dateInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                    <a href="#">Submit</a>
                </div>
            );
        }

        return (
            <form className="card add-form" onSubmit={this.onSubmit}>
                <input type="date" ref={input => this.dateInput = input} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
*/