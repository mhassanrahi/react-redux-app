import React from 'react';
import {Provider } from 'react-redux';

import Cake from './components/cake/cake.component';
import IceCream from './components/ice-cream/ice-cream.component'
import Store from './redux/store';

import './App.css'

function App() {
  return (
    <Provider store={Store}>
     <div className="App">
      <Cake />
      <IceCream />
    </div>
    </Provider>
   
  );
}

export default App;
