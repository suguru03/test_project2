/*
    Componentで記述する内容
    ・実施させたい動作
    ・ConnectによるReducerへの接続
*/

import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {addvalue} from '../actions/actions';

const Counter = ({value, dispatchAddValue}) => {
    return (<View>
      <Text>Hello World!</Text>
    </View>);
};


/*
 ■■■　connect構文　■■■
    connect(mapStateToProps, mapDispatchToProps) (Component)
        【引数】
        mapStateToProps:    Storeが持つstateをPropsへ入れる
        mapDispatchToProps: DispatchをPropsへ入れる  ・・・　 dispatch: Reducerにアクションを通知する関数
        Component:          Reducerへ接続したいComponent
        【戻り値】
        StoreやReducerに接続できる形となったComponent
 */

export default connect(
    state    => ({value: state.value}),
    dispatch => ({dispatchAddValue: amount => dispatch(addValue(amount))})
)(Counter);

/* 省略形
   1. dispatch => bindActionCreators({ addvalue }, dispatch)
   2. { addvalue }
*/
