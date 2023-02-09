// import Link from "next/link";
import styles from "./showuseraction.module.scss";

export const ShowUserActions = () => {
  console.log("You clicked me");
  return (
    <section className={styles.container}>
      <div className={styles.userAction}>
        {/* <Link href={`/users/${user.id}`}></Link> */}
        <img src="/images/view-user.svg" alt="view user" />
        <h4>View Details</h4>
      </div>
      <div className={styles.userAction}>
        <img src="/images/blacklist-user.svg" alt="blacklist user" />
        <h4>Blacklist User</h4>
      </div>
      <div className={styles.userAction}>
        <img src="/images/activate-user.svg" alt="activate user" />
        <h4>Activate User</h4>
      </div>
    </section>
  );
};
