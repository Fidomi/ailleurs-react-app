import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import GlobalStyle from "./utils/styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    {/* <Router>
      <Route exact path="/" component={Home} />
    </Router> */}
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
