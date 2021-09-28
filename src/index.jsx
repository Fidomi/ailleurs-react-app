import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import MyDestination from "./pages/MyDestination";
import Header from "./components/Header";
import GlobalStyle from "./utils/styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/maps" component={Maps} />
        <Route path="/mydestination" component={MyDestination} />
        {/* <Route component={Error} /> */}
        <Home />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
