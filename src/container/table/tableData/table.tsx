import React from "react";
import Link from "next/link";
import styles from "./table.module.scss";
import useTableData from "./useTableData";
import { ShowUserActions } from "../showUserActions";
import { inactivePill } from "@/components/statusPill";

const Table = () => {
  // making use of data from useTableData hook
  const onSuccess = () => {
    console.log("success - (fetched data) ");
  };
  const onError = (error: any) => {
    console.log("error", error);
  };

  const {
    data: dataTable,
    isLoading,
    isFetching,
    isError,
  } = useTableData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h3 className={styles.loading}>Loading...</h3>;
  }

  if (isError) {
    return <h3 className={styles.loading}>Error loading page</h3>;
  }

  return (
    <div className={styles.container}>
      <table className={styles.users}>
        <thead className={styles.thead}>
          <tr>
            {[
              {
                id: 1,
                title: "Organisation",
                src: "/images/filter-results-button.svg",
              },
              {
                id: 2,
                title: "Username",
                src: "/images/filter-results-button.svg",
              },
              {
                id: 3,
                title: "Email",
                src: "/images/filter-results-button.svg",
              },
              {
                id: 4,
                title: " Phone Number",
                src: "/images/filter-results-button.svg",
              },
              {
                id: 5,
                title: " Date Joined",
                src: "/images/filter-results-button.svg",
              },
              {
                id: 6,
                title: " Status",
                src: "/images/filter-results-button.svg",
              },
              { id: 7, title: " ", src: "" },
            ].map((thead: any) => {
              return (
                <th key={thead.id} className={styles.thead}>
                  <div className={styles.tablehead}>
                    <h4>{thead.title}</h4>
                    <img src={thead.src} />
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {dataTable?.data.map((user: any) => {
            return (
              <tr key={user.id} className={styles.tdata}>
                <td className={styles.data}>
                  <Link href={`/admin/users/` + user.id}>{user.orgName}</Link>
                </td>
                <td>
                  <Link href={`/admin/users/` + user.id}>{user.userName}</Link>
                </td>
                <td>
                  {" "}
                  <Link href={`/admin/users/` + user.id}>{user.email}</Link>
                </td>
                <td>
                  {" "}
                  <Link href={`/admin/users/` + user.id}>
                    {user.phoneNumber}
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link href={`/admin/users/` + user.id}>{user.createdAt}</Link>
                </td>
                <td>
                  <Link href={`/admin/users/` + user.id}>{inactivePill()}</Link>
                </td>
                <td>
                  <ShowUserActions />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
