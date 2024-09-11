import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "@/api/customers.api";
import SignUpData from "@/Interfaces/SignUpData";

const useGetProfile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<SignUpData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUserProfile(response);
      }
      catch(err: any) {
        setError(err.message);
        if(err.response?.status == 401) navigate("/login");
      }
    }
    fetchProfile();
  }, [navigate]);
  return { userProfile, error }
};

export default useGetProfile;
