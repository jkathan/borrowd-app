import React from 'react';


/*reactDOM.render(
	<ItemPage itemLoan={ITEMLOAN} />,
	  document.getElementById('root')
	)
*/

class ItemLoanCard extends React.Component {
	render() {
		const type = this.props.item.type;
		const item = this.props.item.item;
		return (
			<ul>
			 <li>Type: {type}</li>
			 <li>Item: {item}</li>
			 <button>Edit</button>
			 <ItemCardEditForm item={item}/>
			 <button>Checkout</button>
			 <ItemCheckout />
			 <button>Delete</button>
			</ul>
			 );
	}
}

//if own component in loan, not necessary here
class ItemCheckout extends React.Component {
	render() {
		return (
			<form>
				<label>Partner:</label>
	        	<input name="loanee" type="text" label="Partner:"/>
	           	<label>Email:</label>
	           	<input name="email" type="email" label="Email address:" />
	           	<label>Phone:</label>
	           	<input name="phone" type="tel" label="Phone #:"/>
	           	<label>Return Date:</label>
	           	<input name="returnDate" type="date" label="Date of Return:" />
	           	<button>Submit</button>
	        </form>
	        );
	}
}

class ItemCardEditForm extends React.Component {
	render() {
		return (
		
		//value will have to be changed using props. not sure how
			<form>
				<label>Edit Item Type:</label>
				<select>
					<option> -- </option> 
					<option>Tool</option>
					<option>Clothing</option>
					<option>Money</option>
					<option>Electronic</option>
					<option>Misc.</option>
				</select>
				<input name="itemName" type="text" label="Item:" value={this.props.item}/>			
			</form>
			);
		}
	}

class AddItemLoanForm extends React.Component {
	render() {
		return (
			<div>
				<button>Add Item</button>
				<form>
					<input name="itemType" type="text" label="Item Type:"/>
					<input name="itemName" type="text" label="Item:"/>			
		           <button>Submit</button>
		        </form>
		     </div>
	        );
	}
}

class ItemLoanList extends React.Component {
	render() {
		const itemsLoanList = [];

		this.props.itemLoan.forEach((itemLoan) => {
			itemsLoanList.push(
				<ItemLoanCard item={itemLoan} />
				);
		});
		return (
			<ul>
				<AddItemLoanForm />
				<li>{itemsLoanList}</li>
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
        	<option>Type(alphabetical)</option>
        	<option>Due Date (closest)</option>
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

class ItemLoanCard extends React.Component {
	render() {
		const owner = this.props.borrowItem.owner
		const type = this.props.borrowItem.type;
		const item = this.props.borrowItem.item;
		return (
			<ul>
				 <li>Owner: {owner}</li>	
				 <li>Type: {type}</li>
				 <li>Item: {item}</li>
				 <button>Edit</button>
				 <ItemCardEditBorrowForm item={item}/>
				 <button>Checkout</button>
				 <ItemCheckout />
				 <button>Delete</button>
			</ul>
			 );
	}
}

class ItemCardEditBorrowForm extends React.Component {
	render() {
		//value will have to be changed using props. not sure how
			<form>
				<input name="owner" type="text" label="Owner:" value={owner}/>
				<select> 
					<option>Tool</option>
					<option>Clothing</option>
					<option>Money</option>
					<option>Electronic</option>
					<option>Misc.</option>
				</select>
				<input name="itemName" type="text" label="Item:" value={this.props.item}/>			
			</form>
		}
	}

class ItemCardEditBorrowForm extends React.Component {
	render() {
		//value will have to be changed using props. not sure how
		//this is where i can add inputs in dependent on the type. on the <select>
			<form>
				<input name="owner" type="text" label="Owner:" value={owner}/>
				<select> 
					<option>Tool</option>
					<option>Clothing</option>
					<option>Money</option>
					<option>Electronic</option>
					<option>Misc.</option>
				</select>
				<input name="itemName" type="text" label="Item:" value={item}/>			
			</form>
		}
	}

class AddItemBorrowForm extends React.Component {
	render() {
		return (
		<div>	
			<button>Add Item</button>
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

class ItemBorrowList() React.Component {
	render() {
		const itemsBorrowList = [];

		this.props.itemBorrow.forEach((itemBorrow) => {
			itemsBorrowList.push(
				<ItemLoanCard borrowItem={borrowItem} />
				);
		});
		return (
			<ul>
				<AddItemBorrowForm/>
				<li>{itemsBorrowList}</li>
			</ul>
		);
	}
}








export default class ItemPage extends React.Component {
  render() {
    return (
     <div>
      <div>
      	<h1>Your Items</h1>
        <SearchBar />
        <FilterBar />
        <ItemLoanList itemLoan={this.props.itemLoan} />
      </div>
      <div>
      	<h1>Past Borrowed Items</h1>
        <SearchBar />
        <FilterBar />
        <ItemBorrowList borrows={this.props.itemBorrow} />
      </div>
     </div>
    );
  }
}
/*
