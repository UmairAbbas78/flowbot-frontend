import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/axios'; // ✅ Axios instance with baseURL

// Async thunk to POST to /record
export const sendRecord = createAsyncThunk(
  'record/sendRecord',
  async ({ url, prompt, appName }, { rejectWithValue }) => {
    try {
      const response = await API.post('/demo/record', { url, prompt, appName });
      return response.data; // Backend should return result, like a video URL or confirmation
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.response?.data || error.message
      );
    }
  }
);

const recordSlice = createSlice({
  name: 'record',
  initialState: {
    status: 'idle',      // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    result: null,
  },
  reducers: {
    resetRecordState: (state) => {
      state.status = 'idle';
      state.error = null;
      state.result = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendRecord.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(sendRecord.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.result = action.payload;
      })
      .addCase(sendRecord.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetRecordState } = recordSlice.actions;
export default recordSlice.reducer;
