import type { ProductDetails } from '~/types/product-details'

import { fc165Global } from './fc-165-global'


import { hf9Global } from '~/data/01-brands/h20floss/hf9/hf9-global'
import { m01Global } from '~/data/01-brands/oeeter/m01/m01-global'
import { fc166Global } from '~/data/01-brands/sawgmore/fc166/fc166-global'


const turewellFC165: ProductDetails = {
  info: {
    images: fc165Global.images,
    alt: 'Turewell Water Flossing Oral Irrigator',
    title: "Turewell FC165 Water Flossing Oral Irrigator, 600 ml.",
    description: "The Turewell FC165 is A budget-friendly water flosser with 8 nozzles and a 600 ml tank, providing a complete solution for oral hygiene.give me a brief sentence about the sentiment of this irrigator.",
    price: fc165Global.productPrice,
    updatedDate: fc165Global.updatedDate,
    buyLink: fc165Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: fc165Global.rating,
    video: fc165Global.videoUrl,
    video2: fc165Global.videoUrl2,
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
        path: fc165Global.path,
        model: 'Turewell FC165',
        image: fc165Global.images[0].thumbnail,
        alt: 'Turewell FC165 Oral Irrigator',
        prime: true,
        dimensions: '5.7 x 4.9 x 8.07 in, 20 oz',
        tips: '8',
        capacity: '600 ml.',
        highlight: '8 Nozzles',
        problem: 'Water Resistance',
        price: fc165Global.productPrice,
        satisfaction: fc165Global.rating.stars,
      },
      {
        id: 2,
        path: hf9Global.path,
        model: 'H2ofloss HF-9',
        image: hf9Global.images[0].thumbnail,
        alt: 'H2ofloss HF 9 Oral Irrigator',
        prime: true,
        dimensions: '2.56 x 4 x 8.39 in, 28 oz',
        tips: '13',
        capacity: '800 ml.',
        highlight: 'User-Friendly Design',
        problem: 'Leaking Problems',
        price: hf9Global.productPrice,
        satisfaction: hf9Global.rating.stars,
      },
      {
        id: 3,
        path: fc166Global.path,
        model: "Sawgmore FC166",
        image: fc166Global.images[0].thumbnail,
        alt: "FC166 Water Flosser",
        prime: true,
        dimensions: "7.9 x 4.5 x 3.9 in, 20 oz",
        tips: "8",
        capacity: "600 ml.",
        highlight: "10 adjustable pressure levels",
        problem: "May require frequent refills at high settings",
        price: fc166Global.productPrice,
        satisfaction: fc166Global.rating.stars,
      },
      {
        id: 4,
        path: m01Global.path,
        model: "Oeeter M01",
        image: m01Global.images[0].thumbnail,
        alt: "Oeeter M01 Water Dental Flosser",
        prime: true,
        dimensions: "8 x 6 x 4 in, 20 oz",
        tips: "7 Tips",
        capacity: "600 ml.",
        highlight: "Compact and portable design with magnetic handle",
        problem: "Lower water capacity compared to competitors",
        price: m01Global.productPrice,
        satisfaction: m01Global.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the Turewell FC165",
    description: "Pros and cons to help you decide if the Turewell FC165 is the right choice for your oral hygiene needs.",
    cta: "Buy Now on Amazon",
    buyLink: fc165Global.amazonUrl,
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