import React from "react";
import styles from "./table.module.scss";

const Table = () => {
  return (
    <section className={styles.table}>
      <table>
        <tr className={styles.tableHead}>
          <th>
            <div>
              Organisation
              <img
                className={styles.filterTable}
                src="/images/filter-results-button.svg"
              />
            </div>
          </th>
          <th>
            <div>
              Contact
              <img
                className={styles.filterTable}
                src="/images/filter-results-button.svg"
              />
            </div>
          </th>
          <th>
            <div>
              Country
              <img
                className={styles.filterTable}
                src="/images/filter-results-button.svg"
              />
            </div>
          </th>
          <th>
            <div>
              Company
              <img
                className={styles.filterTable}
                src="/images/filter-results-button.svg"
              />
            </div>
          </th>
          <th>
            <div>
              Contact
              <img
                className={styles.filterTable}
                src="/images/filter-results-button.svg"
              />
            </div>
          </th>
          <th>
            <div>
              Country
              <img
                className={styles.filterTable}
                src="/images/filter-results-button.svg"
              />
            </div>
          </th>
          <th></th>
        </tr>
        <tr className={styles.tableData}>
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08079898989</td>
          <td>May 15, 2020 10:00 AM</td>
          <td>Pending</td>
          <td>
            <img src="/images/more-vertical.svg" />
          </td>
        </tr>
        <tr>
          <td>Lendstar</td>
          <td>Tosin Dokunmu</td>
          <td>adedeji@lendsqr.com</td>
          <td>08079898989</td>
          <td>May 15, 2020 10:00 AM</td>
          <td>Blacklisted</td>
          <td>
            <img src="/images/more-vertical.svg" />
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Table;
