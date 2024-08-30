import Input from "../Input/Input";
import Button from "../Button/Button";
import useSignUpForm from "@/Hooks/useSignUpForm.hook";

const signUpPlatform = "";

const SignUpForm = () => {

  const { submission, control, errors } = useSignUpForm();

  return (
    <div className={signUpPlatform}>
      <form onSubmit={submission}>
        <Input
          inputType="text"
          inputClass="Session"
          inputUIMode="Light"
          inputLabel="Nombre(s)"
          name="first_name"
          control={control}
          errors={errors}
        />
        <Input
          inputType="text"
          inputClass="Session"
          inputUIMode="Light"
          inputLabel="Apellidos"
          name="last_name"
          control={control}
          errors={errors}
        />
        {/*<Input
          inputType="date"
          inputClass="Session"
          inputUIMode="Light"
          min="1925-01-01"
          max="2007-12-30"
          name="birth_date"
          control={control}
        />*/}
        {/*<Input
          inputType="text"
          inputClass="Session"
          inputUIMode="Light"
          inputLabel="Nombre de usuario"
          name="username"
          control={control}
        />*/}
        <Input
          inputType="email"
          inputClass="Session"
          inputUIMode="Light"
          inputLabel="Correo electrónico"
          name="username"
          control={control}
          errors={errors}
        />
        <Input
          inputType="password"
          inputClass="Session"
          inputUIMode="Light"
          inputLabel="Contraseña"
          isPassword={true}
          name="password"
          control={control}
          errors={errors}
        />
        <Button
          buttonType="Sign up"
          buttonClass="Session"
          buttonUIMode="Light"
          type="submit"
        >
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
