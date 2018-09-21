import { CHANGE_INPUT_VALUE, ADD_TOTO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
const defaultState = {
    inputValue: '',
    list: ['吃饭', '睡觉', '打豆豆']
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TOTO_ITEM) {
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type === INIT_LIST_ACTION) {
        newState.list = action.data;
        return newState;
    }
    return state;
}