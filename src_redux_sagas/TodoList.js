import React, { Component } from 'react';
import store from './store';
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
           <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleAddItem={this.handleAddItem}
            handleDeleteItem={this.handleDeleteItem}
           /> 
        );
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleAddItem() {
        const values = this.state.inputValue;
        const reg = /^[ ]+$/g;
        if(!values || reg.test(values)) { return }
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleDeleteItem(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;