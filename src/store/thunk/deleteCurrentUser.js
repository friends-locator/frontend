import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteCurrentUser as deleteUser } from '../../utils/mainApi';

export const deleteCurrentUser = createAsyncThunk(
	'/users/me/',
	async (token, thunkAPI) => {
		try {
			const response = await deleteUser(token);
			if (response.ok) {
				return await response.json();
			}
			return Promise.reject(response);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
