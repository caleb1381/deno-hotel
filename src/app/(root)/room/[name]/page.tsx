"use client";
import { useParams } from "next/navigation";
import { rooms } from "@/utils/rooms";
import Breadcrumb from "@/components/room-breadcrumb/bread";

import RoomGallery from "@/components/roomGallery/roomGallery";

// import styles from "./single.module.css";
import { Room } from "@/types";
import FormContainer from "@/components/form/form";
import { EnquiryForm } from "@/components/RoomEnquiryForm";
import Link from "next/link";

import OtherRooms from "@/components/Other-rooms";

const Page = () => {
  const defaultRoom: Room = {
    id: "",
    name: "Default Room",
    desc: "",
    price: 0,
    guests: 0,
    rooms: 0,
    sittingRoom: 0,
    toilets: 0,
    imgUrl: [],
    features: new Map(),
    additionals: [],
  };
  const { name } = useParams();
  const room = rooms.find((room) => room.id === name) || defaultRoom;

  const synonyms = [
    "Sophisticated",
    "Stylish",
    "Graceful",
    "Refined",
    "Classy",
    "Polished",
    "Tasteful",
    "Exquisite",
  ];

  function getRandomSynonym() {
    const randomIndex = Math.floor(Math.random() * synonyms.length);
    return synonyms[randomIndex];
  }

  return (
    <div>
      <Breadcrumb room={room} />

      <main className="my-10">
        <header className="flex justify-center gap-4 items-center">
          <div className="w-28 border-t-2  border-slate-900 hidden md:block"></div>
          <div className="text-xl lg:text-2xl text-gray-600">{room.name}</div>
        </header>

        <p className="text-center text-3xl lg:text-6xl mt-5 font-playfair font-[500] text-gray-900">
          {getRandomSynonym()} {room.name.split(" ")[0]} Room
        </p>

        <p className="container mx-auto text-lg leading-loose text-gray-700 text-center mt-5">
          {room.desc}
        </p>

        <div className="flex justify-center gap-3 items-center mt-10">
          <EnquiryForm />
          <Link
            href=""
            className="border-2 px-8 h-10 rounded-md flex items-center text-xl font-playfair border-slate-700"
          >
            Book now
          </Link>
        </div>

        {/* Amenities */}

        <div className="container mx-auto mt-16">
          <p className="text-center text-3xl lg:text-5xl mt-5 font-playfair font-[500] text-gray-800 capitalize">
            Amenities
          </p>

          <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10">
            <div className="flex-grow-[3]">
              <p className="text-2xl font-bold mb-5">Features</p>
              <ul className="flex flex-col gap-3 text-lg">
                {[...room.features.keys()].map((item) => {
                  return (
                    <li key={item}>
                      <b>{item}:</b> {room.features.get(item)}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex-grow-[2]">
              <p className="text-2xl font-bold mb-5">Additional Features</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {room.additionals.map((item) => {
                  return (
                    <li key={item.text} className="flex items-center gap-2">
                      <div className="text-2xl">
                        <item.icon />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>

        {/* gallery */}

        <div className="mt-20">
          <RoomGallery images={room.imgUrl} />
        </div>

        <div className="mt-20">
          <OtherRooms activeRoom={room.name} />
        </div>
      </main>
    </div>
  );
};

export default Page;
