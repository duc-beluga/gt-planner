import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logInWithGoogle = async () => {
    await signInWithRedirect(auth, new GoogleAuthProvider());
  };

  const logOut = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log("User", user);
    });
    return unsubscribe;
  }, []);

  //TODO: Add a spinner
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span class="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <AuthContext.Provider value={{ logInWithGoogle, logOut, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
