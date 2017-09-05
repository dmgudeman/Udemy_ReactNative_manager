import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDnuMg-uVZFriRBjlrdIZQqB02GvzjYFvg',
      authDomain: 'manager-6caa5.firebaseapp.com',
      databaseURL: 'https://manager-6caa5.firebaseio.com',
      projectId: 'manager-6caa5',
      storageBucket: '',
      messagingSenderId: '1072852811059'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
