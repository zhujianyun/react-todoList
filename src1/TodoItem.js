import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		// ????????
		// 这个子组件创建的时候不执行这个，只有当里面的内容发生改变的时候才会改变
		// 在这里，子组件是循环的，每次循环的时候本条数据并没有发生改变，所以走return false
		// 如果重新渲染的时候其中的某项（第n项）值发生改变了，那么重新循环渲染的时候，第n项走return true
		// 这样就会就会增加性能：父组件渲染，子组件也会跟着渲染，但有时候并不需要每次都要重新渲染
		// 所以这里用shouldComponentUpdate根据需求是否重新更新渲染
	   if(nextProps.content !== this.props.content) {
		   return true;
	   }else {
		   return false;
	   }

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
		// console.log('child componentWillReceiveProps--重新被渲染的时候');
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