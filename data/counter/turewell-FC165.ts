import type { ProductDetails } from '~/types/product-details'
import { h2oflossHF9GlobalData } from './01-global'
import { sawgmoreFC166GlobalData } from './01-global'
import { turewellFC165GlobalData } from './01-global'
import { oeeterM01GlobalData } from './01-global'

const turewellFC165: ProductDetails = {
  id: turewellFC165GlobalData.id,
  fileName: 'turewell-FC165',
  info: {
    images: turewellFC165GlobalData.images,
    alt: 'Turewell Water Flossing Oral Irrigator',
    title: "Turewell FC165 Water Flossing Oral Irrigator, 600 ml.",
    description: "The Turewell FC165 is A budget-friendly water flosser with 8 nozzles and a 600 ml tank, providing a complete solution for oral hygiene.give me a brief sentence about the sentiment of this irrigator.",
    price: turewellFC165GlobalData.productPrice,
    updatedDate: turewellFC165GlobalData.updatedDate,
    buyLink: turewellFC165GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: turewellFC165GlobalData.rating,
    video: turewellFC165GlobalData.videoUrl,
    video2: turewellFC165GlobalData.videoUrl2,
    characteristics: [
      "10 Adjustable Pressure",
      "Electric Oral Flosser",
      "Ideal for braces and kids",
      "8 Water Jet Tips for Family",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Turewell FC165" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "Turewell Water Flossing Oral Irrigator FC165, 600 ml",
    description: "The Turewell Water Flossing Oral Irrigator is generally well-received by customers, who appreciate its effectiveness, ease of use, and variety of tools, though some have concerns about build quality.",
    subtext: "For a visual review and demonstration of the H2ofloss HF 9, you may find the following videos helpful:"    
  },
  features: {
    id: "features",
    title: "Features of the Turewell FC165",
    data: [
      { title: "Powerful Cleaning", description: "With up to 1700 pulses per minute, it removes food debris and massages gums effectively." },
      { title: "Multiple Pressure Settings", description: "Adjustable pressure from 30 to 125 PSI, suitable for various user needs." },
      { title: "Large Capacity", description: "The 600 ml water tank provides up to 90 seconds of continuous flossing." },
      { title: "Variety of Tips", description: "Comes with 8 interchangeable nozzles for a variety of needs." },
      { title: "Smart Timer", description: "The built-in timer ensures automatic shutdown after 3 minutes to prevent overuse." },
      { title: "Anti-Leakage Design", description: "Prevents water leakage during high-pressure usage." },
      { title: "Easy to Use", description: "Simple controls and ergonomic design make it user-friendly." },
      { title: "Affordable", description: "Offers excellent value for its features and performance." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Turewell FC165 with other irrigators",
    description: "See how the Turewell FC165 compares to similar models in terms of features, price, and user satisfaction.",
    models: [
      {
        id: 1,
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
        id: 2,
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
    title: "Pros and Cons of the Turewell FC165",
    description: "Pros and cons to help you decide if the Turewell FC165 is the right choice for your oral hygiene needs.",
    cta: "Buy Now on Amazon",
    buyLink: turewellFC165GlobalData.amazonUrl,
    pros: [
      { title: "Good value for the price." },
      { title: "Effectively removes plaque and debris." },
      { title: "Easy to set up and use." },
      { title: "Comes with a variety of tips for different needs." },
    ],
    cons: [
      { title: "Customers have mixed opinions on the size." },
      { title: "Can be messy during use." },
      { title: "Water pulsation could generate noise." },
    ],
  },
}

export default turewellFC165