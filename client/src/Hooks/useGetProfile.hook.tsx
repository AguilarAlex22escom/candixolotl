import { getProfile } from "@/api/customers.api";
import SignUpData from "@/Interfaces/SignUpData";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const useGetProfile = () => {
  const { handleSubmit, control } = useForm<SignUpData>({
    defaultValues: {
        first_name: "",
        last_name: "",
        username: "",
        password: ""
    }
  });
  const [user, setUser] = useState<SignUpData | null>(null)

  const onSubmit: SubmitHandler<SignUpData> = async (data) => {
    try {
      console.log(data)
      const response = await getProfile(data);
      response != 0 ? (
        setUser(response.data),
        localStorage.setItem("user", JSON.stringify(response.data)),
        console.log(response.data)
      ) : alert("No se pudieron obtener los datos de perfil...")
    }
    catch(err) {
      console.log(`The errors in the profile were: ${err}`)
    }
  };

  const submission = handleSubmit(onSubmit);

  return { submission, control, user };
};

export default useGetProfile;
