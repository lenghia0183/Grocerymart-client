import { createSlice } from '@reduxjs/toolkit';
import { getProvinces } from '../apiService/locationService';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    data: {},
    loading: null,
    error: null,
  },

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProvinces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProvinces.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(getProvinces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default locationSlice.reducer;
