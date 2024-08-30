import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FaCircleXmark } from "react-icons/fa6";
import useLogInForm from "@/Hooks/useLogInForm.hook";
import Card from "@/Components/Card/Card";
import HRTag from "@/Components/HR/HRTag";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";

const logIn = "",
  logInPlatform = "",
  signUp = "";
// const logInTitle = "Iniciar sesión";

const LogIn: FC = () => {

  const {submission, control} = useLogInForm()
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <div className={logIn}>
      <Card>
        <FaCircleXmark />
        <div className={logInPlatform}>
          <form onSubmit={submission}>
            <Input
              inputType="email"
              inputClass="Session"
              inputUIMode="Light"
              inputLabel="Correo electrónico"
              name="username"
              control={control}
            />
            <Input
              inputType="password"
              inputClass="Session"
              inputUIMode="Light"
              inputLabel="Contraseña"
              name="password"
              control={control}
            />
            <Button type="submit">Iniciar sesión</Button>
          </form>
        </div>
        <HRTag />
        <div className={signUp}>
          <p>Aún no tiene cuenta con nosotrxs?</p>
          <Link to={"/sign-up"}>Registrate aquí.</Link>
        </div>
      </Card>
    </div>
  );
};

export default LogIn;
