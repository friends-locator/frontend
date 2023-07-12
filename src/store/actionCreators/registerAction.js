import { register } from '../../untils/mianApi';
import { signUp, signUpSuccess } from '../slices/user';

export const registerAction = async (dispatch) => {
	try {
		dispatch(signUp);
		const res = register();
		dispatch(signUpSuccess(res.data));
	} catch (error) {
		console.log(error);
		// dispatch(signUpFailed(error.message));
	}
};
