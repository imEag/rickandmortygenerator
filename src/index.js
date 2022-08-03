import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Apollo */
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

/* Styled components */
import styled, { createGlobalStyle } from "styled-components";

const client = new ApolloClient({
  uri: 'https://rickandmortygenerator.site/graphql',
  cache: new InMemoryCache(),
});

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: 'Raleway', sans-serif;
        font-size: 2rem;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-size: 2rem;
    }

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
);

/* client
  .query({
    query: gql`
    query characters {
      characters(page: 1) {
        info {
          next,
          prev,
          count,
          pages
        },
        results {
          id
          name
          status
          location {
            name
            dimension
          }
          origin {
            name
            dimension
          }
        }
      }
    }
    
    `,
  })
  .then((result) => console.log(result)); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
