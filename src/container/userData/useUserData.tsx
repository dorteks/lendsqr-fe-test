import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Mock data API
// `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`

const fetchUserDataById = async (userId: any) => {
  const res = await axios.get(`http://localhost:4000/users/${userId}`);
  return res;
};

const useUserData = (userId: any, onSuccess: any, onError: any) => {
  return useQuery(["user", userId], () => fetchUserDataById(userId), {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export default useUserData;
