import { auth, googleProvider } from './config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { updateIdTokenRole } from './redux/Slices/LoginSlice';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const signInWithGoogle = async () => {
  const dispatch = useDispatch();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
    const user = result.user;
    console.log(user);
    const idtoken = await user.getIdToken();
    console.log(idtoken);

    const response = await axios.post(
      'http://localhost:3000/auth/google-login',
      { idtoken }
    );
    console.log(response.data.token);
    const { id, role } = jwtDecode(response.data.token);
    localStorage.setItem('token', response.data.token);
    dispatch(updateIdTokenRole({ id, role, token: response.data.token }));
    window.location.href('/');
  } catch (err) {}
};
