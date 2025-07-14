import wirelessHeadphones from "@/assets/images/wirelessheadphones.avif";
import runningshoes from "@/assets/images/runningshoes.avif";
import smartwatch from "@/assets/images/smartwatch.avif";
import backpack from "@/assets/images/backpack.avif";
import sunglasses from "@/assets/images/sunglasses.avif";
import gamingkeyboard from "@/assets/images/gamingkeyboard.avif";
import bluetoothspeaker from "@/assets/images/bluetoothspeaker.avif";
import tshirt from "@/assets/images/tshirt.avif";
import fitnesstracker from "@/assets/images/fitnesstracker.avif";
import portablecharger from "@/assets/images/portablecharger.avif";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: wirelessHeadphones,
    price: 89.99,
    stock: 50,
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Running Shoes",
    image: runningshoes,
    price: 59.99,
    stock: 30,
    category: "Footwear",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Smart Watch",
    image: smartwatch,
    price: 129.99,
    stock: 20,
    category: "Electronics",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Backpack",
    image: backpack,
    price: 39.99,
    stock: 15,
    category: "Accessories",
    rating: 4.1,
  },
  {
    id: 5,
    name: "Sunglasses",
    image: sunglasses,
    price: 24.99,
    stock: 25,
    category: "Accessories",
    rating: 3.9,
  },
  {
    id: 6,
    name: "Gaming Keyboard",
    image: gamingkeyboard,
    price: 74.99,
    stock: 10,
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    image: bluetoothspeaker,
    price: 45.99,
    stock: 40,
    category: "Electronics",
    rating: 4.3,
  },
  {
    id: 8,
    name: "Graphic T-shirt",
    image: tshirt,
    price: 19.99,
    stock: 60,
    category: "Clothing",
    rating: 4.0,
  },
  {
    id: 9,
    name: "Fitness Tracker",
    image: fitnesstracker,
    price: 99.99,
    stock: 5,
    category: "Health",
    rating: 4.4,
  },
  {
    id: 10,
    name: "Portable Charger",
    image: portablecharger,
    price: 29.99,
    stock: 0,
    category: "Electronics",
    rating: 4.2,
  },
];

export default products;
