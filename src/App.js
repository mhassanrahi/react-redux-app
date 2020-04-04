import React from 'react';
import {Provider } from 'react-redux';

import Cake from './components/cake/cake.component';
import IceCream from './components/ice-cream/ice-cream.component'
import Store from './redux/store';

import './App.css'
import CakeContainer from './components/cake/cake-container.component';

function App() {
  return (
    <Provider store={Store}>
     <div className="App">
      {/* <Cake /> */}
      <IceCream />
      <CakeContainer />
    </div>
    </Provider>
   
  );
}

export default App;
