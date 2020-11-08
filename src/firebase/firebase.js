import {initializeapp} from 'firebase';

const app = initializeapp ({
    apiKey: "AIzaSyC03GRGPf7EU1nkG-HGWJLCbHoHGwIwQzE",
  authDomain: "notes-app-628fa.firebaseapp.com",
  databaseURL: "https://notes-app-628fa.firebaseio.com",
  projectId: "notes-app-628fa",
  storageBucket: "notes-app-628fa.appspot.com",
  messagingSenderId: "1049801986145",
  appId: "1:1049801986145:web:bd3facd24ad14dda315a20"
})

export const db = app.database();
