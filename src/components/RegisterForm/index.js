import React, { createRef } from 'react'
import { Form } from 'react-bootstrap';
import {auth} from '../../firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();

const RegisterForm = (props) => {
   return (
        <React.Fragment>
            <Form onSubmit={(e) => {
                e.preventDefault()
                signInWithPopup(auth, provider)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
                        // The signed-in user info.
                        const user = result.user;
                        
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
                    });
            }}>
                <Form.Control type="text" placeholder="Full Name" />
                <input className="btn btn-light-red" type="submit" value='Sign up Using Google' />
                
            </Form>


        </React.Fragment>
    )
}
export default RegisterForm