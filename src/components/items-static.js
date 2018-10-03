/*reactDOM.render(
	<ItemPage itemLoan={ITEMLOAN} />,
	  document.getElementById('root')
	)
*/
const ITEMLOAN = [
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
  {type: 'tool', item: 'Wrench'},
];


class ItemLoanCard extends React.Component {
	render() {
		const type = this.props.item.type;
		const item = this.props.item.item;
		return (
			<ul>
			 <li>Type: {type}</li>
			 <li>Item: {item}</li>
			 <button>Edit</button>
			 <ItemCardEditForm />
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
			<form>
	        	<input name="loanee" type="text" label="Partner:"/>
	           	<input name="email" type="email" label="Email address:" />
	           	<input name="phone" type="tel" label="Phone #:"/>
	           	<input name="returnDate" type="date" label="Date of Return:" />
	           	<button>Submit</button>
	        </form>
	}
}

class ItemCardEditForm extends React.Component {
	render() {
		//value will have to be changed using props. not sure how
			<form>
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
				<li>{itemsList}</li>
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

class ItemPage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <FilterBar />
        <ItemLoanList itemLoan={this.props.itemLoan} />
      </div>
      <div>
        <SearchBar />
        <FilterBar />
        <ItemBorrowList borrows={this.props.itemBorrow} />
      </div>
    );
  }
}
