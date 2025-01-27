"use client";

import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { arrowDown, arrowUp } from "ionicons/icons";
import { Questions, Styles } from "@/types";

const Faq = ({ question }: Questions) => {
  const [open, setOpen] = useState(false);
  const styles: Styles = {
    container: {
      marginBottom: "0",
    },
    box: {
      paddingInline: "30px",
      paddingBlock: open ? "24px" : "0",
      transition: "padding-block 400ms ease",
    },
    question: {
      padding: "24px 30px",
      display: "flex",
      gap: "50px",
      justifyContent: "space-between",
      alignItems: "center",
      background: open ? "rgb(var(--dark-blue))" : "",
      color: open ? "white" : "",
      fontSize: "1.4rem",
      border: "2px solid rgb(var(--dark-blue))",
    },
    answer: {
      boxSizing: "border-box",
      border: "1px solid red",
      borderTop: "none",
      opacity: open ? "1" : "0",
      fontSize: "1.2rem",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.question}>
        <p id="question">{question.q}</p>
        <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
          {open ? <IonIcon icon={arrowUp} /> : <IonIcon icon={arrowDown} />}
        </div>
      </div>
      <div style={styles.answer} id="answer">
        <div style={styles.box}>{question.a}</div>
      </div>
    </div>
  );
};

export default Faq;
