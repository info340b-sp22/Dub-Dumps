import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { StyledFirebaseAuth } from 'react-firebaseui';

import { GoogleAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth'

const FIREBASEUI_CONFIG = {
    signInOptions: [ //array of which signin options to use 
        { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }, //provider with opti
        GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: 'popup', //show popup to log in 
    credentialHelper: 'none', //don't show an account chooser 
    callbacks: {
        //what should I do when they successfully sign in? 
        //conceptually: preventDefault() 
        signInSuccessWithAuthResult: () => false //do nothing special; just return false 
    }
};

export default function SignIn(props) {
    const auth = getAuth();
    return (
        <div className="card bg-light">
            <div className="container card-body">
                <p className="lead">Sign in here!</p>
                <StyledFirebaseAuth uiConfig={FIREBASEUI_CONFIG} firebaseAuth={auth} />
            </div>
        </div>
    )
}