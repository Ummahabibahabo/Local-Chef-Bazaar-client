// // // import React, { useEffect, useState } from "react";
// // // import { AuthContext } from "./AuthContext";
// // // import {
// // //   createUserWithEmailAndPassword,
// // //   GoogleAuthProvider,
// // //   onAuthStateChanged,
// // //   signInWithEmailAndPassword,
// // //   signInWithPopup,
// // //   signOut,
// // //   updateProfile,
// // // } from "firebase/auth";
// // // import { auth } from "../../../firebase/firabase.init";

// // // const googleProvider = new GoogleAuthProvider();

// // // const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   // Register user
// // //   const registerUser = (email, password) => {
// // //     setLoading(true);
// // //     return createUserWithEmailAndPassword(auth, email, password);
// // //   };

// // //   // Email login
// // //   const signInUser = (email, password) => {
// // //     setLoading(true);
// // //     return signInWithEmailAndPassword(auth, email, password);
// // //   };

// // //   // Google login
// // //   const signInGoogle = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const result = await signInWithPopup(auth, googleProvider);
// // //       // Directly set Firebase user object
// // //       setUser(result.user);
// // //       setLoading(false);
// // //       return result;
// // //     } catch (error) {
// // //       console.error(error);
// // //       setLoading(false);
// // //       throw error;
// // //     }
// // //   };

// // //   // Update profile (name / photo)
// // //   const updateUserProfile = async (profile) => {
// // //     if (!auth.currentUser) return;

// // //     await updateProfile(auth.currentUser, profile);
// // //     // Update context state
// // //     setUser(auth.currentUser);
// // //   };

// // //   // Logout
// // //   const logOut = async () => {
// // //     setLoading(true);
// // //     await signOut(auth);
// // //     setUser(null);
// // //     setLoading(false);
// // //   };

// // //   // Auth state observer
// // //   useEffect(() => {
// // //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //       setUser(currentUser);
// // //       setLoading(false);
// // //     });
// // //     return () => unSubscribe();
// // //   }, []);

// // //   const authInfo = {
// // //     user,
// // //     loading,
// // //     registerUser,
// // //     signInUser,
// // //     signInGoogle,
// // //     logOut,
// // //     updateUserProfile,
// // //     setUser,
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
// // //   );
// // // };

// // // export default AuthProvider;

// // import React, { useEffect, useState } from "react";
// // import { AuthContext } from "./AuthContext";
// // import {
// //   createUserWithEmailAndPassword,
// //   GoogleAuthProvider,
// //   onAuthStateChanged,
// //   signInWithEmailAndPassword,
// //   signInWithPopup,
// //   signOut,
// //   updateProfile,
// // } from "firebase/auth";
// // import { auth } from "../../../firebase/firabase.init";

// // const googleProvider = new GoogleAuthProvider();

// // const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // Register user
// //   const registerUser = (email, password) => {
// //     setLoading(true);
// //     return createUserWithEmailAndPassword(auth, email, password);
// //   };

// //   // Email login
// //   const signInUser = (email, password) => {
// //     setLoading(true);
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };

// //   // Google login
// //   const signInGoogle = async () => {
// //     setLoading(true);
// //     try {
// //       await signInWithPopup(auth, googleProvider);
// //       // Don't set user here, let onAuthStateChanged handle it
// //       setLoading(false);
// //     } catch (error) {
// //       console.error(error);
// //       setLoading(false);
// //       throw error;
// //     }
// //   };

// //   // Update profile
// //   const updateUserProfile = async (profile) => {
// //     if (!auth.currentUser) return;
// //     await updateProfile(auth.currentUser, profile);
// //     setUser({ ...auth.currentUser });
// //   };

// //   // Logout
// //   const logOut = async () => {
// //     setLoading(true);
// //     await signOut(auth);
// //     setUser(null);
// //     setLoading(false);
// //   };

// //   // Auth state observer
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const authInfo = {
// //     user,
// //     loading,
// //     registerUser,
// //     signInUser,
// //     signInGoogle,
// //     logOut,
// //     updateUserProfile,
// //   };

// //   return (
// //     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
// //   );
// // };

// // export default AuthProvider;

// import React, { useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../../../firebase/firabase.init";

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Register
//   const registerUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Email login
//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Google login  FIXED
//   const signInGoogle = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       setLoading(false);
//       return result; //  MUST
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//       throw error;
//     }
//   };

//   // Update profile
//   const updateUserProfile = async (profile) => {
//     if (!auth.currentUser) return;
//     await updateProfile(auth.currentUser, profile);
//     setUser({ ...auth.currentUser });
//   };

//   // Logout
//   const logOut = async () => {
//     setLoading(true);
//     await signOut(auth);
//     setUser(null);
//     setLoading(false);
//   };

//   // Observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     registerUser,
//     signInUser,
//     signInGoogle,
//     logOut,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firabase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const signInGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await result.user.reload(); // 🔥 MUST
      setUser({ ...result.user }); // 🔥 spread
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Update profile
  const updateUserProfile = async (profile) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, profile);
    await auth.currentUser.reload();
    setUser({ ...auth.currentUser });
  };

  // Logout
  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
  };

  // Auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await currentUser.reload(); // 🔥 MUST
        setUser({ ...currentUser });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    signInGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
