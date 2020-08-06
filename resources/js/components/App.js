import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';

function App() {
    return (
      <BrowserRouter>
      <Route exact path='/' component={UsersList} />
      </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
