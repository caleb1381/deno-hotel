import styles from "./about.module.css";
import Image from "next/image";
import { Federo } from "next/font/google";

const federo = Federo({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.image}>
        <Image src="/images/outside.jpg" alt="" width="500" height="500" />
      </div>
      <div className={styles.body}>
        <h1 className={federo.className}>About Deno Hotels</h1>
        <p>
          DENO HOTELS is a magnificient building offering lodging to guests and
          visitors. The hotel offers warm and cozy bedding arangments. we offer
          rooms of varying sizes and facilities and guests can choose as they
          require. onsite parking is available to guests that require parking.
          wifi and dstv services are also available to guess. come in today for
          a taste of premium lodging Deno hotel is a budget hotel in Misau Road,
          off kirfi Road new GRA Bauchi, Bauchi State . Deno Hotels and
          Apartments also offers our services to customers such as Executive
          Apartments, Wireless Internet Access, Private Catering Services,
          Private Kitchenette, Fully Secure and CCTV Survelliance and Airport
          Pick-up and Drop.
        </p>
      </div>
    </div>
  );
};

export default About;
