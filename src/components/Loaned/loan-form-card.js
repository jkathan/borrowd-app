//assuming this will need action handlers
//maybe related to onSubmit of AddLoanForm

class LoanFormCard extends React.Component {
  render() {
    return (
      <div>
      	<h2>Add Loan</h2>
      	{FormButtons}
      	{AddLoanForm}
      </div>
    );
  }
}