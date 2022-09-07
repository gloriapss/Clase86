import firebase from 'firebase';


const firebaseConfig = {
 apiKey: "AIzaSyCgOF2klbd0P11PINmajiTlNXY1pw--OF8",
  authDomain: "clase-85-67938.firebaseapp.com",
  databaseURL: "https://clase-85-67938-default-rtdb.firebaseio.com",
  projectId: "clase-85-67938",
  storageBucket: "clase-85-67938.appspot.com",
  messagingSenderId: "652037741580",
  appId: "1:652037741580:web:8c8e8dc4d4aae2cce6e229"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();