import firebase from "firebase";

/**
 * Firebase Authentication sign up
 * @param {string} email
 * @param {string} password
 * @return {Promise<UserCredential>} user credential
 */
async function signUp(email: string, password: string) {
  return await firebase.auth().createUserWithEmailAndPassword(email, password);
}

/**
 * Firebase Authentication sign in
 * @param {strng} email
 * @param {string} password
 * @return {Promise<UserCredential>} user credential
 */
async function signIn(email: string, password: string) {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
}

/**
 * Firebase Authentication log out
 * @return {Promise<void>}
 */
async function signOut() {
  return await firebase.auth().signOut();
}

export { signUp, signIn, signOut };
