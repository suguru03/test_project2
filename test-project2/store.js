
/*
    Storeファイルはひとつだけとする。
    actionの分岐は、Reducerで行う。
*/

// createStoreでStoreを作成する
import {createStore} from 'redux';

import reducerTmp from './reducers';

let store = createStore(reducerTmp);