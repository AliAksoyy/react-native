import axios from "axios";

const API_KEY = "AIzaSyAAzxlGmAHZ7lwmGrEjrtFU-_QvlgxdE_A";

export async function createUser(email, password) {
  console.log(email, password);
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAAzxlGmAHZ7lwmGrEjrtFU-_QvlgxdE_A",
      { email: email, password: password, returnSecureToken: true }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
