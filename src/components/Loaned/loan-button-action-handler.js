
class FormButtons extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

//will edit this
    onSubmitNewButton(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

//will this work? Does it need two?
    render() {
        if (!this.state.editing) {
            return (
            	//can this be used to toggle?
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">From Item List</a>
                </div>
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">New Item</a>
                </div>
            );
        }

        return (
        	//might need to have action handler here
        	<FormButtonFromList/>
            <form className="card add-form" onSubmitNewButton={(e) => this.onSubmitNewButton(e)}>
                <label>Type:</label>
                <input type="text" ref={input => this.textInput = input} validate={[required, nonEmpty]}/>
                <label>Item:</label>
                <input type="text" ref={input => this.textInput = input} validate={[required, nonEmpty]}/>
                
            </form>
        );
    }
}
