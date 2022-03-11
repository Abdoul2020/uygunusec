import {getFirebaseConfig} from '../store/firebaseConfig'
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    updateProfile} from "firebase/auth";
//import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

console.log('!!!! firebase initializeApp is runned');
const app = initializeApp(getFirebaseConfig());

export function registerWithEmailAndPassword(email, password, firstName, lastName, phoneNumber=0){
        return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(getAuth(app), email, password)
        .then(resp => 
            {console.log({Useriscreated:resp});
            updateUserProfile(firstName, lastName, phoneNumber)
            .then(resp=>{
                sendVerifyEmail()
                .then(()=>{
                    resolve("Success");
                })
                .catch(error=>{reject(error.code)});
            })
            .catch(error => {reject(error.code)});
            })
        .catch(error => {reject(error.code)});
        });
    }

export function loginWithEmailAndPassword(email, password){
        return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(getAuth(app), email, password)
            .then(userCredential => {
                if (!userCredential.user.emailVerified){
                sendVerifyEmail()
                .then(()=>{
                    resolve(null, true);
                })
                .catch(error=>{
                    console.log({send_verify_email_error:error});
                    reject(error);
                });
                }
                else{
                 console.log({Userisloggedin:userCredential});  
                 resolve(userCredential);
                }
                
                })
            .catch(error => { reject(error.code)})
        });
    }

export function logOut(){
        signOut(getAuth(app));
    }

export function sendVerifyEmail(){
    return new Promise((resolve, reject) => {
    sendEmailVerification(getAuth(app).currentUser)
    .then(resp => {resolve(true)})
    .catch(error => {reject(error.code)});
    });
} 

export function updateUserProfile(firstName, lastName, phoneNumber){
    return new Promise((resolve, reject) => {
    updateProfile(getAuth(app).currentUser, {displayName:(firstName+' '+lastName), phoneNumber:phoneNumber})
    .then(resp => {resolve(true)})
    .catch(error => {reject(error.code)});
    });
} 

// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const user = res.user;
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name,
//         authProvider: "local",
//         email,
//       });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
// };

