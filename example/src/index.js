import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import NavigationContainer from './routes';

export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <SafeAreaView style={[{flex: 1, backgroundColor: '#f5f6fa'}]}>
          <NavigationContainer />
        </SafeAreaView>
      </>
    );
  }
}
