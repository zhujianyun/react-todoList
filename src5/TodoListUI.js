import React, { Fragment,  Component} from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

class TodoListUI extends Component {

    render() {
        return (
            <Fragment>
                <div style={{marginLeft: 20, marginTop: '20px'}}>
                    <Input
                        placeholder="todo something"
                        style={{width: 300, marginRight: 10}}
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                    />
                    <Button onClick={this.props.handleAddItem}>Add</Button>
                </div>
                <List
                style={{width: 300, marginLeft: 20, marginTop: 20}}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (
                    <List.Item
                    onClick={() => {this.props.handleDeleteItem(index)}}
                    >
                        {item}
                    </List.Item>
                    )}
                />
            </Fragment>
        );
    }
}

export default TodoListUI;