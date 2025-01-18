import type { ProductDetails } from '~/types/product-details'
import { oeeterM01GlobalData } from './01-global'
import { h2oflossHF9GlobalData } from './01-global'
import { sawgmoreFC166GlobalData } from './01-global'
import { turewellFC165GlobalData } from './01-global'

const oeeterM01: ProductDetails = {
  id: oeeterM01GlobalData.id,
  fileName: 'oeeter-M01',
  info: {
    images: oeeterM01GlobalData.images,
    alt: "Oeeter M01 Water Dental Flosser",
    title: "Oeeter M01 Water Dental Flosser, 600 ml.",
    description: "Oeeter M01 water dental flosser offers 10 adjustable pressure settings, 3 cleaning modes, 7 tips, and a 600 ml water reservoir for effective oral hygiene. Designed for effective teeth cleaning and gum health.",
    price: oeeterM01GlobalData.productPrice,
    updatedDate: oeeterM01GlobalData.updatedDate,
    buyLink: oeeterM01GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: oeeterM01GlobalData.rating,
    video: oeeterM01GlobalData.videoUrl,
    video2: oeeterM01GlobalData.videoUrl2,
    characteristics: [
      "10 Adjustable Pressure Settings",
      "3 Cleaning Modes: Normal, Soft, Pulse",
      "7 Magnectic Flossing Tips for All Needs",
      "Convenient Magnetic Handle",
      "600 ml Water Reservoir",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Oeeter M01 Water" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The Oeeter M01 water dental flosser has received mixed reviews from customers. Many users appreciate its design, ease of use, and adjustable water pressure settings, which effectively clean teeth without causing gum irritation. However, some customers have reported issues with its durability and noise level.",
    subtext: "For a visual review and demonstration of the Oeeter M01, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Oeeter M01",
    data: [
      {
        title: "10 Adjustable Pressure Settings",
        description: "Customize your flossing routine with pressure levels up to 125PSI.",
      },
      {
        title: "3 Cleaning Modes",
        description: "Choose from Normal, Soft, and Pulse for tailored oral care.",
      },
      {
        title: "7 Magnetic Flossing Tips",
        description: "Includes tips for all needs: classic, periodontal, orthodontic, and tongue cleaning.",
      },
      {
        title: "Magnetic Handle",
        description: "Stylish and convenient handle design with an ON/OFF switch.",
      },
      {
        title: "600 ml Water Reservoir",
        description: "High-capacity reservoir for up to 180 seconds of continuous use.",
      },
      {
        title: "User-Friendly Design",
        description: "Easy-to-clean removable water reservoir and built-in tip storage.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Oeeter M01 with Similar Models",
    description: "Compare the Oeeter M01 Cordless Express with other models.",

    models: [
      {
        id: 1,
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
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "What makes the Oeeter M01 a great choice.",
    cta: "Buy on Amazon",
    buyLink: oeeterM01GlobalData.amazonUrl,
    pros: [
      { title: "Adjustable pressure for personalized cleaning" },
      { title: "Multiple tips for diverse oral care needs" },
      { title: "Large water reservoir for extended use" },
    ],
    cons: [
      { title: "Noisy" },
      { title: "Durability may be a concern" },
    ],
  },
}

export default oeeterM01
