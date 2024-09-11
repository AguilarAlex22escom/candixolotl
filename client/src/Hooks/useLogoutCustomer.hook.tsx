import { useNavigate } from "react-router-dom";

const useLogoutCustomer = () => {
  const redirect = useNavigate();
  localStorage.removeItem("tokenAuth");
  localStorage.removeItem("user");
  alert("Tu sesión fue cerrada correctamente.");
  window.location.reload();
  redirect("/");
};

export default useLogoutCustomer;
