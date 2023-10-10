import { FC, useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "@/Components/Card/Card";
import Form from "@/Components/Form/Form";
import styles from "@/Styles/Pages/login.module.scss";

const { logIn, logInPlatform } = styles;
const logInTitle = "Iniciar sesión";

const LogIn: FC = () => {
  let id = useId();
  return (
    <div className={logIn}>
      <Card>
        <FontAwesomeIcon icon={faCircleXmark} />
        <div className={logInPlatform}>
          <Form
            formTitle={logInTitle}
            fType="Log in"
            fClass="Session"
            fMode="Light"
          >
            <label htmlFor={id + "-e-mail"}>E-Mail: </label>
            <input id={id + "-e-mail"} type="email" />
            <label htmlFor={id + "-password"}>Contraseña: </label>
            <input id={id + "-password"} type="password" />
            <input type="submit" value="Iniciar sesión" />
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default LogIn;
