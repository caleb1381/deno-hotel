"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../map/map"), {
  ssr: false,
});

import styles from "./contact.module.css";
import { Federo } from "next/font/google";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import {
  callOutline,
  locationOutline,
  mailUnreadOutline,
} from "ionicons/icons";
import Breadcrumb from "../breadcrumb/breadcrumb";

const federo = Federo({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <div>
      <Breadcrumb />
      <div className={styles.contact_container} id="contact">
        <main>
          <section className={styles.contact}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <IonIcon icon={callOutline}></IonIcon>
                </div>
                <div>
                  <p className={styles.title}>Phone Number</p>
                  <p className={styles.subtitle}>
                    <Link href="tel:08065508406">+2348065508406</Link>
                  </p>
                </div>
              </div>
              {/* <div className={styles.card}>
                <div className={styles.icon}>
                  <IonIcon icon={callOutline}></IonIcon>
                </div>
                <div>
                  <p className={styles.title}>Phone Number</p>
                  <p className={styles.subtitle}>
                    <Link href="tel:08065508406">+2348065508406</Link>
                  </p>
                </div>
              </div> */}

              <div className={styles.card}>
                <div className={styles.icon}>
                  <IonIcon icon={mailUnreadOutline}></IonIcon>
                </div>
                <div>
                  <p className={styles.title}>Email Address</p>
                  <p className={styles.subtitle}>
                    <Link href="mailto:denohotels@gmail.com">
                      denohotels@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <IonIcon icon={locationOutline}></IonIcon>
                </div>
                <div>
                  <p className={styles.title}>Location</p>
                  <p className={styles.subtitle}>
                    Misau Road, Off Kirfi Road, New GRA Bauchi, 740102 Bauchi,
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <h2>Send a Message</h2>
              <h4>Grab a cup of coffe and get a message across to us....</h4>
              <form>
                <div className={styles.form_control}>
                  <div>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email address" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
                <div>
                  <textarea cols={30} rows={5} placeholder="Message"></textarea>
                </div>
                <div>
                  <button>Send Message</button>
                </div>
              </form>
            </div>
          </section>
          <section className={styles.map}>
            <h2>Find Us on Google Map</h2>
            <div>
              <Map />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
