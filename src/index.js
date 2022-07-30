import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Apollo */
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://137.184.208.42/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
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
