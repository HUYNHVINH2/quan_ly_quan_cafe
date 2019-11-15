import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/stores';
import CounterContainer from './redux/containers/CounterContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    </div>
  );
}

export default App;
