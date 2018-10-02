import React from 'react';

class LoanCard extends React.Component {

		return (
	        <div className="card">
	            {props.loanee}
	            {props.email}
	            {props.phone}
	            {props.returnDate}
	            //<button onClick={() => props.removeCard(props.id)}>Return</button>
	            //<button onClick={() => }>Renew</button>
	        </div>
		}
	}

Card.defaultProps = {
    loanee: '',
    email: '',
    phone: '',
    returnDate: ''
};
