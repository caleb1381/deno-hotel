import Hero from "@/components/hero/hero";
import styles from "./page.module.css";
import Offers from "@/components/offers/offers";
import About from "@/components/about/about";
import Services from "@/components/services/services";
import Gallery from "@/components/gallery/gallery";

import { images } from "@/utils/images/images";
import Rooms from "@/components/rooms/rooms";
import Testimonials from "@/components/testimonials/Testimonials";
import Faqs from "@/components/faqs/faqs";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ zIndex: "-1", position: "relative" }}>
        <Hero />
        <Offers />
        <About />
        <Services />
        <Gallery images={images} />
        <Rooms />
        <Testimonials />
        <Faqs />
        {/* <Contact />/ */}
      </div>
    </main>
  );
}
