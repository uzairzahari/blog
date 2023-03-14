import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index';
import About from './pages/about/index';
import Pricing from './pages/pricing/index';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import { render } from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';

const client = new ApolloClient({
  uri: 'https://graph-api-test.webby.asia/graphql',
  cache: new InMemoryCache(),
})
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/pricing',
    element: <Pricing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <Signup />
  }
]);

const rootElement = document.getElementById("root");
render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>,
  rootElement
);