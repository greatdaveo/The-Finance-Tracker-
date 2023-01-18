import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  // This context will take in the value and return the object {...state, dispatch} from the AuthContext
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextProvider`");
  }

  return context;
};
