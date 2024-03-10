import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import axios from "axios";
import Spinner from "../components/Spinner";

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
      if (user !== null) {
        axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user`, {
          uid: user.uid,
          email: user.email,
        });
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <AuthContext.Provider value={{ logInWithGoogle, logOut, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
