import React from 'react';

class RenewLoanForm extends React.Component {
	render() {
		return (
			<form>
				<input name="returnDate" type="date" label="New Return Date:" />
	        	<button>Submit</button>
	        </form>
	    );
	}
}

class LoanCard extends React.Component {
	render() {
		const type = this.props.loan.type;
		const item = this.props.loan.item;
		const loanee = this.props.loan.loanee;
		const email = this.props.loan.email;
		const phone = this.props.loan.phone;
		const returnDate = this.props.loan.returnDate;
		return (
			<ul>
			 <li>Type: {type}</li>
			 <li>Item: {item}</li>
			 <li>Loanee: {loanee}</li>
			 <li>Email: {email}</li>
			 <li>Phone: {phone}</li>
			 <li>Return Date: {returnDate}</li>
			 <button>Return</button>
			 <button>Renew</button>
			 <RenewLoanForm />
			</ul>
			 );
	}
}

class LoanForm extends React.Component {
	render() {
		return (
			<div>
			   	<button>From Item List</button>
			   	<LoanFormFromItem />
				<button>New Item</button>
				<AddItemLoanForm />
			<form>
	        	<input name="loanee" type="text" label="Loanee:"/>
	           	<input name="email" type="email" label="Email address:" />
	           	<input name="phone" type="tel" label="Phone #:"/>
	           	<input name="returnDate" type="date" label="Date of Return:" />
	           	<button>Submit</button>
	        </form>
	        </div>
	        );
	}
}

//this is where i have to autofill 
class LoanFormFromItem extends React.Component {
	render() {
		return (
			<form>
			   <select>
			   		<option></option>
			   </select>
			</form>
			)
	}
}

class loanList extends React.Component {
	render() {
		const loansList = [];

		this.props.loans.forEach((loan) => {
			loansList.push(
				<LoanCard loan={loan} />
				);
		});
		return (
			<ul>
				<LoanForm} />
				<li>{loansList}</li>
			</ul>
		);
	}
}

class FilterLoansBar extends React.Component {
  render() {
    return (
      <form>
      	<p>Filter by:</p>
        <select>
        	<option>Overdue</option>
        	<option>Closest to Return</option>
        	<option>Type(alphabetical)</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

export default class LoanPage extends React.Component {
  render() {
    return (
      <div>
      	<SearchBar />
        <FilterLoansBar />
        <LoanList loans={this.props.loans} />
      </div>
    );
  }
}

