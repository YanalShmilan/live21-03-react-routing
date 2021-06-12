import { AppWrapper } from './components/styles';
import Home from './components/Home';
import InstructorProfile from './components/InstructorProfile';
import NotFound from './components/NotFound';
import { useState } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

const App = ({ instructors }) => {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/">
          <Home instructors={instructors} />
        </Route>

        {/* <Route path="/instructors/hamza">
          <InstructorProfile instructors={instructors} instructorSlug="hamza" />
        </Route>

        <Route path="/instructors/laila">
          <InstructorProfile instructors={instructors} instructorSlug="laila" />
        </Route> */}
        <Route path="/instructors/:slug">
          <InstructorProfile instructors={instructors} />
        </Route>
        <Route path="/users/:slug">
          <Redirect to="/404" />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default App;
