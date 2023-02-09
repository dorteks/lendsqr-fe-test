import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUserDataById = (userId: any) => {
  // console.log(userId, "userID");
  const res = axios.get(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
  );
  return res;
};

const useUserData = (userId: any) => {
  return useQuery(["user", userId], () => fetchUserDataById(userId), {});
};

export default useUserData;
