import React, {Component} from 'react';
import AddItem from './AddItem';
import List from './List';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {list: this.getList()};
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
        this.update = this.update.bind(this);
    }

    getList() {
        var toDoList = JSON.parse(window.localStorage.getItem('toDoList'));

        if (!toDoList) {
            toDoList = [];
        }

        return toDoList;
    }

    addItem(itemName) {
        this.state.list.push({itemName, checked: false});
        this.update();
    }

    toggleCheck(index) {
        const item = this.state.list[index];
        item.checked = !item.checked;
        this.update();
    }

    removeItem(index) {
        this.state.list.splice(index, 1);
        this.update();
    }

    update() {
        this.setState({list: this.state.list});
        window.localStorage.setItem('toDoList', JSON.stringify(this.state.list));
    }

    componentDidMount() {
        window.addEventListener('storage', () => {
            this.setState({list: this.getList()});
        });
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <AddItem addItem={this.addItem}/>
                <List list={this.state.list} removeItem={this.removeItem} toggleCheck={this.toggleCheck}/>
            </div>
        );
    }
}

export default App;
