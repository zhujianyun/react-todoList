import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);

    }
    render() {
        return (
            <div style={{marginLeft: 20, marginTop: 20}}>
                <div>
                    <Input 
                        placeholder="todo something" 
                        style={{width: 300, marginRight: '10px'}}
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}

                    />
                    <Button type="primary" onClick={this.handleBtnClick}>Add</Button>
                </div>
                <div style={{width: 300, marginTop: '10px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={this.handleItemDelete.bind(this, index)}
                            >
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
               
            </div>
        )
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleBtnClick() {
        let values = this.state.inputValue;
        let reg = /^[ ]+$/g;
        if(!values || reg.test(values)) { return };
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);

    }
}

export default TodoList;