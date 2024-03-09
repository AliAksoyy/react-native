import axios from "axios";

const API_KEY = "AIzaSyAAzxlGmAHZ7lwmGrEjrtFU-_QvlgxdE_A";

export async function createUser(email, password) {
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY,
      { email: email, password: password, returnSecureToken: true }
    );
  } catch (error) {
    console.log(error);
  }
}
export async function signInFireBase(email, password) {
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        API_KEY,
      { email: email, password: password, returnSecureToken: true }
    );
  } catch (error) {
    console.log(error);
  }
}
