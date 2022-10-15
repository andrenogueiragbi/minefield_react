import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcome}>{params.getColumnsAmount()} x {params.getRowsAmount()}</Text>
      <Field/>
      <Field opened/>
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={6}/>
      </View>
    )
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin:10

  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }

});


