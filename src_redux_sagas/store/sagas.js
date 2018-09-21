import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators'

function* getInitList() {
    try{
        const res = yield axios.get('/todoList.json');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log('todoList.json 网络请求失败');
    }
    
}

// generator函数
function* mySaga() {
    //  yield takeEvery('action的类型', '执行的函数');
     yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default mySaga;