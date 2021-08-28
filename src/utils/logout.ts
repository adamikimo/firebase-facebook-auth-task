// imports
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../App";

export const logout = (setUser: React.Dispatch<any>) => {
    // using the signOut function from firebase
    signOut(auth).then(() => {
        setUser(null)
        console.log('Successfully signed out!');
    }).catch((error) => {
        // handeling errors
        console.log('An error occured while signing out the user!');
});
} 