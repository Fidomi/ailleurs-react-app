import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './pages/Error';
import GlobalStyle from './utils/styles/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Maps from './pages/Maps';
import MyDestination from './pages/MyDestination';
import React from 'react';
import ReactDOM from 'react-dom';
import ThematicMap from './pages/ThematicMap';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cartes" component={Maps} />
                <Route path="/cartes/:theme" component={ThematicMap} />
                <Route path="/ma-destination" component={MyDestination} />
                <Route component={Error} />
                <Home />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
