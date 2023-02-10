import React from "react";
import {
  activePill,
  pendingPill,
  inactivePill,
  blacklistPill,
} from "@/components/statusPill";
import { ShowUserActions } from "../showUserActions";

import styles from "./dashboardTable.module.scss";

const DashboardTable = () => {
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
          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>dorteks</td>
            <td>dorteks@gmail.com</td>
            <td>909949494949</td>
            <td>May 15, 2022 10:00AM</td>
            <td>{pendingPill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>topex</td>
            <td>topex@gmail.com</td>
            <td>08035262528</td>
            <td>Aug 24, 2027 12:05AM</td>
            <td>{blacklistPill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>nuges</td>
            <td>nuges@gmail.com</td>
            <td>02034985259</td>
            <td>Jan 09, 2032 11:00PM</td>
            <td>{activePill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>dorteks</td>
            <td>dorteks@gmail.com</td>
            <td>909949494949</td>
            <td>May 15, 2022 10:00AM</td>
            <td>{inactivePill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>topex</td>
            <td>topex@gmail.com</td>
            <td>08035262528</td>
            <td>Aug 24, 2027 12:05AM</td>
            <td>{blacklistPill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>nuges</td>
            <td>nuges@gmail.com</td>
            <td>02034985259</td>
            <td>Jan 09, 2032 11:00PM</td>
            <td>{activePill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>dorteks</td>
            <td>dorteks@gmail.com</td>
            <td>909949494949</td>
            <td>May 15, 2022 10:00AM</td>
            <td>{inactivePill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>topex</td>
            <td>topex@gmail.com</td>
            <td>08035262528</td>
            <td>Aug 24, 2027 12:05AM</td>
            <td>{blacklistPill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>nuges</td>
            <td>nuges@gmail.com</td>
            <td>02034985259</td>
            <td>Jan 09, 2032 11:00PM</td>
            <td>{activePill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>

          <tr className={styles.tdata}>
            <td>Lensqr</td>
            <td>dorteks</td>
            <td>dorteks@gmail.com</td>
            <td>909949494949</td>
            <td>May 15, 2022 10:00AM</td>
            <td>{inactivePill()}</td>
            <td>
              <ShowUserActions />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
