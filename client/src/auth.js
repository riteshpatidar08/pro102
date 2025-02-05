import { auth, googleProvider } from './config/firebase';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
export const signInWithGoogle = async () => {
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
    localStorage.setItem('token', response.data.token);
    window.location.href('/');
  } catch (err) {}
};
