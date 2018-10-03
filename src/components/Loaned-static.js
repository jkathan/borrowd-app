/*reactDOM.render(
	<LoanListPage loans={LOANS} />,
	  document.getElementById('root')
	)

const LOANS = [
  {type: 'tool', item: 'Wrench', loanee: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', loanee: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
];

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
		const type = this.props.type;
		const item = this.props.item;
		const loanee = this.props.loanee;
		const email = this.props.email;
		const phone = this.props.phone;
		const returnDate = this.props.returnDate;
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
				//willbe added with state
			   	<button>From Item List</button>
			   	<LoanFormFromItem />
				<button>New Item</button>
				//from Item-static
				<AddItemForm />
				//should this be its own component?
			<form>
	        	<input name="loanee" type="text" label="Loanee:"/>
	           	<input name="email" type="email" label="Email address:" />
	           	<input name="phone" type="tel" label="Phone #:"/>
	           	<input name="returnDate" type="date" label="Date of Return:" />
	           	<button>Submit</button>
	        </form>
	        );
	}
}


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

class loanList() React.Component {
	render() {
		const loansList = [];

		this.props.loans.forEach((loan) => {
			loansList.push(
				<LoanCard loan={loan} />
				);
		});
		return (
			<ul>
				<li>{LoanForm}</li>
				<li>{loansList}</li>
			</ul>
		);
	}
}

class FilterBar extends React.Component {
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

class LoanPage extends React.Component {
  render() {
    return (
      <div>
      	<SearchBar />
        <FilterBar />
        <LoanList loans={this.props.loans} />
      </div>
    );
  }
}
*/
