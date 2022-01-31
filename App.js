import React from 'react';

import ScreenNavigationContainer from './components/ScreenNavigationContainer';

import { Provider } from 'react-redux'
import store from './Redux/redux';

const App = () => {
  return (
    <Provider store={store}>
     <ScreenNavigationContainer/>
    </Provider>
  );
};



export default App;
