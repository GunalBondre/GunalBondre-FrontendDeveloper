import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	loading: false,
	data: [],
	error: '',
};

export const getData = createAsyncThunk('capsules/getCapsules', async () => {
	const response = await fetch('https://api.spacexdata.com/v3/capsules');
	if (response) {
		return response.json();
	}
});

export const capsuleSlice = createSlice({
	name: 'capsule data',
	initialState: initialState,

	extraReducers: {
		[getData.pending]: (state) => {
			state.loading = true;
		},
		[getData.fulfilled]: (state, action) => {
			state.loading = false;
			state.data = action.payload;
		},
		[getData.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default capsuleSlice.reducer;
