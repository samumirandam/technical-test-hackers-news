import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { configureStore as configureReduxStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import reducer from '@reducers';

const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);

const AllTheProviders = ({ children }) => {
  const store = configureReduxStore({
    reducer,
  });
  const setupStore = { ...store.getState(), ...children.props };
  const compomentStore = mockStore(setupStore);
  return (
    <Provider store={compomentStore}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
