// src/fanbase/fanbaseAuth.js
import { auth } from './auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // return user object
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // propagate the error
  }
};

export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // return user object
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // propagate the error
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
