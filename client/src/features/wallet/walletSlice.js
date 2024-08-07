import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  accounts: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletConnection: (state, action) => {
      state.isConnected = action.payload.isConnected;
      state.accounts = action.payload.accounts;
    },
  },
});

export const { setWalletConnection } = walletSlice.actions;

export default walletSlice.reducer;

// Selector
export const selectWallet = (state) => state.wallet;
