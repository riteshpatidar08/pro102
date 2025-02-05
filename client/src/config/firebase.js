// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAJZhv6MSTjWurrnf3nJ12fPcsGixn9yH0',
  authDomain: 'test-1bf72.firebaseapp.com',
  databaseURL:
    'https://test-1bf72-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'test-1bf72',
  storageBucket: 'test-1bf72.firebasestorage.app',
  messagingSenderId: '305469578277',
  appId: '1:305469578277:web:3f6b535efeafbfe07fb3cc',
  measurementId: 'G-ZNGSH0KSMM',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
