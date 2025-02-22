"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Intro from "../Intro";
import Header from "../header/header";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { TypeAnimation } from "react-type-animation";
import HeroForm from "../HeroForm";

const images = ["/images/hero2.jpg", "/images/hero1.jpeg"];

const items = images.map((image, index) => (
  <Image
    src={image}
    width={3000}
    height={1000}
    key={index}
    alt=""
    priority
    className="w-full h-full object-cover object-left-top"
  />
));

const Hero = () => {
  return (
    <div className="hero " id="home">
      <div className="hero-top">
        <Intro />
        <Header />
      </div>

      <div className="relative">
        <AliceCarousel
          items={items}
          autoPlay
          infinite
          autoPlayInterval={5000}
          animationType="slide"
          animationDuration={1200}
          disableDotsControls
        />

        <section className="hero_content">
          <section>
            <TypeAnimation
              sequence={[
                "Indulge luxury hotel experience in Bauchi.",
                2000,
                "Discover top hotel experience in Bauchi.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "clamp(36px, 4vw, 72px)",
                color: "#ffce14",
                fontWeight: "700",
              }}
              repeat={Infinity}
            />

            <p className="subtext">Enjoy comfort of the best hotel in Bauchi</p>
            <p className="subtitle">GET ACCOMMODATION TODAY</p>

            <HeroForm />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Hero;
