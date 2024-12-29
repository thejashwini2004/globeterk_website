import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";


const tours = [
  {
    id: "01",
    title: "Hampi,Karnataka",
   city : "India",
    distance: 343,
    address:'Somewhere',
    price: 50,
    maxGroupSize: 10,
    desc: "Hampi a World Heritage Site in Karnataka, is renowned for its ancient temples and  Vijayanagara Empire history. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Wayanad,Kerala",
    city: "India",
    distance: 294.1,
    address:'Somewhere',
    price: 50,
    maxGroupSize: 8,
    desc: "Wayanad in the lush Western Ghats of Kerala, is famed for its  hill stations, wildlife sanctuaries, and  waterfalls.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Agra, Uttar Pradesh",
    city: "India",
    distance: 909.2,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Agra, a historic city in Uttar Pradesh, is world-renowned for the iconic Taj Mahal and its rich Mughal heritage.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Kashmir",
    city: "India",
    distance: 2500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Kashmir often called Paradise on Earth,is known for its stunning landscapes, serene valleys,and cultural heritage.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 9000,
    address:'Somewhere',
    price: 250,
    maxGroupSize: 8,
    desc: "Indonesia, the world's largest archipelago, is famed for its  cultures, stunning islands, and natural wonders.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring,Yoshino in Kansai",
    city: "Japan",
    distance: 6000,
    address:'Somewhere',
    price: 200,
    maxGroupSize: 8,
    desc: "Japan an island nation in East Asia, is renowned for its  ancient traditions, technology, and  natural beauty.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 8000,
    address:'Somewhere',
    price: 225,
    maxGroupSize: 8,
    desc: "France, a cultural and culinary hub in Europe, is celebrated for its historic landmarks, world-class art, and picturesque landscapes.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Phuket",
    city: "Thailand",
    distance: 5000,
    address:'Somewhere',
    price: 150,
    maxGroupSize: 8,
    desc: "Thailand known for its culture, beaches, and history, is a popular destination for travelers seeking both adventure and relaxation.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
