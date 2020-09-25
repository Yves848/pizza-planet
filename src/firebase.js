import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpl5Jp0KNU6kN1suUqqEJtmQ_PP6j0J_U",
    authDomain: "pizza-planet-4a0b2.firebaseapp.com",
    databaseURL: "https://pizza-planet-4a0b2.firebaseio.com",
    projectId: "pizza-planet-4a0b2",
    storageBucket: "pizza-planet-4a0b2.appspot.com",
    messagingSenderId: "812924186131",
    appId: "1:812924186131:web:4dda8684d900fed09219e6"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export const firebaseAuth = firebase.auth();
export const dbMenuRef = db.collection('menu');
