import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './redux';
import { HomePage } from './pages';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
