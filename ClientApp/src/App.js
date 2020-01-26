import React from "react";
import { Layout } from "./components/Layout";
import { Route } from "react-router";
import RouteBuilder from "./microfrontend/RouteBuilder";
import Home from "./components/Home";
export const App = () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <RouteBuilder />
  </Layout>
);
