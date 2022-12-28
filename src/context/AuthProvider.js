import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confeg";

export const AuthContext = createContext();
const auth = new getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user email & password
  const signUp = (email, passwor) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passwor);
  };

  // login email & password
  const login = (email, passwor) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passwor);
  };

  //Update Name
  const nameUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Create user with google
  const googlLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // logOut user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    login,
    signUp,
    logOut,
    googlLogin,
    nameUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
