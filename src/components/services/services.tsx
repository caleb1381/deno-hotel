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
            <p className={styles.title}>Airport Pickup and Drop</p>
          </div>
          <p>Patronize us for these great offers and services.</p>
          <div>
            <li>24-hour pick-up and drop service</li>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <IonIcon icon={fastFoodSharp}></IonIcon>
          </div>
          <div className={federo.className}>
            <p className={styles.title}>24-Hour Restaurant</p>
          </div>
          <p>We are always available 24/7 every day for your services.</p>
          <div>
            <li>24-hour room service</li>
            <li>24-hour Concierge service</li>
          </div>
        </div>
      </div>

      {/* Event Halls Section */}
      <div className={styles.eventHalls}>
        <div className={oswald.className}>
          <p className={styles.center}>Event Halls</p>
        </div>
        
        <div className={federo.className}>
        <p className={styles.title}>We offer event halls for different occasions</p>
        </div>
        <div className={styles.halls}>
          <div className={federo.className}>
            <p className={styles.hall}>Small Hall</p>
            <p className={styles.hall}>Capacity: 60 - 70 people</p>
          </div>
          <div className={styles.hall}>
            <p className={styles.hallTitle}>Large Hall</p>
            <p>Capacity: 150 - 250 people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
