"use client";

// import styles from "@/app/room/[name]/single.module.css";
// import styles from "@/app/(root)/room/[name]/single.module.css";
import Image from "next/image";
import Link from "next/link";

import { Federo } from "next/font/google";
import { Room } from "@/types";
import Header from "../header/header";
import BreadcrumbHeader from "../BreadCrumbHeader";
import { cn } from "@/lib/utils";

const federo = Federo({
  subsets: ["latin"],
  weight: "400",
});

const Breadcrumb = ({ room }: { room: Room }) => {
  return (
    <div className="relative h-[50vmin] min-h-[350px] overflow-hidden">
      <div className="absolute inset-0 z-20 bg-black/70"></div>

      <Image
        src={room.imgUrl[1].original}
        alt=""
        width={1000}
        height={500}
        className="absolute inset-0 z-10 max-h-full w-full object-cover h-full"
      />
      <div className="h-full">
        <BreadcrumbHeader />

        <div className="relative z-50 contain min-h-full flex flex-col justify-center gap-2 text-white">
          <h3 className="text-[1.6rem] underline -translate-y-[70px]">
            <Link href="/rooms">Room</Link>
          </h3>
          <h1
            className={cn(
              "font-bold text-[clamp(2.7rem,5vw,4rem)] -translate-y-[70px]",
              federo.className
            )}
          >
            {room.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
