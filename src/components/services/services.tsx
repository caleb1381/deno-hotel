"use client";
import styles from "./services.module.css";
import { Federo, Oswald } from "next/font/google";
import { IonIcon } from "@ionic/react";
import { carSportOutline, fastFoodSharp } from "ionicons/icons";

const federo = Federo({
  subsets: ["latin"],
  weight: ["400"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "200"],
});

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <div className={styles.overlay}></div>
      <div className={oswald.className}>
        <p className={styles.center}>Our Services</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <IonIcon icon={carSportOutline}></IonIcon>
          </div>
          <div className={federo.className}>
            <p className={styles.title}>Airport pickup and drop</p>
          </div>
          <p>patronize with us for this great offers and services</p>
          <div>
            <li>24-hour pick up and drop service</li>
            {/* <li>24-hour Concierge service</li> */}
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <IonIcon icon={fastFoodSharp}></IonIcon>
          </div>
          <div className={federo.className}>
            <p className={styles.title}>24 Hour Restaurant</p>
          </div>
          <p>we are always available 24/7 everyday for your services.</p>
          <div>
            <li>24 hours room service</li>
            <li>24-hour Concierge service</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
