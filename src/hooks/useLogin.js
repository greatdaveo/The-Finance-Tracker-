import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // const [isCancelled, setIsCancelled] = useState(false); //For clean-up function
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // To sign in the user
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // To  dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      // To update state
      // if (!isCancelled) {
        setIsPending(false);
        setError(null);
      // }
    } catch (err) {
      // if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      // }
    }
  };

  // //   The clean up function
  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // }, []);

  return { login, error, isPending };
};
