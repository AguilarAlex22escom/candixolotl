const useLogoutCustomer = () => {
    localStorage.removeItem("tokenAuth");
    localStorage.removeItem("user");
    alert("Tu sesión fue cerrada correctamente.")
    window.location.reload() 
}

export default useLogoutCustomer;
