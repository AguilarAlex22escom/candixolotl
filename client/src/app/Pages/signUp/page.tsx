"use client";

import axios from "axios";
import {
  FC,
  useState,
  useId,
  useEffect,
  ChangeEvent,
  FormEvent,
  useRef,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "@/Components/Card/Card";
import Form from "@/Components/Form/Form";
import Division from "@/Components/Division/Division";
import Button from "@/Components/Button/Button";
import GoogleLogo from "@/Icons/google-logo.png";
import FaceBookLogo from "@/Icons/facebook-logo.png";
import styles from "@/Styles/Pages/signup.module.scss";

const { signUp, signUpPlatform, signUpDivision, signUpSocialNetwork, logIn } =
  styles;
const signUpTitle = "Registrate";

const SignUp: FC = () => {
  let userNameReGex = /^[a-z0-9_-]{6,18}$/;
  let emailReGex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  let paswordReGex = /^[a-z0-9_-]{6,18}$/;

  let [user, setUser] = useState({
    first_names: "",
    last_names: "",
    birth_date: "",
    user_name: "",
    email: "",
    psw: "",
  });

  let id = useId();
  let form = useRef<HTMLFormElement>();

  let handlerChanges = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, e.target.name);
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  let registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    let result = await axios.post("../APIs/Users", user);
    console.log(result);
    // form.current!.reset();
  };

  return (
    <div className={signUp}>
      <Card cType="Sign up" cClass="Session" cMode="Light">
        <FontAwesomeIcon icon={faCircleXmark} />
        <div className={signUpPlatform}>
          <Form
            formMethod={"POST"}
            required
            formTitle={signUpTitle}
            onSubmit={registerUser}
            fType="Sign up"
            fClass="Session"
            fMode="Light"
          >
            <label htmlFor={id + "-names"}>Nombres: </label>
            <input
              id={id + "-names"}
              type="text"
              name="first_names"
              onChange={
                handlerChanges
                /*(e: ChangeEvent<HTMLInputElement>) => {
                setFirstNamesChange(e.target.value)
              };*/
              }
            />
            <label htmlFor={id + "-last-names"}>Apellidos: </label>
            <input
              id={id + "-last-names"}
              type="text"
              name="last_names"
              onChange={
                handlerChanges
                /*(e) => {
                setLastNamesChange(e.target.value);};*/
              }
            />
            <label htmlFor={id + "-birth-date"}>Fecha de nacimiento</label>
            <input
              type="date"
              name="birth_date"
              id={id + "-birth-date"}
              min={"1925-01-01"}
              max={"2007-12-30"}
              onChange={handlerChanges}
            />
            <label htmlFor={id + "-user-name"}>Nombre de usuario: </label>
            <input
              id={id + "-user-name"}
              type="text"
              name="user_name"
              placeholder={"Recomendado: " + user.first_names + user.last_names}
              onChange={handlerChanges}
            />
            <label htmlFor={id + "-e-mail"}>E-Mail: </label>
            <input
              id={id + "-e-mail"}
              type="email"
              name="email"
              onChange={handlerChanges}
            />
            <label htmlFor={id + "-password"}>Contraseña: </label>
            <input
              id={id + "-password"}
              type="password"
              name="psw"
              onChange={handlerChanges}
            />
            <input type="submit" value="Registrar" />
          </Form>
        </div>
        <Division
          firstChildren={<p>O</p>}
          lastChildren={<p>Registrese con su: </p>}
          dMode="Light"
          className={signUpDivision}
        />
        <div className={signUpSocialNetwork}>
          <Button bType="Sign up" bClass="Session" bMode="Light">
            <Image src={GoogleLogo} alt="Google-Auth" />
            <p>Cuenta de Google</p>
          </Button>
          <Button bType="Sign up" bClass="Session" bMode="Light">
            <Image src={FaceBookLogo} alt="Facebook-Auth" />
            <p>Cuenta de Facebook</p>
          </Button>
        </div>
        <Division className={signUpDivision} dMode="Light" />
        <div className={logIn}>
          <p>¿Ya tiene cuenta con nosotrxs?</p>
          <Link href={"/"}>Inicie sesión aquí.</Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
