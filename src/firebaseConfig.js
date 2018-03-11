import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDDcgh5xNPEB01yamfAJm1seViKD_qFnRg",
    authDomain: "gleeat-01.firebaseapp.com",
    databaseURL: "https://gleeat-01.firebaseio.com",
    projectId: "gleeat-01",
    storageBucket: "",
    messagingSenderId: "914296495783"
};
const firebaseApp = Firebase.initializeApp(config);

const db = firebaseApp.database();

// export const dbMenuRef = db.ref('menu');
export const dbMealsRef = db.ref('meals');
export const dbUsersRef = db.ref('users');