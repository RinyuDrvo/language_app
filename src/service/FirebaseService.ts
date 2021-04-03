import firebase from "firebase";

/**
 * Firebase Authentication sign up
 * @param {string} email
 * @param {string} password
 * @return {Promise<UserCredential>} user credential
 */
async function signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
  return await firebase.auth().createUserWithEmailAndPassword(email, password);
}

/**
 * Firebase Authentication sign in
 * @param {strng} email
 * @param {string} password
 * @return {Promise<UserCredential>} user credential
 */
async function signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
}

/**
 * Firebase Authentication log out
 * @return {Promise<void>}
 */
async function signOut(): Promise<void> {
  return await firebase.auth().signOut();
}

/**
 * Firebase Authentication onAuthStateChanged
 * @param {(user: firebase.User | null) => void} authEvent
 */
function onAuthStateChanged(authEvent: (user: firebase.User | null) => void): void {
  firebase.auth().onAuthStateChanged((user) => {
    authEvent(user)
  });

}

export { signUp, signIn, signOut, onAuthStateChanged };
