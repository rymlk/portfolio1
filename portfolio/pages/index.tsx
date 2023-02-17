/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Profile from "./profile";
import Terminal from "./terminal";
import Deco from "./deco";
import Textetitre from "./textetitre";
import { ModalInfo } from "../components/modal";
import { useState } from "react";
import Card from "./card";
import Tel from "./tel";
import Tel2 from "./tel2";
import Pc2 from "./pc2";
import Slider from "./slider";
import Slider2 from "./slider2";
import Socialmedia from "./socialmedia";
import { ModalInfo6 } from "../components/modal2";
import MyComponent from "../components/modal3";
import DividerStack from "../components/modal4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Head>
        <title>Malki Rayane • Mon Portfolio 📃</title>
        <link rel="icon" href="/favicon.icon" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <div></div>
        <Deco />
        <div data-aos="zoom-in-up">
          <Profile />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.titre1}>Bonjour, je suis Rayane</div>
        <div className={styles.titre15}>
          Bonjour, je m'appelle Rayane et je suis
        </div>
        <div className={styles.titre2}>
          <div className={styles.titre4}>
            <Textetitre />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <img
            className={styles.banner4}
            data-aos="zoom-in"
            src="banner-4.png"
            alt=""
          />
          <div className={styles.modalzeb} data-aos="zoom-in-down">
            <MyComponent />
          </div>
        </div>
        <div className={styles.terminalsize}>
          <Terminal setVisible={(val) => setVisible(val)} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className={styles.testjuste}>
          <div>
            <img
              className={styles.banner1}
              data-aos="zoom-in"
              src="banner-1.png"
              alt=""
            />
            <div className={styles.titre5}>Mes projets</div>
          </div>
          <div className={styles.projet1}>
            <div>
              <Card />
            </div>
            <div>
              <Tel />
              <span className={styles.titre10}>Code Camp #1</span> <p />{" "}
              <span className={styles.titre11}>
                Projet <br className={styles.separateur2} /> Mentor Goal
              </span>
            </div>
          </div>
          <div className={styles.projet2}>
            <div>
              <Pc2 />
            </div>
            <div>
              <Tel2 />
            </div>
            <div className={styles.groupetexte1}>
              <span className={styles.titre12}>MyWebsite</span> <p />{" "}
              <span className={styles.titre13}>Projet GomuShop</span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <img
            className={styles.banner2}
            data-aos="zoom-in"
            src="banner-2.png"
            alt=""
          />
          <div className={styles.titre6}>Mes compétences</div>
          <div className={styles.frontend}>
            <img
              className={styles.frontendcard}
              data-aos="fade-up-right"
              data-aos-anchor-placement="top-bottom"
              src="front-end-card.png"
              alt=""
            />
            <img
              className={styles.cardfull1}
              data-aos="fade-up-right"
              src="cardxl-full1.png"
              alt=""
            />
          </div>
          <div className={styles.backend}>
            <img
              className={styles.backendcard}
              data-aos="fade-up-left"
              data-aos-anchor-placement="top-bottom"
              src="back-end-card.png"
              alt=""
            />
            <img
              className={styles.cardfull2}
              data-aos="fade-up-left"
              src="cardxl-full2.png"
              alt=""
            />
          </div>
          <div className={styles.design}>
            <img
              className={styles.designcard}
              data-aos="fade-up-right"
              data-aos-anchor-placement="top-bottom"
              src="design-card.png"
              alt=""
            />
            <img
              className={styles.cardfull3}
              data-aos="fade-up-right"
              src="cardxl-full3.png"
              alt=""
            />
          </div>
          <div className={styles.separateur3}></div>
          <div className={styles.cardslide1}>
            <Slider />
          </div>
          <div className={styles.cardslide2}>
            <Slider2 />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <img
              className={styles.banner3}
              data-aos="zoom-in"
              src="banner-3.png"
              alt=""
            />

            <div className={styles.titre7}>Me contacter</div>
          </div>
          <div data-aos="flip-down">
            <Socialmedia />
          </div>
          <div className={styles.groupefooter}>
            <div className={styles.footer}>
              portfolio by MALKI Rayane © 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
