import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteCurrentUser as deleteUser } from '../../utils/mainApi';

export const deleteCurrentUser = createAsyncThunk(
	'users/me',
	async (payload, thunkAPI) => {
		try {
			const response = await deleteUser(payload);
			const body = await response.json();
			if (response.ok) {
				return body;
			}
			if (response.status === 400 && body.current_password) {
				const passwordErrors = body.current_password;
				const isArray = Array.isArray(passwordErrors);
				if (isArray) {
					const allItemsAreStrings = passwordErrors.every(
						(i) => typeof i === 'string'
					);
					if (allItemsAreStrings) {
						const concatErrors = passwordErrors.join('\n');
						return thunkAPI.rejectWithValue({
							deleteUserPasswordError: concatErrors,
						});
					}
				}
			}

			return thunkAPI.rejectWithValue({
				errorMessage: 'Некорректный ответ от сервера',
			});
		} catch (error) {
			return thunkAPI.rejectWithValue({
				errorMessage: error.message,
			});
		}
	}
);
