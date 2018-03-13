
/*
    Storeファイルはひとつだけとする。
    actionの分岐は、Reducerで行う。
*/

// reactotron用
import Reactotron from 'reactotron-react-native';

// createStoreでStoreを作成する
import Thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import reducerTmp from './reducers/reducer_tmp';

export default Reactotron.createStore(reducerTmp, compose(applyMiddleware(Thunk))); //reactotronのcreateStore
//let store = createStore(reducerTmp); //普通のcreateStore
