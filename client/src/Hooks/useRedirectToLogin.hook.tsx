import SignUpData from "@/Interfaces/SignUpData";
import { FormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useRedirectToLogin = (errors: FormState<SignUpData>) => {
  const navigate = useNavigate();
  const redirectToLogIn = () => {
    alert("Su usuario se ha registrado con éxito.")
    navigate("/log-in")
    console.log(`The errors were: ${errors}`)
  };
  return redirectToLogIn;
};

export default useRedirectToLogin;
