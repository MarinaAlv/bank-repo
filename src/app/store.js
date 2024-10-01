import {configureStore} from '@reduxjs/toolkit';
import {transfer} from '../features/transactions/transactionsSlice';
import Transactions from '../features/transactions/Transactions';

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default store;
