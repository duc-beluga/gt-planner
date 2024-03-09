import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const fetchUserPlan = async (email) => {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/api/user/getPlans`,
    {
      email: email,
    }
  );
  return response.data;
};

export const useUserPlan = () => {
  const { currentUser } = useAuth();

  return useQuery(
    ["userPlan", currentUser.email],
    () => fetchUserPlan(currentUser.email),
    {
      enabled: !!currentUser.email, // Only run the query if the email exists
    }
  );
};
