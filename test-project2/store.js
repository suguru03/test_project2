
/*
    Storeファイルはひとつだけとする。
    actionの分岐は、Reducerで行う。
*/

// reactotron用
import Reactotron from 'reactotron-react-native';

// createStoreでStoreを作成する
import {createStore} from 'redux';
import reducerTmp from './reducers';

export default Reactotron.createStore(reducerTmp); //reactotronのcreateStore
//let store = createStore(reducerTmp); //普通のcreateStore