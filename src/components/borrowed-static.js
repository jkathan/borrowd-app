import React from 'react';

class RenewLoanForm extends React.Component {
	render() {
		return (
			<form>
				<label>New Return Date:</label>
				<input name="returnDate" type="date" />
	        	<button>Submit</button>
	        </form>
	    );
	}
}

class BorrowCard extends React.Component {
	render() {
		const type = this.props.borrow.type;
		const item = this.props.borrow.item;
		const borrowee = this.props.borrow.borrowee;
		const email = this.props.borrow.email;
		const phone = this.props.borrow.phone;
		const returnDate = this.props.borrow.returnDate;
		return (
			<ul>
			 <li>Type: {type} </li>
			 <li>Item: {item} </li>
			 <li>Borrowee: {Borrowee} </li>
			 <li>Email: {email} </li>
			 <li>Phone: {phone} </li>
			 <li>Return Date: {returnDate} </li>
			 <button>Return</button>
			 <button>Renew</button>
			 <RenewLoanForm />
			</ul>
			 );
	}
}
					//willbe added with state					//from Item-static
class BorrowForm extends React.Component {
	render() {
		return (
			<div>
					<button>From Item List</button>
				   	<BorrowFormFromItem />
					<button>New Item</button>
					<AddItemBorrowForm />
				<form>
		           <input name="Borrowee" type="text" label="Borrowee:"/>
		           <input name="email" type="email" label="Email address:" />
		           <input name="phone" type="tel" label="Phone #:"/>
		           <input name="returnDate" type="date" label="Date of Return:" />
		           <button>Submit</button>
		        </form>
		    </div>
		);
	}
}

class AddItemBorrowForm extends React.Component {
	render() {
		return (
			<div>	
				<form>
					<label>Item Type:</label>
					<select> 
						<option>Tool</option>
						<option>Clothing</option>
						<option>Money</option>
						<option>Electronic</option>
						<option>Misc.</option>
					</select>
					<label>Item:</label>
					<input name="itemName" type="text" label="Item:"/>
					<label>Owner:</label>
					<input name="owner" type="text" label="Owner:"/>			
		           <button>Submit</button>
		        </form>
		    </div>
	  	);
	}
}


class BorrowFormFromItem extends React.Component {
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


class BorrowList extends React.Component {
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
//may need to be more specific
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
//Not Need but maybe needed
class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

export default class BorrowPage extends React.Component {
  render() {
    return (
      <div>
      	<SearchBar />
        <FilterLoansBar />
        <BorrowList borrows={this.props.borrows} />
      </div>
    );
  }
}
