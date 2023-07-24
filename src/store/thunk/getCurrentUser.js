import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser as getUser } from '../../untils/mainApi';

export const getCurrentUser = createAsyncThunk(
	'user/me',
	async (payload, thunkAPI) => {
		try {
			const response = await getUser(payload);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(JSON.stringify(data));
			}

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
