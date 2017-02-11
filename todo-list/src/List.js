import React, {Component} from 'react';
import Item from './Item';
import './List.css';

class List extends Component {
    render() {
        const items = this.props.list.map((item, index) => {
            return <Item key={index} index={index} removeItem={this.props.removeItem} toggleCheck={this.props.toggleCheck} checked={item.checked}>{item.itemName}</Item>
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default List;