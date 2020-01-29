import * as React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

const Home = () => (
  <div>
        <h1> Galactic Inventory Management </h1>
        <Login />
  </div>
);

export default connect()(Home);
