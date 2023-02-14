/* eslint-disable react/no-unescaped-entities */
import {
  CModal,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
} from "@coreui/react";
import { useState } from "react";
import React from "react";

export function ModalInfo6() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton color="info" onClick={() => setVisible(!visible)}>
        Clique juste ici 👨‍💻{" "}
      </CButton>
      <CModal
        backdrop={false}
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Bienvenue sur mon portfolio 🖐️</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            👨‍🎓 • Actuellement en année préparatoire à l'<strong>ETNA</strong> et
            à la recherche d'une <strong>alternance</strong> pour{" "}
            <strong>Mars 2023</strong> et dans le but d'obtenir un Master of
            Science 1&2 Architecte logiciel, développeur d'application web et
            mobile.
          </p>
          <p>
            📖 • Passionné par le web et les nouvelles technologies depuis
            petit, je suis actuellement à la recherche d'une{" "}
            <strong>alternance</strong> afin de parfaire ma formation de{" "}
            <strong>développeur d'application web et mobile</strong>. Je suis en
            outre dynamique, curieux, sociable et doté d'une grande capacité
            d'adaptation et de communication.
          </p>
          <p>
            👨‍💻 • Je maîtrise <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>PHP</strong>, <strong>TYPESCRIPT</strong> &{" "}
            <strong>JAVASCRIPT</strong>, <strong>REACT</strong>,{" "}
            <strong>NEXT</strong>, <strong>NODEJS</strong>, <strong>GIT</strong>
            , <strong>SQL</strong> & <strong>MARIADB</strong>.
          </p>
          <p>
            D'ailleurs, je possède aussi de très nombreuses connaissances en{" "}
            <strong>PHOTOSHOP</strong>, <strong>AFTER EFFECT</strong> et sur
            <strong> SONY VEGAS PRO</strong>.
          </p>
          <p>
            👇🏼 • Vous avez la possibilité d'accéder à mon CV en cliquant sur le
            bouton juste en-dessous.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setVisible(false)}>
            Fermer ❌
          </CButton>
          <CButton
            href="cvmalkirayane.pdf"
            download="CV-MALKI-Rayane.pdf"
            color="success"
            onClick={() => setVisible(false)}
          >
            Mon CV 📃
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}
