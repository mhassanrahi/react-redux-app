import React from 'react';
import {Provider } from 'react-redux';

import Cake from './components/cake/cake.component';
import Store from './redux/store';

function App() {
  return (
    <Provider store={Store}>
     <div className="App">
      <Cake />
    </div>
    </Provider>
   
  );
}

export default App;
