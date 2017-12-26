import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from './middleware/promiseMiddleware'

/* store 就是把reducer action 联系到一起的对象。store 有以下职责：

维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 触发reducers方法更新 state；
通过subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。


redux的数据流 参看 http://cn.redux.js.org/docs/basics/DataFlow.html
1 调用store.dispatch(action)提交action。
2 redux store调用传入的reducer函数。把当前的state和action传进去。
3 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
4 Redux store 保存了根 reducer 返回的完整 state 树。

*/
let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));
if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}
export default store;