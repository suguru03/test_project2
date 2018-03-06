
/*
　■■■　actionのオブジェクト構造　■■■
  {
    type: FOO_TYPE,      // must
    payload: {object},   // optional
    meta: {object},      // optional
    error: false, true, undefined, null, ... // optional
  }

  */

  export const ADD_VALUE = 'ADD_VALUE';

  // addvalue = (amount) => ({ ~ });の省略系でも可
  export const addvalue = (amount) => {return{ type: ADD_VALUE, payload: amount }};
  