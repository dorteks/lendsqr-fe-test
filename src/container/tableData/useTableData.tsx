import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTableData = async () => {
  const res = await axios.get(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
  );
  return res;
};

const useTableData = (onSuccess: any, onError: any) => {
  return useQuery(["tableData"], fetchTableData, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export default useTableData;
