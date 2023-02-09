import { useState } from "react";
import FilterTable from "../showTableFilters";
import styles from "./showuseraction.module.scss";

export const ShowUserActions = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className={styles.btnModal}>
        <img src="/images/more-vertical.svg" />
      </button>

      {modal && (
        <section className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>

          <div
            onClick={() => console.log("clicked view details")}
            // className={styles.userAction}
          >
            <FilterTable />
          </div>
          <div
            onClick={() => console.log("clicked blacklist user")}
            className={styles.userAction}
          >
            <img src="/images/blacklist-user.svg" alt="blacklist user" />
            <h4>Blacklist User</h4>
          </div>
          <div
            onClick={() => console.log("clicked activate user")}
            className={styles.userAction}
          >
            <img src="/images/activate-user.svg" alt="activate user" />
            <h4>Activate User</h4>
          </div>
        </section>
      )}
    </>
  );
};
