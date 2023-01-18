import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = (email, password) => {
  const [isCancelled, setIsCancelled] = useState(false); //For clean-up function
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async () => {
    setError(null);
    setIsPending(false);

    // To sign out the user
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // To  dispatch logout action *** The payload is not necessary here since we are not updating the user. i.e user will be null
      dispatch({ type: "LOGIN", payload: res.user });

      // To update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  //   The clean up function
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, isPending };
};
