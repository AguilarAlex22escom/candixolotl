import { FC } from "react";
import { Link } from "react-router-dom";
import { FaCircleXmark } from "react-icons/fa6";
import SignUpForm from "@/Components/Forms/SignUpForm";
import Card from "@/Components/Card/Card";
import HRTag from "@/Components/HR/HRTag";
import Button from "@/Components/Button/Button";
import GoogleLogo from "@/Icons/google-logo.png";
import FaceBookLogo from "@/Icons/facebook-logo.png";

const signUp = "",
  /* signUpHR = "", */
  signUpSocialNetwork = "",
  logIn = "";

const SignUp: FC = () => {
  return (
    <div className={signUp}>
      <Card cardType="Sign up" cardClass="Session" cardUIMode="Light">
        <FaCircleXmark />
        <SignUpForm />
        <HRTag
          firstChildren={<p>O</p>}
          lastChildren={<p>Registrese con su: </p>}
          hrUIMode="Light"
        />
        <div className={signUpSocialNetwork}>
          <Button
            buttonType="Sign up"
            buttonClass="Session"
            buttonUIMode="Light"
          >
            <img src={GoogleLogo} alt="Google-Auth" />
            <p>Cuenta de Google</p>
          </Button>
          <Button
            buttonType="Sign up"
            buttonClass="Session"
            buttonUIMode="Light"
          >
            <img src={FaceBookLogo} alt="Facebook-Auth" />
            <p>Cuenta de Facebook</p>
          </Button>
        </div>
        <HRTag hrUIMode="Light" />
        <div className={logIn}>
          <p>¿Ya tiene cuenta con nosotrxs?</p>
          <Link to={"/log-in"}>Inicie sesión aquí.</Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
