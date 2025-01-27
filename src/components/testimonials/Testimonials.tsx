"use client";

import Image from "next/image";
import styles from "./testimonials.module.css";
import { Federo } from "next/font/google";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const federo = Federo({
  subsets: ["latin"],
  weight: "400",
});

const items = [
  <div className={federo.className} key={11}>
    <p className={styles.review}>
      My stay at Deno Hotel was marked by exceptional service and hospitality.
      The staff went above and beyond to ensure my comfort throughout my visit.
      From the moment I arrived until my departure, I felt welcomed and well
      taken care of.
    </p>
    <div>
      <p className={styles.reviewer}>Jerry</p>
    </div>
  </div>,
  <div className={federo.className} key={21}>
    <p className={styles.review}>
      Deno Hotel&apos;s location was perfect for my trip. It was centrally
      located, making it easy to explore the city&apos;s attractions and enjoy
      the local culture. I appreciated the convenience of having key landmarks
      within walking distance.
    </p>
    <div>
      <p className={styles.reviewer}>Usman</p>
    </div>
  </div>,
  <div className={federo.className} key={31}>
    <p className={styles.review}>
      The hotel&apos;s amenities were top-notch. The fitness center was
      well-equipped, and the spa offered a range of relaxing treatments.
      Additionally, the rooftop bar provided stunning views of the city and was
      a great place to unwind.
    </p>
    <div>
      <p className={styles.reviewer}>Isah</p>
    </div>
  </div>,
];

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/images/testimonials3.png"
          alt=""
          width={1000}
          height={800}
        />
      </div>

      <div className={styles.slide}>
        <AliceCarousel
          items={items}
          autoPlay={true}
          autoPlayInterval={8000}
          autoPlayStrategy="default"
          infinite={true}
          disableButtonsControls
          disableSlideInfo={true}
          animationType="slide"
          animationEasingFunction="ease-in-out"
          // disableDotsControls={true}
          mouseTracking={true}
        />
      </div>
    </div>
  );
};

export default Testimonials;
