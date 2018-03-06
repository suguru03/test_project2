/*
  表示用のダミーファイル(=トップファイル)

*/

//reactotron用
import './ReactotronConfig';

import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Counter from './components/Counter';


export default class App extends Component{
  render(){
    return(
      <div>
         <Counter onClick = {text => console.log("数値: " + "%d",state.value)} />
      </div>
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
