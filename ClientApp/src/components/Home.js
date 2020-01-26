import React from "react";
import { connect } from "react-redux";

const Home = () => (
  <div>
    <h1>Hello, developer!</h1>
    <p>This is a shell app which hosts Micro frontend apps.</p>
    <p>Start navigating Apps from left nav</p>
  </div>
);

export default connect()(Home);
