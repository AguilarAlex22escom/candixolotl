import { FC } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "@/Components/Forms/SignUpForm";
import Card from "@/Components/Card/Card";
import HRTag from "@/Components/HR/HRTag";
import Button from "@/Components/Button/Button";
import GoogleLogo from "@/Icons/google-logo.png";
import FaceBookLogo from "@/Icons/facebook-logo.png";
import { snow, blue, font, StyledRedirect } from "@/Styles/defaultStyles";

const SignUp: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card cardType="Sign up" cardClass="Session" cardUIMode="Light">
        <SignUpForm />
        {/**
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
        */}
        <HRTag hrUIMode="Light" />
        <div
          style={{
            color: snow,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontFamily: font,
          }}
        >
          <p>¿Ya tienes cuenta con nosotrxs?</p>
          <StyledRedirect to={"/log-in"}>Inicia sesión aquí.</StyledRedirect>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
