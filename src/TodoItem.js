import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		const { content } = this.props;
		return (
			<li 
				dangerouslySetInnerHTML={{__html: content}}
				onClick={this.handleClick}
			></li>
		);
	}

	handleClick() {
		const { ItemDelete, index } = this.props;
		ItemDelete(index);

		// 上面两行代码等价于下面一行代码
		// this.props.ItemDelete(this.props.index);
	}
	componentWillReceiveProps() {
		console.log('child componentWillReceiveProps--重新被渲染的时候');
	}
}

// 给props指定类型
TodoItem.propTypes = {
	// content 定义类型为string或number
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	ItemDelete: PropTypes.func,
	index: PropTypes.number,
	demo: PropTypes.string.isRequired 
	// demo并没有从父组件中传过来，但这里定义成了必传项
	// 这样程序会报warning，解决方法，在下面defaultProps给个默认值也行

}

// 给props指定默认值
TodoItem.defaultProps = {
	demo: 'this is a demo'
}
export default TodoItem;