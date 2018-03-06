
/*
    デバッグツール　reactotron用ソース
*/

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron{
    .configure({name: 'test_project2'}); //reactotronに表示するアプリ名
    .configure({host: '192.168.70.10'}); //ローカルIPアドレスの登録
    .use(reactotronRedux());             //Reduxと統合することの宣言
    .connect();                         //おまじない
};