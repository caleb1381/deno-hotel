"use client";

import Image from "next/image";
import { Federo } from "next/font/google";
import styles from "./footer.module.css";
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";
import Link from "next/link";

import { links } from "../../utils/links";
const date = new Date();

const federo = Federo({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer style={{ background: "rgb(var(--dark-blue))" }}>
      <div className={federo.className}>
        <div className={styles.footer}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={300}
                height={300}
              />
              <p>Deno Hotels & Apartment</p>
            </div>
            <div className={styles.socials}>
              <Link href={"https://www.facebook.com/denohotelapartments"}>
                <IonIcon icon={logoFacebook}></IonIcon>
              </Link>
              <Link href={"https://twitter.com/DenoHotels77851"}>
                <IonIcon icon={logoTwitter}></IonIcon>
              </Link>
              <Link
                href={
                  "https://instagram.com/denohotels?igshid=NTc4MTIwNjQ2YQ=="
                }
              >
                <IonIcon icon={logoInstagram}></IonIcon>
              </Link>
            </div>
          </div>
          <div className={styles.center}>
            <p className={styles.title}>CONTACT US</p>
            <div>
              <a href="mailto:denohotels@gmail.com">denohotels@gmail.com</a>{" "}
              <br />
              <br />
              <br />
              <a href="tel:08140317561">08140317561</a> <br /> <br />
              <a href="tel:08065508406">08065508406</a>
            </div>
            <br />
            <br />
            <br />
            <p className={styles.address}>
              Misau Road, Off Kirfi Road, New GRA Bauchi, 740102 Bauchi, Nigeria
            </p>
          </div>
          <div className={styles.links}>
            <p className={styles.title}>Links</p>
            <div>
              {links.map((link, i) => {
                return (
                  <div key={i}>
                    <a href={link.link}>{link.name}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.footnote}>
          <p>
            © {date.getFullYear()} Deno Hotels & Apartments. All right reserved.
          </p>
          <p>
            <Link href="https://ifeoluwa-odediran.netlify.app/#contact">
              Design & Developed By Ife and Caleb Tech 08135168529
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
