import { Room } from "@/types";
import {
  Wifi,
  HandPlatter,
  Clock10,
  Coffee,
  Anvil,
  UtilityPole,
  ShieldPlus,
  Landmark,
  Utensils,
  Wine,
  Binoculars,
  Cctv,
} from "lucide-react";

export const rooms: Room[] = [
  {
    id: "presidential-room",
    name: "Presidential Room",
    desc: "Welcome to our prestigious and opulent Presidential Suite. This luxurious accommodation is designed to provide the utmost comfort, privacy, and sophistication for dignitaries, diplomats, and discerning guests.",
    price: 90000,
    guests: 1,
    rooms: 2,
    sittingRoom: 1,
    toilets: 3,
    imgUrl: [
      {
        original: "/images/15.jpg",
        thumbnail: "/images/15.jpg",
        originalClass: "gallery__original",
      },
      {
        original: "/images/4.jpg",
        thumbnail: "/images/4.jpg",
        originalClass: "gallery__original",
      },
      {
        original: "/images/deno-hotels/bedroom.jpeg",
        thumbnail: "/images/deno-hotels/bedroom.jpeg",
        originalClass: "gallery__original",
      },
      {
        original: "/images/deno-hotels/presedential-dinning.jpeg",
        thumbnail: "/images/deno-hotels/presedential-dinning.jpeg",
        originalClass: "gallery__original",
      },
      {
        original: "/images/6.jpg",
        thumbnail: "/images/6.jpg",
        originalClass: "gallery__original",
      },
    ],
    features: new Map([
      [
        "Kitchenette",
        "Two room large palour guest toilet and kitchenette.",
      ],
      [
        "Queen sized bed",
        "Enjoy a good night's sleep on our plush queen sized bed, complete with soft linens and comfortable pillows.",
      ],
      [
        "Workstation",
        "Need to catch up on some work during your stay? Our studio rooms come equipped with a dedicated workstation and high speed internet access to ensure you remain productive.",
      ],

      [
        "Ensuite bathroom",
        "The ensuite bathroom features a modern shower, complimentary toiletries, and fresh towels.",
      ],
      [
        "Air conditioning",
        "Stay cool and comfortable year round with individual air conditioning units in every studio room.",
      ],
      [
        "Flat screen TV",
        "Kick back and relax in front of the 36 inches flat screen TV, which offers a variety of cable channels for your entertainment.",
      ],
    ]),
    additionals: [
      {
        text: "Complimentary WiFi throughout the property",
        icon: Wifi,
      },
      {
        text: "Daily housekeeping service",
        icon: HandPlatter,
      },
      {
        text: "24 hour front desk assistance",
        icon: Clock10,
      },
      {
        text: "In room coffee and tea making facilities",
        icon: Coffee,
      },
      {
        text: "Iron and ironing board available upon request",
        icon: Anvil,
      },
      {
        text: "24hrs electricity (power grid, power plant, solar)",
        icon: UtilityPole,
      },
      {
        text: "24hrs Armed security ",
        icon: ShieldPlus,
      },
      {
        text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
        icon: Landmark,
      },
      {
        text: "Cosy restaurant",
        icon: Utensils,
      },
      {
        text: "Bush bar",
        icon: Wine,
      },
      {
        text: "Green garden",
        icon: Binoculars,
      },
      {
        text: "Crystal clear CCTV camera with nite mode.",
        icon: Cctv,
      },
    ],
  },
  {
    id: "ambassadorial-room",
    name: "Ambassadorial Room",
    desc: "Welcome to our prestigious and opulent Ambassadorial Suite. This luxurious accommodation is designed to provide the utmost comfort, privacy, and sophistication for dignitaries, diplomats, and discerning guests.",
    price: 70000,
    guests: 1,
    rooms: 2,
    sittingRoom: 1,
    toilets: 2,
    imgUrl: [
      { original: "/images/13.jpg", thumbnail: "/images/13.jpg" },
      { original: "/images/14.jpg", thumbnail: "/images/14.jpg" },
      {
        original: "/images/7.jpg",
        thumbnail: "/images/7.jpg",
        originalClass: "gallery__original",
      },
      {
        original: "/images/deno-hotels/ambaseedorial.jpeg",
        thumbnail: "/images/deno-hotels/ambaseedorial.jpeg",
        originalClass: "gallery__original",
      },
    ],
    features: new Map([
      [
        "Queen sized bed",
        "Enjoy a good night's sleep on our plush queen sized bed, complete with soft linens and comfortable pillows.",
      ],
      [
        "Workstation",
        "Need to catch up on some work during your stay? Our studio rooms come equipped with a dedicated workstation and high speed internet access to ensure you remain productive.",
      ],
      [
        "Kitchenette",
        "Two rooms with kitchenette",
      ],
      [
        "Ensuite bathroom",
        "The ensuite bathroom features a modern shower, complimentary toiletries, and fresh towels.",
      ],
      [
        "Air conditioning",
        "Stay cool and comfortable year round with individual air conditioning units in every studio room.",
      ],
      [
        "Flat screen TV",
        "Kick back and relax in front of the flat screen TV, which offers a variety of cable channels for your entertainment.",
      ],
    ]),
    additionals: [
      {
        text: "Complimentary WiFi throughout the property",
        icon: Wifi,
      },
      {
        text: "Daily housekeeping service",
        icon: HandPlatter,
      },
      {
        text: "24 hour front desk assistance",
        icon: Clock10,
      },
      {
        text: "In room coffee and tea making facilities",
        icon: Coffee,
      },
      {
        text: "Iron and ironing board available upon request",
        icon: Anvil,
      },
      {
        text: "24hrs electricity (power grid, power plant, solar)",
        icon: UtilityPole,
      },
      {
        text: "24hrs Armed security ",
        icon: ShieldPlus,
      },
      {
        text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
        icon: Landmark,
      },
      {
        text: "Cosy restaurant",
        icon: Utensils,
      },
      {
        text: "Bush bar",
        icon: Wine,
      },
      {
        text: "Green garden",
        icon: Binoculars,
      },
      {
        text: "Crystal clear CCTV camera with nite mode.",
        icon: Cctv,
      },
    ],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    desc: "Welcome to our luxurious and spacious executive rooms. Designed with the discerning traveler in mind, these rooms offer a perfect blend of comfort, style, and functionality.",
    price: 50000,
    guests: 2,
    rooms: 1,
    imgUrl: [
      {
        original: "/images/executive3.jpg",
        thumbnail: "/images/executive3.jpg",
      },
      {
        original: "/images/executive2.jpg",
        thumbnail: "/images/executive2.jpg",
      },
      {
        original: "/images/executive1.jpg",
        thumbnail: "/images/executive1.jpg",
      },
      {
        original: "/images/executive4.jpg",
        thumbnail: "/images/executive4.jpg",
      },
    ],
    features: new Map([
      [
        "Queen sized bed",
        "Enjoy a good night's sleep on our plush queen sized bed, complete with soft linens and comfortable pillows.",
      ],
      [
        "Workstation",
        "Need to catch up on some work during your stay? Our studio rooms come equipped with a dedicated workstation and high speed internet access to ensure you remain productive.",
      ],
      [
        "Kitchenette",
        "Each studio room is equipped with a small kitchenette that includes a mini      refrigerator, microwave, and basic utensils, allowing you to prepare light meals or snacks at your convenience.",
      ],
      [
        "Ensuite bathroom",
        "The ensuite bathroom features a modern shower, complimentary toiletries, and fresh towels.",
      ],
      [
        "Air conditioning",
        "Stay cool and comfortable year round with individual air conditioning units in every studio room.",
      ],
      [
        "Flat screen TV",
        "Kick back and relax in front of the flat screen TV, which offers a variety of cable channels for your entertainment.",
      ],
    ]),
    additionals: [
      {
        text: "Complimentary WiFi throughout the property",
        icon: Wifi,
      },
      {
        text: "Daily housekeeping service",
        icon: HandPlatter,
      },
      {
        text: "24 hour front desk assistance",
        icon: Clock10,
      },
      {
        text: "In room coffee and tea making facilities",
        icon: Coffee,
      },
      {
        text: "Iron and ironing board available upon request",
        icon: Anvil,
      },
      {
        text: "24hrs electricity (power grid, power plant, solar)",
        icon: UtilityPole,
      },
      {
        text: "24hrs Armed security ",
        icon: ShieldPlus,
      },
      {
        text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
        icon: Landmark,
      },
      {
        text: "Cosy restaurant",
        icon: Utensils,
      },
      {
        text: "Bush bar",
        icon: Wine,
      },
      {
        text: "Green garden",
        icon: Binoculars,
      },
      {
        text: "Crystal clear CCTV camera with nite mode.",
        icon: Cctv,
      },
    ],
  },
  // {
  //   id: "standard-room",
  //   name: "Standard Room",
  //   desc: "Our superior rooms are designed to provide you with a luxurious and comfortable stay. With elegant decor and top   notch amenities, these rooms offer a truly exceptional experience.",
  //   price: 40000,
  //   guests: 2,
  //   rooms: 1,
  //   imgUrl: [
  //     { original: "/images/standard2.jpg", thumbnail: "/images/standard2.jpg" },
  //     {
  //       original: "/images/executive1.jpg",
  //       thumbnail: "/images/standard1.jpg",
  //     },
  //     {
  //       original: "/images/executive3.jpg",
  //       thumbnail: "/images/standard3.jpg",
  //     },
  //     {
  //       original: "/images/deno-hotels/bathing shower.jpeg",
  //       thumbnail: "/images/deno-hotels/bathing shower.jpeg",
  //     },
  //   ],

  //   features: new Map([
  //     [
  //       "Queen sized bed",
  //       "Enjoy a good night's sleep on our plush queen sized bed, complete with soft linens and comfortable pillows.",
  //     ],
  //     [
  //       "Workstation",
  //       "Need to catch up on some work during your stay? Our studio rooms come equipped with a dedicated workstation and high speed internet access to ensure you remain productive.",
  //     ],
  //     [
  //       "Kitchenette",
  //       "Each studio room is equipped with a small kitchenette that includes a mini      refrigerator, microwave, and basic utensils, allowing you to prepare light meals or snacks at your convenience.",
  //     ],
  //     [
  //       "Ensuite bathroom",
  //       "The ensuite bathroom features a modern shower, complimentary toiletries, and fresh towels.",
  //     ],
  //     [
  //       "Air conditioning",
  //       "Stay cool and comfortable year round with individual air conditioning units in every studio room.",
  //     ],
  //     [
  //       "Flat screen TV",
  //       "Kick back and relax in front of the flat screen TV, which offers a variety of cable channels for your entertainment.",
  //     ],
  //   ]),
  //   additionals: [
  //     {
  //       text: "Complimentary WiFi throughout the property",
  //       icon: Wifi,
  //     },
  //     {
  //       text: "Daily housekeeping service",
  //       icon: HandPlatter,
  //     },
  //     {
  //       text: "24 hour front desk assistance",
  //       icon: Clock10,
  //     },
  //     {
  //       text: "In room coffee and tea making facilities",
  //       icon: Coffee,
  //     },
  //     {
  //       text: "Iron and ironing board available upon request",
  //       icon: Anvil,
  //     },
  //     {
  //       text: "24hrs electricity (power grid, power plant, solar)",
  //       icon: UtilityPole,
  //     },
  //     {
  //       text: "24hrs Armed security ",
  //       icon: ShieldPlus,
  //     },
  //     {
  //       text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
  //       icon: Landmark,
  //     },
  //     {
  //       text: "Cosy restaurant",
  //       icon: Utensils,
  //     },
  //     {
  //       text: "Bush bar",
  //       icon: Wine,
  //     },
  //     {
  //       text: "Green garden",
  //       icon: Binoculars,
  //     },
  //     {
  //       text: "Crystal clear CCTV camera with nite mode.",
  //       icon: Cctv,
  //     },
  //   ],
  // },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    desc: "Welcome to our deluxe rooms, where refined elegance meets modern comfort. These spacious and well-appointed rooms offer a luxurious retreat for the discerning traveler.",
    price: 40000,
    guests: 1,
    rooms: 1,
    imgUrl: [
      { original: "/images/deluxe1.jpg", thumbnail: "/images/deluxe1.jpg" },
      { original: "/images/deluxe1.jpg", thumbnail: "/images/deluxe1.jpg" },
      {
        original: "/images/deno-hotels/kit.jpeg",
        thumbnail: "/images/deno-hotels/kit.jpeg",
      },
    ],
    features: new Map([
      [
        "Queen sized bed",
        "Enjoy a good night's sleep on our plush queen sized bed, complete with soft linens and comfortable pillows.",
      ],
      [
        "Workstation",
        "Need to catch up on some work during your stay? Our studio rooms come equipped with a dedicated workstation and high speed internet access to ensure you remain productive.",
      ],
      [
        "Kitchenette",
        "Large room with kitchenette En suite room and palour.",
      ],
      [
        "Ensuite bathroom",
        "The ensuite bathroom features a modern shower, complimentary toiletries, and fresh towels.",
      ],
      [
        "Air conditioning",
        "Stay cool and comfortable year round with individual air conditioning units in every studio room.",
      ],
      [
        "Flat screen TV",
        "Kick back and relax in front of the flat screen TV, which offers a variety of cable channels for your entertainment.",
      ],
    ]),
    additionals: [
      {
        text: "Complimentary WiFi throughout the property",
        icon: Wifi,
      },
      {
        text: "Daily housekeeping service",
        icon: HandPlatter,
      },
      {
        text: "24 hour front desk assistance",
        icon: Clock10,
      },
      {
        text: "In room coffee and tea making facilities",
        icon: Coffee,
      },
      {
        text: "Iron and ironing board available upon request",
        icon: Anvil,
      },
      {
        text: "24hrs electricity (power grid, power plant, solar)",
        icon: UtilityPole,
      },
      {
        text: "24hrs Armed security ",
        icon: ShieldPlus,
      },
      {
        text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
        icon: Landmark,
      },
      {
        text: "Cosy restaurant",
        icon: Utensils,
      },
      {
        text: "Bush bar",
        icon: Wine,
      },
      {
        text: "Green garden",
        icon: Binoculars,
      },
      {
        text: "Crystal clear CCTV camera with nite mode.",
        icon: Cctv,
      },
    ],
  },
  // {
  //   id: "superior-room",
  //   name: "Superior Room",
  //   desc: "Our superior rooms are designed to provide you with a luxurious and comfortable stay. With elegant decor and top   notch amenities, these rooms offer a truly exceptional experience.",
  //   price: 25000,
  //   guests: 1,
  //   rooms: 1,
  //   imgUrl: [
  //     { original: "/images/2.jpg", thumbnail: "/images/2.jpg" },
  //     { original: "/images/2.jpg", thumbnail: "/images/2.jpg" },
  //   ],
  //   features: new Map([
  //     [
  //       "Queen sized bed",
  //       "Enjoy a good night's sleep on our plush queen sized bed, complete with soft linens and comfortable pillows.",
  //     ],
  //     [
  //       "Workstation",
  //       "Need to catch up on some work during your stay? Our studio rooms come equipped with a dedicated workstation and high speed internet access to ensure you remain productive.",
  //     ],
  //     [
  //       "Kitchenette",
  //       "Each studio room is equipped with a small kitchenette that includes a mini      refrigerator, microwave, and basic utensils, allowing you to prepare light meals or snacks at your convenience.",
  //     ],
  //     [
  //       "Ensuite bathroom",
  //       "The ensuite bathroom features a modern shower, complimentary toiletries, and fresh towels.",
  //     ],
  //     [
  //       "Air conditioning",
  //       "Stay cool and comfortable year round with individual air conditioning units in every studio room.",
  //     ],
  //     [
  //       "Flat screen TV",
  //       "Kick back and relax in front of the flat screen TV, which offers a variety of cable channels for your entertainment.",
  //     ],
  //   ]),
  //   additionals: [
  //     {
  //       text: "Complimentary WiFi throughout the property",
  //       icon: Wifi,
  //     },
  //     {
  //       text: "Daily housekeeping service",
  //       icon: HandPlatter,
  //     },
  //     {
  //       text: "24 hour front desk assistance",
  //       icon: Clock10,
  //     },
  //     {
  //       text: "In room coffee and tea making facilities",
  //       icon: Coffee,
  //     },
  //     {
  //       text: "Iron and ironing board available upon request",
  //       icon: Anvil,
  //     },
  //     {
  //       text: "24hrs electricity (power grid, power plant, solar)",
  //       icon: UtilityPole,
  //     },
  //     {
  //       text: "24hrs Armed security ",
  //       icon: ShieldPlus,
  //     },
  //     {
  //       text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
  //       icon: Landmark,
  //     },
  //     {
  //       text: "Cosy restaurant",
  //       icon: Utensils,
  //     },
  //     {
  //       text: "Bush bar",
  //       icon: Wine,
  //     },
  //     {
  //       text: "Green garden",
  //       icon: Binoculars,
  //     },
  //     {
  //       text: "Crystal clear CCTV camera with nite mode.",
  //       icon: Cctv,
  //     },
  //   ],
  // },
  {
    id: "studio-room",
    name: "Studio Room",
    desc: "Our studio rooms are the perfect choice for individuals or couples looking for a comfortable and stylish accommodation. With a spacious layout and contemporary design, our studio rooms provide a cozy and inviting atmosphere for your stay.",
    price: 25000,
    guests: 1,
    rooms: 1,
    imgUrl: [
      { original: "/images/8.jpg", thumbnail: "/images/8.jpg" },
      { original: "/images/8.jpg", thumbnail: "/images/8.jpg" },
    ],
    features: new Map([
      [
        "Queen sized bed",
        "Enjoy a good night's sleep on our plush queen sized bed, complete with soft linens and comfortable pillows.",
      ],
      [
        "Workstation",
        "Need to catch up on some work during your stay? Our studio rooms come equipped with a dedicated workstation and high speed internet access to ensure you remain productive.",
      ],
      [
        "Kitchenette",
        "Each studio room is equipped with a small kitchenette that includes a mini      refrigerator, microwave, and basic utensils, allowing you to prepare light meals or snacks at your convenience.",
      ],
      [
        "Ensuite bathroom",
        "The ensuite bathroom features a modern shower, complimentary toiletries, and fresh towels.",
      ],
      [
        "Air conditioning",
        "Stay cool and comfortable year round with individual air conditioning units in every studio room.",
      ],
      [
        "Flat screen TV",
        "Kick back and relax in front of the flat screen TV, which offers a variety of cable channels for your entertainment.",
      ],
    ]),
    additionals: [
      {
        text: "Complimentary WiFi throughout the property",
        icon: Wifi,
      },
      {
        text: "Daily housekeeping service",
        icon: HandPlatter,
      },
      {
        text: "24 hour front desk assistance",
        icon: Clock10,
      },
      {
        text: "In room coffee and tea making facilities",
        icon: Coffee,
      },
      {
        text: "Iron and ironing board available upon request",
        icon: Anvil,
      },
      {
        text: "24hrs electricity (power grid, power plant, solar)",
        icon: UtilityPole,
      },
      {
        text: "24hrs Armed security ",
        icon: ShieldPlus,
      },
      {
        text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
        icon: Landmark,
      },
      {
        text: "Cosy restaurant",
        icon: Utensils,
      },
      {
        text: "Bush bar",
        icon: Wine,
      },
      {
        text: "Green garden",
        icon: Binoculars,
      },
      {
        text: "Crystal clear CCTV camera with nite mode.",
        icon: Cctv,
      },
    ],
  },
];
