"use client";
import { usePathname } from "next/navigation";

import styles from "./rooms.module.css";
import { Oswald } from "next/font/google";

import { rooms } from "@/utils/rooms";
import RoomComponent from "../roomComponent/RoomComponent";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300"],
});

const Rooms = () => {
  const path = usePathname();
  return (
    <div className={styles.rooms} id="rooms">
      <div className={styles.title}>
        <p className={oswald.className}>Our Rooms</p>
      </div>
      <main>
        {rooms.map((room) => (
          <RoomComponent key={room.name} room={room} />
        ))}
      </main>
    </div>
  );
};

export default Rooms;
