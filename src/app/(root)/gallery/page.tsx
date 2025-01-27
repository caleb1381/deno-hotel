"use client";

import styles from "./gallery.module.css";

import GalleryComponent from "../../../components/gallery/gallery";

import { images } from "@/utils/images/images";
const GalleryContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <GalleryComponent images={images} />
      </div>
    </div>
  );
};

export default GalleryContainer;
