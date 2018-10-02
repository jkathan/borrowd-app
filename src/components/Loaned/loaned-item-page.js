export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: []
        };
    }
    //sort by action
    sortBy() {
        //lots of sort functions depending on filter
    }

    addList(title) {
        this.setState({
            lists: [...this.state.lists, {title}]
        });
    }

    render() {
        const lists = this.state.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List {...list} />
            </li>
        ));

        return (
            <div className="board">
                <p>Filter by:</p>
                <select //on selection sort by
                >
                    <option>Nearest to Overdue</option>
                    <option>Newest</option>
                </select>
                <
                <h2>{this.props.title}</h2>
                <ul className="lists">
                    <li className="add-list-wrapper">
                        <LoanFormCard
                        //update needs to be a button similar to other list item
                            type="list"
                            onAdd={title => this.addList(title)}
                        />
                    </li>
                    {lists}
                </ul>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};