import React, {  Fragment  } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{marginLeft: 20, marginTop: 20}}>
                <Input
                    placeholder="todo something" 
                    style={{width: 300, marginRight: 10}}
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                    onPressEnter={props.handleAddItem}
                />
                <Button type="primary" onClick={props.handleAddItem}>Add</Button>
            </div>
            <List
                style={{width: 300, marginLeft: 20, marginTop: 20}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item
                    onClick={ () => { props.handleDeleteItem(index) }}
                    >
                        {item}
                    </List.Item>
                    )}
            />
        </Fragment>
    );
}
export default TodoListUI;