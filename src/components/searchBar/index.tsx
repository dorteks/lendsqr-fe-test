import React from "react";
import styles from "./search.module.scss";

type Props = {
  placeholder: string;
};

const SearchBar = (props: Props) => {
  return (
    <input className={styles.searchButton} placeholder={props.placeholder} />
  );
};

export default SearchBar;
