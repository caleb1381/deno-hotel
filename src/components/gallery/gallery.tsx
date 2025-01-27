"use client";
import styles from "./gallery.module.css";
import { Oswald, Federo } from "next/font/google";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Link from "next/link";
import Breadcrumb from "../breadcrumb/breadcrumb";
import { Image } from "@/types";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200"],
});
const federo = Federo({
  subsets: ["latin"],
  weight: ["400"],
});

const GalleryComponent = ({ images }: { images: Image[] }) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const path = usePathname();
  path === "/" && (images = images.slice(0, 5));
  return (
    <section>
      {path !== "/" && <Breadcrumb />}
      <div className={styles.gallery} id="gallery">
        {path == "/" && (
          <div className={oswald.className}>
            <p className={styles.title}>Our Gallery</p>
          </div>
        )}

        <div
          className={styles.gallery}
          style={{ paddingInline: path !== "/" ? "10%" : "" }}
        >
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>

        {path == "/" && (
          <Link href="/gallery" className={styles.link}>
            View More
          </Link>
        )}
      </div>
    </section>
  );
};

export default GalleryComponent;
