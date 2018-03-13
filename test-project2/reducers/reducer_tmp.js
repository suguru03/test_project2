
/*
    ・初期状態はReducerのデフォルト引数で定義する
    ・状態変更は、渡されたstateそのものを書き換えず、新しいactionを合成する
*/


import { combineReducers } from 'redux';

import { ADD_VALUE } from '../actions/actions.js';

// 1つ目のReducer
const calculationReducer = (state = {value:0},action) => {
    switch (action.type) {
        case ADD_VALUE:
            return {
                ...state,
                value: state.value + action.payload
            }
        /*
        case SUB_VALUE:
            return {
                ...state,
                value: state.value - action.payload
            }
        */
        default:
            return state;
    }
}

// 2つ目のReducer

// combineReducersでReducerをまとめる
export default combineReducers({
    calculation: calculationReducer
});
