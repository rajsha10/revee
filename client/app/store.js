import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/auth/authSlice';
import walletReducer from '../src/features/wallet/walletSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    wallet: walletReducer,
  },
});

export default store;
