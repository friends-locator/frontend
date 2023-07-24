import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../utils/mainApi';

export const loginUser = createAsyncThunk(
	'jwt/create',
	async (payload, thunkAPI) => {
		try {
			const response = await login(payload);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(JSON.stringify(data));
			}
			localStorage.setItem('access_token', data.access);
			localStorage.setItem('refresh_token', data.refresh);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
