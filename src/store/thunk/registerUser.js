import { createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../untils/mianApi';

export const registerUser = createAsyncThunk(
	'user/register',
	async (payload, thunkAPI) => {
		// const navigate = useNavigate();
		try {
			const response = await register(payload);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(JSON.stringify(data));
			}
			// @TODO login
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue({
				errorMessage: error.message,
			});
		}
	}
);
