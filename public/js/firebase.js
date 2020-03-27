'use strict';

//grab a form
const form = document.querySelector('.form-in');

//grab an input
const inputEmail = form.querySelector('#inputEmail');


const firebaseConfig = {
    apiKey: "AIzaSyBGuHhunNdjDiSDtOxfWcl8ywbBkIsv_CQ",
    authDomain: "robot-35d6d.firebaseapp.com",
    databaseURL: "https://robot-35d6d.firebaseio.com",
    projectId: "robot-35d6d",
    storageBucket: "robot-35d6d.appspot.com",
    messagingSenderId: "195653654245",
    appId: "1:195653654245:web:166886c29a7c0f9804660c",
    measurementId: "G-JPVZW3C1RQ"
  };

  //create a functions to push
  function firebasePush(input) {


    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('emails').push().set(
        {
            mail: input.value
        }
    );

}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputEmail);

        //shows alert if everything went well.
        return alert('Data Successfully Sent to Realtime Database');
    })
}