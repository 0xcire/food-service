import industrySvg from "../assets/claims/indsutry.svg";
import oneSvg from "../assets/claims/one.svg";
import trophySvg from "../assets/claims/trophy.svg";

import headShot from "../assets/social/social.webp";

import menuPic from "../assets/menu/pexels-dapur-melodi-1109197.webp";

export const stats = [
  { category: "Customers", amount: "5,000+" },
  { category: "Deliveries", amount: "8,000+" },
  { category: "Ratings", amount: "1,000+" },
] as const;

export const claims = [
  {
    svg: industrySvg,
    title: "Own fruit orchard",
    description:
      "Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.",
  },
  {
    svg: oneSvg,
    title: "#1 Healthy Fruit Salad",
    description:
      "The pioneer of healthy fruit salads that are delicious & suitable for all people with the best quality assurance",
  },
  {
    svg: trophySvg,
    title: "100 Top Brand",
    description:
      "We are one of the best brands in the Food and Beverage sector in Indonesia.",
  },
] as const;

export const reviews = [
  {
    img: headShot,
    name: "Selena",
    age: "22 years",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
  {
    img: headShot,
    name: "David Ken",
    age: "24 years",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
  {
    img: headShot,
    name: "Jennifer Sina",
    age: "21 years",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
  {
    img: headShot,
    name: "Billy Bob",
    age: "100 years",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
  {
    img: headShot,
    name: "Dana White",
    age: "42 years",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
] as const;

export const items = [
  { pic: menuPic, title: "Mini Salad", price: "$2.99" },
  { pic: menuPic, title: "Completed Salad ", price: "$3.99" },
  { pic: menuPic, title: "Red Salad", price: "$4.99" },
] as const;
