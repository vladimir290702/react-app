import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBj41Oab9QKuHB05_rMdThXm8X1PbTjRew",
    authDomain: "movies-fd812.firebaseapp.com",
    projectId: "movies-fd812",
    storageBucket: "movies-fd812.appspot.com",
    messagingSenderId: "991145352483",
    appId: "1:991145352483:web:ad81dd200023e4645f8096"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);