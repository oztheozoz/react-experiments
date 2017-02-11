import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
    // constructor(props) {
    //     super(props);
    //     this.toggleCheck = this.toggleCheck.bind(this);
    // }
    render() {
        return (
            <li>
                <input className="format" type="checkbox" checked={this.props.checked} onChange={this.props.toggleCheck.bind(null, this.props.index)}/>
                {' '}
                <label className="format">{this.props.children}</label>
                {' '}
                <button className="format" type="button" onClick={this.props.removeItem.bind(null, this.props.index)}>Delete</button>
            </li>
        );
    }
}

export default Item;