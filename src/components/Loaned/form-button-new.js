/*class FormButtonNew extends React.Component {
	//will need ajax call to populate select
	constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value();
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

    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#"></a>
                </div>
            );
        }
//probs wont work
        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                	<FormButtonNewForm />
            </form>
        );
    }
}
*/