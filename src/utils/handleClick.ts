import React from 'react';
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../App";

export const handleClick = (setUser: React.Dispatch<any>) => {
    // init the facebook auth provider
      const provider = new FacebookAuthProvider(); 
      // setting the auth with popup
      signInWithPopup(auth, provider)
        .then((result) => {
          // setting the user
          const user = result.user;
          setUser(user);
        })
        .catch((error) => {
          // handeling the error
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = FacebookAuthProvider.credentialFromError(error);
          console.log('errors: ', [{
            errorCode: errorCode,
            errorMessage: errorMessage,
            erroredEmail: email,
            credential: credential
          }]);
          setUser(null);
        });
      }