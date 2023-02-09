import React from "react";
import Link from "next/link";
import styles from "./table.module.scss";
import useTableData from "./useTableData";
import { ShowUserActions } from "@/components/showUserActions";

const showOrHideDiv = () => {
  const display = document.getElementById("showOrHideDiv");

  if (display?.style.display === "!none") {
    display.style.display = "block";
  }
};

const Table = () => {
  const onSuccess = () => {
    console.log("fetching data");
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
      <ShowUserActions />

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
          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>dorteks</td>
            <td>dorteks@gmail.com</td>
            <td>909949494949</td>
            <td>May 15, 2022 10:00AM</td>
            <td>
              <button className={styles.active}>
                <h3>Active</h3>
              </button>
            </td>
            <td>
              <img src="/images/more-vertical.svg" />
            </td>
          </tr>
          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>dorteks</td>
            <td>dorteks@gmail.com</td>
            <td>909949494949</td>
            <td>May 15, 2022 10:00AM</td>
            <td>
              <button className={styles.inactive}>
                <h3>Inactive</h3>
              </button>
            </td>
            <td>
              <img src="/images/more-vertical.svg" />
            </td>
          </tr>
          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>dorteks</td>
            <td>dorteks@gmail.com</td>
            <td>909949494949</td>
            <td>May 15, 2022 10:00AM</td>
            <td>
              <button className={styles.pending}>
                <h3>Pending</h3>
              </button>
            </td>
            <td>
              <img src="/images/more-vertical.svg" />
            </td>
          </tr>
          {dataTable?.data.map((user: any) => {
            return (
              <tr key={user.id} className={styles.tdata}>
                <td className={styles.data}>
                  <Link href={`/admin/users/` + user.id}>{user.orgName}</Link>
                </td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button className={styles.blacklisted}>
                    <h3>Blacklisted</h3>
                  </button>
                </td>
                <td>
                  <img
                    onClick={() => showOrHideDiv()}
                    src="/images/more-vertical.svg"
                  />
                  {/* <section id="showOrHideDiv" className={styles.container}>
                    <div className={styles.userAction}>
                      <Link href={`/users` + user.id}>
                        <img src="/images/view-user.svg" alt="view user" />
                        <h4>View Details</h4>
                      </Link>
                    </div>
                    <div className={styles.userAction}>
                      <img
                        src="/images/blacklist-user.svg"
                        alt="blacklist user"
                      />
                      <h4>Blacklist User</h4>
                    </div>
                    <div className={styles.userAction}>
                      <img
                        src="/images/activate-user.svg"
                        alt="activate user"
                      />
                      <h4>Activate User</h4>
                    </div>
                  </section> */}
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
