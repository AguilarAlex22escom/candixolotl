import { useForm, SubmitHandler } from "react-hook-form";
import { postCustomer } from "@/api/customers.api";
import SignUpData from "@/Interfaces/SignUpData.d";
import useRedirectToLogin from "@/Hooks/useRedirectToLogin.hook";

const useSignUpForm = () => {
  const { handleSubmit, control, formState: errors } = useForm<SignUpData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      // birthdate: string
      username: "",
      // email: string
      password: ""
    }
  });
  const redirect = useRedirectToLogin(errors);

  const onSubmit: SubmitHandler<SignUpData> = async (data) => {
    try {
      console.log(data);
      const response = await postCustomer(data);
      response != 0 ? redirect() : alert(`El usuario con el correo ${data.username} ya se encuentra registrado, <br> intente con otro.`)
    }
    catch(err) {
      console.log(`The errors in the submit were: ${err}`)
    }
  };

  const submission = handleSubmit(onSubmit);

  return { submission, control, errors };
};

export default useSignUpForm;
