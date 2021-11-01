import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Error from './pages/Error';
import GlobalStyle from './utils/styles/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Maps from './pages/Maps';
import React from 'react';
import ReactDOM from 'react-dom';
// Import { ReactQueryDevtools } from 'react-query/devtools';
import Survey from './pages/Survey';
import ThematicMap from './pages/ThematicMap';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cartes" component={Maps} />
                    <Route path="/cartes/:theme" component={ThematicMap} />
                    <Route path="/ma-destination" component={Survey} />
                    <Route component={Error} />
                    <Home />
                </Switch>
            </BrowserRouter>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
