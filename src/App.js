import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/Routes/Routes';
import { Home, Browse, SignIn, SignUp } from './pages/Page';

const App = () => (
  <>
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
    </Router>
  </>
);

export default App;
