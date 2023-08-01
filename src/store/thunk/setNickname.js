import { createAsyncThunk } from '@reduxjs/toolkit';
import { setNickname as changeNickname } from '../../utils/mainApi';

export const setNickname = createAsyncThunk(
	'user/me/setNickname',
	async (payload, thunkAPI) => {
		try {
			const response = await changeNickname(payload);
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
