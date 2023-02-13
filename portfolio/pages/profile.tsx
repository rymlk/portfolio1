/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <div>
      <div>
        <img className={styles.photo1} src="profile-test.png" alt="" />
        <img className={styles.memoji1} src="mem-3.png" alt="" />
      </div>
    </div>
  );
}
