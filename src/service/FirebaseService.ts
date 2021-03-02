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

export { signUp };
