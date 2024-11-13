import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/redux/store'
import Login from './components/Login';
import Profile from './components/Profile';
//import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}  />
          <Route  element={ <PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>} />
          </Route>        
          </Routes>
      </Router>
    </Provider>
  );

};

export default App;
/*<PrivateRoute path="/profile" component={Profile} />
<PrivateRoute path="/todos" component={TodoList} /> */