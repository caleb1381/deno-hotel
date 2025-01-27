import { cn } from "@/lib/utils";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { rooms } from "@/utils/rooms";
import Image from "next/image";
import Link from "next/link";

const OtherRooms = ({ activeRoom }: { activeRoom: string }) => {
  const others = rooms.filter((item) => item.name !== activeRoom);

  const items = others.map((item, index) => (
    <div key={index} className="relative md:rounded-md overflow-hidden">
      <Link href={`/room/${item.name.replaceAll(" ", "-").toLowerCase()}`}>
        <div className="absolute inset-0 bg-black/60" />
        <Image
          src={item.imgUrl[0].original}
          width={500}
          height={500}
          alt=""
          priority
          className="w-full object-cover object-left-top max-h-[480px] h-[350px] md:h-auto"
        />
        <p className="absolute right-7 bottom-7 text-2xl md:text-3xl font-playfair font-extralight z-50 text-lime">
          {item.name}
        </p>
      </Link>
    </div>
  ));
  return (
    <div>
      <p
        className={cn(
          "text-center text-3xl lg:text-6xl mt-5 font-playfair font-[500] text-gray-900"
        )}
      >
        Other Rooms & Suites
      </p>

      <div className="my-10 md:px-">
        <AliceCarousel
          autoPlay
          infinite
          items={items}
          responsive={{
            0: {
              items: 1,
            },
            785: {
              items: 2,
            },
          }}
          autoPlayInterval={5000}
          animationType="slide"
          animationDuration={1200}
          disableDotsControls
          keyboardNavigation
          //   mouseTracking
        />
      </div>
    </div>
  );
};

export default OtherRooms;
