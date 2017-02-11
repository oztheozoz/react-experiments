import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        const itemName = this.toDoInput.value;
        if(itemName.trim() !== "") {
            this.props.addItem(this.toDoInput.value);
            this.toDoInput.value = "";
        }
    }

    componentDidMount() {
        this.toDoInput.addEventListener("keyup", e => {
            if(e.which === 13) {
                this.addItem();
            }
        });
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.toDoInput = input} placeholder="Add To Do..." />
                {' '}
                <button type="button" onClick={this.addItem}>Add</button>
            </div>
        );
    }
}

export default AddItem;