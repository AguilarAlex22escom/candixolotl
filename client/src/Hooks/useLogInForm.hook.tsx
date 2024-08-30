import { getCustomer } from "@/api/customers.api";
import LogInData from "@/Interfaces/LogInData";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useRedirectToHome from "@/Hooks/useRedirectToHome.hook"

const useLogInForm = () => {
  const { handleSubmit, control, formState: errors } = useForm<LogInData>({
    defaultValues: {
      username: "",
      // email: string
      password: ""
    }
  });
  const [user, setUser] = useState<LogInData | null>(null)
  const redirect = useRedirectToHome(errors)

  const onSubmit: SubmitHandler<LogInData> = async (data) => {
    try {
      console.log(data)
      const response = await getCustomer(data);
      localStorage.setItem("tokenAuth", response.token)
      response != 0 ? (
        setUser(response),
        localStorage.setItem("user", JSON.stringify(data)),
        console.log(data),
        redirect()
      ) : alert("El correo o contraseña ingresados no coinciden con ningún registro.")
    }
    catch(err) {
      console.log(`The errors in the submit were: ${err}`)
    }
  };

  const submission = handleSubmit(onSubmit);

  return { submission, control, user };
};

export default useLogInForm;
