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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log("User", user);
    });
    return () => {
      unsubscribe();
    };
  });

  const logInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  //TODO: Add a spinner
  if (loading) {
    return <h1> Loading...</h1>;
  }
  return (
    <AuthContext.Provider value={{ logInWithGoogle, logOut, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
