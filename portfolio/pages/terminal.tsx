/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import Head from "next/head";
import { CModal } from "@coreui/react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";
import React from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { resolveHref } from "next/dist/shared/lib/router/router";

function showModalInfo(setVisible) {
  setVisible(true);
}

function createCommands({ setVisible }) {
  return {
    info: () => {
      showModalInfo(setVisible);
    },
  };
}

function checkCommand(listCommands, command) {
  if (listCommands.hasOwnProperty(command)) {
    return listCommands[command];
  } else return "command not found";
}

export default function Texte({ setVisible }) {
  const [terminalLineData, setTerminalLineData] = React.useState([
    <div className={styles.terminalsize2}>
      <TerminalOutput>
        Bienvenue sur mon portfolio <span className={styles.emoji}>🖐️</span> !
        <br />
        Tape "<span className={styles.infotexte}>info</span>" pour obtenir plus
        d'informations sur moi.
        <br />
      </TerminalOutput>
      ,
    </div>,
  ]);

  const listCommands = createCommands({ setVisible });

  return (
    <div className={styles.container}>
      <Terminal
        name="Malki Rayane Portfolio"
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => {
          let result = checkCommand(listCommands, terminalInput);

          if (result === "command not found") {
            setTerminalLineData([
              ...terminalLineData,
              <TerminalOutput>Commande non trouvée 🤔</TerminalOutput>,
            ]);
          } else {
            result();
          }
        }}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
