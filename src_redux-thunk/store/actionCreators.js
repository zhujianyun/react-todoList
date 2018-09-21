import axios from 'axios';
import { INIT_LIST_ACTION, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});


// 用了redux-thunk中间件，action就不仅仅可以是个对象
// 还可以是个函数
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/todoList.json').then( res => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        }).catch( err => {
            console.log(err);
        });
    }
}

