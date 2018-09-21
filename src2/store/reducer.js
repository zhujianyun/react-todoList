import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '',
    list: ['吃饭', '睡觉', '打豆豆']
}
// reducer可以接收state，但绝不能修改state
// 所以用JSON.parse(JSON.stringify(state))做一次深拷贝
// 纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
// 非纯函数例如：new Date() setTimeout setInterval ajax请求.....
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}