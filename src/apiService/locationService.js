import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProvinces = createAsyncThunk('getProvinces', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://esgoo.net/api-tinhthanh/1/0.htm');
    return response.data;
  } catch (error) {
    return rejectWithValue({ ...error });
  }
});

export const getDistricts = createAsyncThunk('getDistricts', async ({ idProvince }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${idProvince}.htm`);
    return response.data;
  } catch (error) {
    return rejectWithValue({ ...error });
  }
});

export const getWards = createAsyncThunk('getWards', async ({ idDistrict }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://esgoo.net/api-tinhthanh/3/${idDistrict}.htm`);
    return response.data;
  } catch (error) {
    return rejectWithValue({ ...error });
  }
});
