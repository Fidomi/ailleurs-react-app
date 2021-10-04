import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./utils/styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import MyDestination from "./pages/MyDestination";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/maps" component={Maps} />
                <Route path="/mydestination" component={MyDestination} />
                {/* <Route component={Error} /> */}
                <Home />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
