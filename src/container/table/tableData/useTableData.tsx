import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Mock data API
// "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

const fetchTableData = async () => {
  const res = await axios.get("http://localhost:4000/users");
  return res;
};

const useTableData = (onSuccess: any, onError: any) => {
  return useQuery(["tableData"], fetchTableData, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export default useTableData;
