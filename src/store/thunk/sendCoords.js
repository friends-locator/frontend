import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateCoordinates } from '../../untils/mianApi';

export const sendCoords = createAsyncThunk(
	'location/send',
	async (payload, thunkAPI) => {
		try {
			const response = await updateCoordinates(payload);
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
