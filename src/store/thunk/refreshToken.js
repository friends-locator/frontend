import { createAsyncThunk } from '@reduxjs/toolkit';
import { refreshToken as refresh } from '../../untils/mianApi';

export const refreshToken = createAsyncThunk(
	'jwt/refresh',
	async (payload, thunkAPI) => {
		try {
			const response = await refresh(payload);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(JSON.stringify(data));
			}
			localStorage.setItem('access_token', data.access);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
