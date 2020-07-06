import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Router from './Router';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
