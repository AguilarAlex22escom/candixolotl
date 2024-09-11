import { FC, useState } from "react";
import { Link } from "react-router-dom";
import useLogInForm from "@/Hooks/useLogInForm.hook";
import Card from "@/Components/Card/Card";
import HRTag from "@/Components/HR/HRTag";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import { snow, font, StyledRedirect } from "@/Styles/defaultStyles";

const signUp = "";
// const logInTitle = "Iniciar sesión";

const LogIn: FC = () => {
  const { submission, control } = useLogInForm();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card cardType="Log In">
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onSubmit={submission}
          >
            <Input
              inputType="email"
              inputClass="Session"
              inputUIMode="Light"
              inputLabel="Correo electrónico"
              name="username"
              disabled={false}
              control={control}
            />
            <Input
              inputType="password"
              inputClass="Session"
              inputUIMode="Light"
              inputLabel="Contraseña"
              name="password"
              disabled={false}
              control={control}
            />
            <div style={{ margin: "24px 0 12px" }}>
              <Button buttonType="Buy" type="submit">
                Inicia sesión
              </Button>
            </div>
          </form>
        </div>
        <HRTag />
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
          <p>¿Aún no tiene cuenta con nosotrxs?</p>
          <StyledRedirect to={"/sign-up"}>Regístrate aquí.</StyledRedirect>
        </div>
      </Card>
    </div>
  );
};

export default LogIn;
