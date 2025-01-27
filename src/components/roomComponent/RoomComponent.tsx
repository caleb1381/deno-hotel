import Image from "next/image";
import { usePathname } from "next/navigation";
import { Federo } from "next/font/google";
import { IonIcon } from "@ionic/react";
import {
  starHalfSharp,
  starSharp,
  bedSharp,
  contract,
  people,
} from "ionicons/icons";

import styles from "@/components/rooms/rooms.module.css";
import Link from "next/link";
import { Room } from "@/types";

const federo = Federo({
  subsets: ["latin"],
  weight: ["400"],
});
const RoomComponent = ({ room }: { room: Room }) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(room.price);

  const path = usePathname();

  const styling = {
    card: {
      maxWidth: path == "/rooms" ? "500px" : "",
    },
  };

  return (
    <div>
      <div className={styles.card} style={styling.card}>
        <div className={styles.card__image}>
          <div>
            <Image
              src={room.imgUrl[0].original}
              alt=""
              width="280"
              height="320"
            />
          </div>
          <div className={styles.tag}>
            <p className={federo.className}>{room.name}</p>
          </div>
          <div className={styles.price}>
            <p className={federo.className}>{price}</p>
          </div>
        </div>
        <div className={styles.ratings}>
          <IonIcon icon={starSharp}></IonIcon>
          <IonIcon icon={starSharp}></IonIcon>
          <IonIcon icon={starSharp}></IonIcon>
          <IonIcon icon={starSharp}></IonIcon>
          <IonIcon icon={starHalfSharp}></IonIcon>
        </div>
        <div
          className={styles.desc}
          style={{ height: path === "/rooms" ? "fit-content" : "" }}
        >
          {room.desc}
        </div>

        <div
          style={{ display: path == "/" ? "none" : "" }}
          className={styles.details}
        >
          <div>
            <span>
              <IonIcon icon={bedSharp}></IonIcon>
            </span>
            <span>{room.rooms} Room</span>
          </div>
          <div>
            <span>
              <IonIcon icon={people}></IonIcon>
            </span>
            <span>{room.guests} Guests</span>
          </div>
        </div>
        <div className={styles.link}>
          <Link href={`/room/${room.name.replaceAll(" ", "-").toLowerCase()}`}>
            {"Discover"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;
