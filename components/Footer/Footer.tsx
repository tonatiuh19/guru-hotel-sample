import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Made with&nbsp;
        <FaHeart color="red" />
        &nbsp;by&nbsp;
        <a
          href="https://github.com/tonatiuh19"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tonatiuh19
        </a>
      </span>
    </footer>
  );
};

export default Footer;
