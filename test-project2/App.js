/*
  表示用のダミーファイル(=トップファイル)

*/

//reactotron用
import './ReactotronConfig';

import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import Counter from './components/Counter';
import store from './store';


export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
         <Counter onClick = {text => console.log("数値: " + "%d",state.value)} />
      </Provider>
    )
  }
}

/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>JavaScriptは難しい!</Text>
      </View>
    );
  }
}
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
