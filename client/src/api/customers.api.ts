import API from "./main.api";
import SignUpData from "@/Interfaces/SignUpData";
import LogInData from "@/Interfaces/LogInData";

export const postCustomer = async (data: SignUpData) => {
  try {
    const response = await API.post("signup/", data);
    return response.data;
  } catch (err) {
    console.log(`The error in the signup was: ${err}`);
  }
};

export const getCustomer = async (data: LogInData) => {
  try {
    const response = await API.post("login/", data);
    return response.data;
  } catch (err) {
    console.log(`The error in the login was: ${err}`);
  }
};

export const getProfile = async (data: SignUpData) => {
  try {
    const response = await API.post("profile/", data);
    return response.data;
  } catch (err) {
    console.log(`The error in the profile was: ${err}`);
  }
};

/* export const logout = async () => {
    try {
        await API.post("logout/")
    }
    catch(err) {

    }
} */

/*
export const postCustomer = async (data: SignUpData) => {
    console.log(typeof data)
    try {
        const response: Response = await fetch('http://localhost:8000/api/v1/customers/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/JSON'
            },
            body: JSON.stringify(data),
        })
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        else {
            console.log("The customer was registered successfully!")
        }
    }
    catch (error) {
        console.error('Error: ', error);
    }
}
*/
