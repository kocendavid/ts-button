import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import App from './app/App';

import './index.css';
import './translations';

const client = new ApolloClient({
    uri: 'https://0481-95-102-64-68.ngrok.io', //TODO fill right URL
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
