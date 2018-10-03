/*reactDOM.render(
	<LoanListPage borrows={BORROWS} />,
	  document.getElementById('root')
	)

const BORROWS = 
  {type: 'tool', item: 'Wrench', Borrowee: 'Bob', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'john', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'bill', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'ian', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'janet', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
  {type: 'tool', item: 'Wrench', Borrowee: 'greta', email: 'fake@email.com', phone: '301-555-555', returnDate: '12/8/19'},
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

class BorrowCard extends React.Component {
	render() {
		const type = this.props.type;
		const item = this.props.item;
		const Borrowee = this.props.Borrowee;
		const email = this.props.email;
		const phone = this.props.phone;
		const returnDate = this.props.returnDate;
		return (
			<ul>
			 <li>Type: {type}</li>
			 <li>Item: {item}</li>
			 <li>Borrowee: {Borrowee}</li>
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

class BorrowForm extends React.Component {
	render() {
		return (
				//willbe added with state
				<button>New Item</button>
				//from Item-static
				<AddItemForm />
			<form>
	           <input name="Borrowee" type="text" label="Borrowee:"/>
	           <input name="email" type="email" label="Email address:" />
	           <input name="phone" type="tel" label="Phone #:"/>
	           <input name="returnDate" type="date" label="Date of Return:" />
	           <button>Submit</button>
	        </form>
	        );
	}
}

class BorrowList() React.Component {
	render() {
		const borrowsList = [];

		this.props.borrows.forEach((borrow) => {
			borrowsList.push(
				<BorrowCard borrow={borrow} />
				);
		});
		return (
			<ul>
				<BorrowForm />
				<li>{borrowsList}</li>
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

class BorrowPage extends React.Component {
  render() {
    return (
      <div>
      	<SearchBar />
        <FilterBar />
        <BorrowList borrows={this.props.borrows} />
      </div>
    );
  }
}
*/