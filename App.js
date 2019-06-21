/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  _onPressButton() {
    Alert.alert('Bienvenido a Shared Music!')
  }
  _onLongPressButton() {
    Alert.alert('Adios!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Shared Music by NyxLeven!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={require('./img/andre.jpg')} style={{width: 293, height: 510}}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Acceder"
            color="#841584"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onLongPressButton}
            title="Salir"
            color="red"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFD6A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    margin: 20
  }
});
