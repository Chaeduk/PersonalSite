import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import PostContainer from './containers/PostContainer';
import Contact from './components/Contact/Contact';
import Study from './components/Study/Study';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import Write from './components/Write/Write';
import Content from './components/Content/Content';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/post" component={PostContainer} />
        <Route path="/contact" component={Contact} />
        <Route path="/study" component={Study} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/write" component={Write} />
        <Route path="/content" component={Content} />
      </Switch>
    </Layout>
  );
};

export default App;
