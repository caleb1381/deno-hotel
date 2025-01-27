"use client";

import styles from "@/components/offers/offers.module.css";
import { Federo } from "next/font/google";

import { IonIcon } from "@ionic/react";
import {
  airplaneSharp,
  bedOutline,
  beerSharp,
  pizzaSharp,
  videocamSharp,
  wifiSharp,
} from "ionicons/icons";
import { cn } from "@/lib/utils";

const federo = Federo({
  subsets: ["latin"],
  weight: ["400"],
});

const Offers = () => {
  return (
    <div className={cn("md:mt-32", styles.offers)}>
      <main className={federo.className}>
        <div>
          <p className={styles.title}>
            EXPERIENCE A GOOD STAY, ENJOY FANTASTIC OFFERS
          </p>
          <p className={styles.subtitle}>
            FIND OUR FRIENDLY WELCOMING RECEPTION
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card__icon}>
              <IonIcon icon={bedOutline}></IonIcon>
            </div>

            <div className={styles.card__title}>
              <p>EXECUTIVE APARTMENTS</p>
            </div>
            <div className={styles.card__caption}>DENO HOTELS</div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__icon}>
              <IonIcon icon={wifiSharp}></IonIcon>
            </div>

            <div className={styles.card__title}>
              <p>Wireless Internet Access</p>
            </div>
            <div className={styles.card__caption}>DENO HOTELS</div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__icon}>
              <IonIcon icon={pizzaSharp}></IonIcon>
            </div>

            <div className={styles.card__title}>
              <p>Private Catering Services</p>
            </div>
            <div className={styles.card__caption}>DENO HOTELS</div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__icon}>
              <IonIcon icon={beerSharp}></IonIcon>
            </div>

            <div className={styles.card__title}>
              <p>Private Kitchenette</p>
            </div>
            <div className={styles.card__caption}>DENO HOTELS</div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__icon}>
              <IonIcon icon={videocamSharp}></IonIcon>
            </div>

            <div className={styles.card__title}>
              <p>CCTV Survelliance</p>
            </div>
            <div className={styles.card__caption}>DENO HOTELS</div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__icon}>
              <IonIcon icon={airplaneSharp}></IonIcon>
            </div>

            <div className={styles.card__title}>
              <p> Airport Pick-up </p>
            </div>
            <div className={styles.card__caption}>DENO HOTELS</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Offers;
