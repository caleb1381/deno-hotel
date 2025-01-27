"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/nav/nav.module.css";
import { menuOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import Image from "next/image";
import MobileNav from "../mobileNav/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/utils/links";

const Nav = () => {
  const path = usePathname();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mobileStyle = {
    bar: {
      position: "absolute",
      right: "-5%",
      top: "calc(100% + 10px)",
      translate: showMobileNav ? "0" : "120% 0",
      transition: "all 500ms ease",
      background: "rgb(var(--very-dark-blue), .8)",
      width: "90%",
      backdropFilter: "blur(6px)",
      zIndex: 100,
      transform: "trasnslateX(4px)",
    },
  };
  return (
    <div className={isSticky ? styles.sticky : ""}>
      <div className={styles.nav}>
        <main>
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt=""
                width="120"
                height="80"
                priority
              />
            </Link>
          </div>
          <nav>
            <section>
              {links.map((link, i) => (
                <div key={i}>
                  <a href={link.link}>{link.name}</a>
                </div>
              ))}
            </section>
            <div className={styles.booking}>
              <Link
                href={
                  !path.includes("-r") ? `/rooms` : path.split("/")[2] + "/book"
                }
              >
                Book Now
              </Link>
            </div>
            <div
              className={styles.bar}
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <IonIcon icon={menuOutline}></IonIcon>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
};

export default Nav;
