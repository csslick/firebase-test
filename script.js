  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
  import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.4/firebase-auth.min.js";

  import { getFirestore } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.4/firebase-firestore.min.js';
 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBBecC89i6PHLpt8CMf9LFJJfRt4TSis4s",
    authDomain: "nwitter-8b5d2.firebaseapp.com",
    projectId: "nwitter-8b5d2",
    storageBucket: "nwitter-8b5d2.appspot.com",
    messagingSenderId: "905182153968",
    appId: "1:905182153968:web:2a8dfef03871e02c77c635"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function logIn() {
    // console.log(getAuth())
    const email = 'tailofmoon@naver.com';
    const pwd = '111111';
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pwd)
      .then(userCredential => {
        // 접속
        const user = userCredential.user;
        console.log('로그인 user = ', user.email);
        if(user) {
          document.querySelector('.login-status').textContent = '접속';
          document.querySelector('.user').textContent = user.email;
        } else {
          document.querySelector('.login-status').textContent = '미접속';
          document.querySelector('.user').textContent = "";
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  } // logIn


  // 로그인 버튼
  const btnLogIn = document.querySelector('#btnLogIn');
  btnLogIn.addEventListener('click', () => {
    logIn();
  });

  // 로그아웃
  const btnLogOut = document.querySelector('#btnLogOut');
  btnLogOut.addEventListener('click', () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('로그아웃');
      document.querySelector('.login-status').textContent = '미접속';
      document.querySelector('.user').textContent = "";
    }).catch(err => {
      console.log(err.message);
    })
  }); // btnLogOut

  