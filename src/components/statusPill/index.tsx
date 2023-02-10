import styles from "./statusPill.module.scss";

export const blacklistPill = () => {
  return (
    <button className={styles.blacklisted}>
      <h3>Blacklisted</h3>
    </button>
  );
};

export const activePill = () => {
  return (
    <button className={styles.active}>
      <h3>Active</h3>
    </button>
  );
};

export const pendingPill = () => {
  return (
    <button className={styles.pending}>
      <h3>Pending</h3>
    </button>
  );
};

export const inactivePill = () => {
  return (
    <button className={styles.inactive}>
      <h3>Inactive</h3>
    </button>
  );
};
