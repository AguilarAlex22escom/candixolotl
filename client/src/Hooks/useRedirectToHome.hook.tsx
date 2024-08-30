import SignUpData from "@/Interfaces/SignUpData";
import { FormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useRedirectToHome = (errors: FormState<SignUpData>) => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    alert("Se ha iniciado sesión correctamente.");
    navigate("/");
    window.location.reload();
    console.log(`The errors were: ${JSON.stringify(errors)}`);
  };
  return redirectToHome;
};

export default useRedirectToHome;
