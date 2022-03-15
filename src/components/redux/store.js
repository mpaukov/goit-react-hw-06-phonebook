import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
