import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppNavigator from './components/nganxep'
import Home from './components/home';
export default class HelloWorldApp extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
