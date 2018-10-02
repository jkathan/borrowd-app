import React from 'react';

export default function LoanCard(props) {

		return (
	        <div className="card">
	            {props.loanee}
	            {props.email}
	            {props.phone}
	            {props.returnDate}
	            <button onClick={() => props.removeCard(props.id)}>Return</button>
	            <button onClick={() => }>Renew</button>
	        </div>
		}
	}