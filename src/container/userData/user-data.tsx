import React from "react";
import Link from "next/link";
import useUserData from "./useUserData";
import { useRouter } from "next/router";
import styles from "./user-data.module.scss";

const UserData = () => {
  const onSuccess = () => {
    console.log("success (fetched data)");
  };
  const onError = () => {
    console.log("error fetching data");
  };

  const router = useRouter();
  const { id } = router.query;
  const userId = id;

  const { data, isLoading } = useUserData(userId, onSuccess, onError);

  if (isLoading) {
    return <h3 className={styles.container}>Loading....</h3>;
  }

  return (
    <div className={styles.container}>
      <Link href="/admin/users" className={styles.backArrow}>
        <img src="/images/np-back-arrow.svg" alt="back to users" />
        <h4>Back to Users</h4>
      </Link>

      <section className={styles.userActions}>
        <h3>User Details</h3>

        <div className={styles.buttonGroup}>
          <button className={styles.blacklist}>BLACKLIST USER</button>
          <button className={styles.activate}>ACTIVATE USER</button>
        </div>
      </section>

      <section className={styles.userDetails}>
        <div className={styles.div}>
          <img
            alt="user profile pics"
            className={styles.userAvatar}
            src="/images/dashboard-user-avatar.svg"
          />

          <div className={styles.userName}>
            <h3>
              {data?.data.profile.firstName} {data?.data.profile.lastName}{" "}
            </h3>
            <h4>LSQFf587g90</h4>
          </div>

          <img
            alt="divider"
            className={styles.divider}
            src="/images/line-divider.svg"
          />

          <div className={styles.userTier}>
            <h4>User&apos;s Tier</h4>
            <div className={styles.stars}>
              <img src="/images/np-star-filled.svg" alt="filled star" />
              <img src="/images/np-star-not-filled.svg" alt="empty star" />
              <img src="/images/np-star-not-filled.svg" alt="empty star" />
            </div>
          </div>

          <img
            alt="divider"
            className={styles.divider}
            src="/images/line-divider.svg"
          />

          <div className={styles.bankDetails}>
            <h3>
              {data?.data.profile.currency} {data?.data.accountBalance}
            </h3>
            <h4>{data?.data.accountNumber} / Providus Bank</h4>
          </div>
        </div>

        <div className={styles.userInfoTabs}>
          <h4 className={styles.tabsBorder}>General Details</h4>
          <h4 className={styles.tabsBorder}>Documents</h4>
          <h4 className={styles.tabsBorder}>Bank Details</h4>
          <h4 className={styles.tabsBorder}>Loans</h4>
          <h4 className={styles.tabsBorder}>Savings</h4>
          <h4 className={styles.tabsBorder}>App and System</h4>
        </div>
      </section>

      <section className={styles.generalDetails}>
        <h4>Personal Information</h4>
        <section className={styles.info}>
          <div>
            <h5>full name</h5>
            <h3>
              {data?.data.profile.firstName} {data?.data.profile.lastName}
            </h3>
          </div>
          <div>
            <h5>phone number</h5>
            <h3>{data?.data.phoneNumber}</h3>
          </div>
          <div>
            <h5>email address</h5>
            <h3>{data?.data.email}</h3>
          </div>

          <div>
            <h5>bvn</h5>
            <h3>{data?.data.profile.bvn}</h3>
          </div>
          <div>
            <h5>gender</h5>
            <h3>{data?.data.profile.gender}</h3>
          </div>
          <div>
            <h5>marital status</h5>
            <h3>Single</h3>
            {/* <h3>{data?.data}</h3> */}
          </div>
          <div>
            <h5>children</h5>
            <h3>None</h3>
            {/* <h3>{data?.data}</h3> */}
          </div>
          <div>
            <h5>type of residence</h5>
            <h3>Parents&apos;s Apartment</h3>
            {/* <h3>{data?.data}</h3> */}
          </div>
        </section>
        <img
          alt="divider"
          src="/images/divider.svg"
          className={styles.dividerH}
        />

        <h4>Education and Employment</h4>
        <section className={styles.info}>
          <div>
            <h5>level of education</h5>
            <h3>{data?.data.education.level}</h3>
          </div>
          <div>
            <h5>employment status</h5>
            <h3>{data?.data.education.employmentStatus}</h3>
          </div>
          <div>
            <h5>sector of employment</h5>
            <h3>{data?.data.education.sector}</h3>
          </div>
          <div>
            <h5>duration of employment</h5>
            <h3>{data?.data.education.duration}</h3>
          </div>{" "}
          <div>
            <h5>office email</h5>
            <h3>{data?.data.education.officeEmail}</h3>
          </div>
          <div>
            <h5>monthly income</h5>
            <h3>
              {data?.data.profile.currency}{" "}
              {data?.data.education.monthlyIncome[0]} -{" "}
              {data?.data.profile.currency}{" "}
              {data?.data.education.monthlyIncome[1]}
            </h3>
          </div>
          <div>
            <h5>loan repayment</h5>
            <h3>
              {" "}
              {data?.data.profile.currency} {data?.data.education.loanRepayment}
            </h3>
          </div>
        </section>
        <img
          alt="divider"
          src="/images/divider.svg"
          className={styles.dividerH}
        />

        <h4>Socials</h4>
        <section className={styles.info}>
          <div>
            <h5>twitter</h5>
            <h3>{data?.data.socials.twitter}</h3>
          </div>
          <div>
            <h5>facebook</h5>
            <h3>{data?.data.socials.facebook}</h3>
          </div>
          <div>
            <h5>instagram</h5>
            <h3>{data?.data.socials.instagram}</h3>
          </div>
        </section>
        <img
          alt="divider"
          src="/images/divider.svg"
          className={styles.dividerH}
        />

        <h4>Guarantor</h4>
        <section className={styles.info}>
          <div>
            <h5>full name</h5>
            <h3>
              {data?.data.guarantor.firstName} {data?.data.guarantor.lastName}
            </h3>
          </div>
          <div>
            <h5>phone number</h5>
            <h3>{data?.data.guarantor.phoneNumber}</h3>
          </div>
          <div>
            <h5> address</h5>
            <h3>{data?.data.guarantor.address} </h3>
          </div>
          <div>
            <h5>gender</h5>
            <h3>{data?.data.guarantor.gender} </h3>
          </div>
        </section>
      </section>
    </div>
  );
};

export default UserData;
