import React from "react";
import styles from "./search.module.scss";

type Props = {
  placeholder: string;
};

const SearchBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles.searchButton}
        placeholder={props.placeholder}
      />
      <div className={styles.searchIcon}>
        <img
          className={styles.icon}
          alt="search icon"
          src="/images/search-icon.svg"
        />
      </div>
    </div>
  );
};

export default SearchBar;
