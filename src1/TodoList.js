import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import App from './cssAnimation/App';
import Axios from 'axios';

class TodoList extends Component {
	constructor(props) {
		// console.log('constructor 数据初始化');
		super(props);
		this.state = {
			inputValue: '',
			list: []
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	componentWillMount() {
		// console.log('componentWillMount--组件即将被挂载到页面上前');
	}

	render() {
		// console.log('render--组件渲染时');
		return (
			<Fragment>
				<div>
				<label htmlFor="inputArea">AddTodo：</label>
					<input
						id="inputArea"
						value={this.state.inputValue}
						onChange={this.handleInputChange} 
					/> 
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
				<App />
			</Fragment>
		);
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem
					key={index}
					content={item}
					index={index}
					ItemDelete={this.handleItemDelete} 
				/>
			);
		});
	}

	handleInputChange(e) {
		const value = e.target.value;
		this.setState( () => ({
			inputValue: value
		}));
		
	}

	handleBtnClick() {
		this.setState( (prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
	}

	handleItemDelete(index) {
		this.setState( (prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list};
		});
	}
	
	// 生命周期函数
	componentDidMount() {
		// console.log('componentDidMount--组件被挂载到页面上时');
		Axios.get('/api/todoList').then(res => {
			this.setState( () => ({
				list: [...res.data]
			}));
			// console.log(res);
		}).catch(err => {
			console.log(err);
		});
	}

	componentWillUnmount() {
		// console.log('componentWillUnmount--组件被剔除页面上时');
	}

	shouldComponentUpdate() {
		// console.log('shouldComponentUpdate--组件被更新前');
		return true;
	}
	componentWillUpdate() {
		// console.log('componentWillUpdate--组件被更新前,当componentDidMount返回true时');
	}
	componentDidUpdate() {
		// console.log('componentWillUpdate--组件更新完成时');
	}

}

export default TodoList;