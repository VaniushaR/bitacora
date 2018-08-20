// Initialize Firebase
window.firebaseLoading = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyCoAu3cmgWSebcmT2oo3nT42L9xQo61Eno',
    authDomain: 'vaniusha-s-schedule.firebaseapp.com',
    databaseURL: 'https://vaniusha-s-schedule.firebaseio.com',
    projectId: 'vaniusha-s-schedule',
    storageBucket: 'vaniusha-s-schedule.appspot.com',
    messagingSenderId: '185769852796'
  });
};

//Facebook Login 1. Search the FB Auth Provider
window.loginFB = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  //Should use the predefined languaje
  firebase.auth().useDeviceLanguage();
  //Get access by Pop Up
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...and
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
};

// window.fbAsyncInit = function() {
//   FB.init({
//     appId: '279724922617230',
//     cookie: true,
//     xfbml: true,
//     version: 'v3.1'
//   });

//   FB.AppEvents.logPageView();
// };

// (function(d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = 'https://connect.facebook.net/en_US/sdk.js';
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, 'script', 'facebook-jssdk');

// //veification of FB log status
// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
// });
// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }

// };
