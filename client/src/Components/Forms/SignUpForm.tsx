import Input from "../Input/Input";
import Button from "../Button/Button";
import useSignUpForm from "@/Hooks/useSignUpForm.hook";

const SignUpForm = () => {
  const { submission, control, errors } = useSignUpForm();

  return (
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
          inputType="text"
          inputClass="Session"
          inputUIMode="Light"
          inputLabel="Nombre(s)"
          name="first_name"
          control={control}
          disabled={false}
          errors={errors}
        />
        <Input
          inputType="text"
          inputClass="Session"
          inputUIMode="Light"
          inputLabel="Apellidos"
          name="last_name"
          control={control}
          disabled={false}
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
          disabled={false}
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
          disabled={false}
          errors={errors}
        />
        <div style={{ margin: "24px 0 12px" }}>
          <Button
            buttonType="Turn back"
            buttonUIMode="Light"
            type="submit"
          >
            Regístrate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
