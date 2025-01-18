import type { ProductDetails } from '~/types/product-details';
import { sawgmoreFC166GlobalData } from './01-global';
import { turewellFC165GlobalData } from './01-global';
import { h2oflossHF9GlobalData } from './01-global';
import { oeeterM01GlobalData } from './01-global';

const h2oflossHF9: ProductDetails = {
  id: h2oflossHF9GlobalData.id,
  fileName: 'h2ofloss-HF9',
  info: {
    images: h2oflossHF9GlobalData.images,
    alt: "H2ofloss HF 9 Dental Water Flosser",
    title: "H2ofloss HF 9 Dental Water Flosser, 800 ml.",
    description: "Elevate your oral hygiene with 13 multifunctional tips, 800 ml capacity, and a quiet design. Removes up to 99.9% of plaque and offers a customizable cleaning experience.",
    price: h2oflossHF9GlobalData.productPrice,
    updatedDate: h2oflossHF9GlobalData.updatedDate,
    buyLink: h2oflossHF9GlobalData.amazonUrl,
    cta: "Buy Now on Amazon",
    rating: h2oflossHF9GlobalData.rating,
    video: h2oflossHF9GlobalData.videoUrl,
    video2: h2oflossHF9GlobalData.videoUrl2,
    characteristics: [
      "13 Multifunctional Tips",
      "5 Water Pressure Settings",
      "1200 Pulses/Minute Frequency",
      "Quiet design with 800 ml capacity",
      "24-month warranty for peace of mind 🔥",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the H2ofloss HF 9" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The sentiment around the H2ofloss HF 9 oral irrigator is generally positive. Users appreciate its effectiveness in removing plaque and debris, its large water capacity, and its quiet operation. Many reviews highlight its value for money, especially when compared to more expensive brands. However, some users have noted issues with leakage and the durability of the tips. Overall, it seems to be a well-regarded product for maintaining oral hygiene.",
    subtext: "For a visual review and demonstration of the H2ofloss HF 9, you may find the following videos helpful:"    
  },
  features: {
    id: "features",
    title: "Best features of the H2ofloss HF-9",
    data: [
      {
        title: "Multifunctional Tips",
        description: "13 multifunctional tips for versatile oral care.",
      },
      {
        title: "Water Pressure Settings",
        description: "5 customizable water pressure settings ranging from 5-110 PSI.",
      },
      {
        title: "Pulse Frequency",
        description: "1200 pulses/minute for effective plaque removal.",
      },
      {
        title: "User-Friendly Design",
        description: "Quiet design with overheat protection.",
      },
      {
        title: "Large Capacity",
        description: "800 ml water tank for convenience.",
      },
      {
        title: "Family Friendly",
        description: "Suitable for the whole family, including those with braces or implants.",
      },
      {
        title: "Pause Function",
        description: "Pause function on the handle for ease of use.",
      },
      {
        title: "Warranty",
        description: "24-month warranty and 24-hour email support.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the H2ofloss HF 9 with other irrigators",
    description: "In this table, you can see all the affordable countertop models, their features, notable advantages, user ratings, and the results of our analyses in 2024.",
    models: [
      {
        id: 1,
        path: h2oflossHF9GlobalData.path,
        model: 'H2ofloss HF-9',
        image: h2oflossHF9GlobalData.images[0].thumbnail,
        alt: 'H2ofloss HF 9 Oral Irrigator',
        prime: true,
        dimensions: '2.56 x 4 x 8.39 in, 28 oz',
        tips: '13',
        capacity: '800 ml.',
        highlight: 'User-Friendly Design',
        problem: 'Leaking Problems',
        price: h2oflossHF9GlobalData.productPrice,
        satisfaction: h2oflossHF9GlobalData.rating.stars,
      },
      {
        id: 2,
        path: turewellFC165GlobalData.path,
        model: 'Turewell FC165',
        image: turewellFC165GlobalData.images[0].thumbnail,
        alt: 'Turewell FC165 Oral Irrigator',
        prime: true,
        dimensions: '5.7 x 4.9 x 8.07 in, 20 oz',
        tips: '8',
        capacity: '600 ml.',
        highlight: '8 Nozzles',
        problem: 'Water Resistance',
        price: turewellFC165GlobalData.productPrice,
        satisfaction: turewellFC165GlobalData.rating.stars,
      },
      {
        id: 3,
        path: sawgmoreFC166GlobalData.path,
        model: "Sawgmore FC166",
        image: sawgmoreFC166GlobalData.images[0].thumbnail,
        alt: "FC166 Water Flosser",
        prime: true,
        dimensions: "7.9 x 4.5 x 3.9 in, 20 oz",
        tips: "8",
        capacity: "600 ml.",
        highlight: "10 adjustable pressure levels",
        problem: "May require frequent refills at high settings",
        price: sawgmoreFC166GlobalData.productPrice,
        satisfaction: sawgmoreFC166GlobalData.rating.stars,
      },
      {
        id: 4,
        path: oeeterM01GlobalData.path,
        model: "Oeeter M01",
        image: oeeterM01GlobalData.images[0].thumbnail,
        alt: "Oeeter M01 Water Dental Flosser",
        prime: true,
        dimensions: "8 x 6 x 4 in, 20 oz",
        tips: "7 Tips",
        capacity: "600 ml.",
        highlight: "Compact and portable design with magnetic handle",
        problem: "Lower water capacity compared to competitors",
        price: oeeterM01GlobalData.productPrice,
        satisfaction: oeeterM01GlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the H2ofloss HF 9",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the H2ofloss Dental Water Flosser, HF-9, 800ml is the right fit for them.",
    cta: "Buy Now on Amazon",
    buyLink: h2oflossHF9GlobalData.amazonUrl,
    pros: [
      { title: "Great performance and cleaning capabilities" },
      { title: "Affordable, offering good value for the price" },
      { title: "User-friendly with easy pressure control" },
      { title: "Effective at cleaning between teeth" },
      { title: "24-month warranty and 24-hour email support" },
      { title: "Exclusive Prime price and free shipping to Colombia" },
    ],
    cons: [
      { title: "Mixed opinions on build quality and durability" },
      { title: "Noise levels may be bothersome for some users" },
      { title: "Leaks reported by some users" },
    ],
  },
};

export default h2oflossHF9;