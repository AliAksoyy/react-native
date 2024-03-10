import axios from "axios";

const API_KEY = "AIzaSyAAzxlGmAHZ7lwmGrEjrtFU-_QvlgxdE_A";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    { email: email, password: password, returnSecureToken: true }
  );
  console.log("response", response);
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}
export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
