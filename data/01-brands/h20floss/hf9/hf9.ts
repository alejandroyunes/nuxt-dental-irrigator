import type { ProductDetails } from '~/types/product-details'

import { hf9Global } from './hf9-global'

import { m01Global } from '~/data/01-brands/oeeter/m01/m01-global'
import { fc166Global } from '~/data/01-brands/sawgmore/fc166/fc166-global'
import { fc165Global } from '~/data/01-brands/turewell/fc-165/fc-165-global'

const slug = 'reviews'

const h2oflossHF9: ProductDetails = {
  info: {
    slug: `${slug}/${hf9Global.brand}/${hf9Global.path}`,
    images: hf9Global.images,
    alt: "H2ofloss HF 9 Dental Water Flosser",
    title: "H2ofloss HF 9 Dental Water Flosser, 800 ml.",
    description: "Elevate your oral hygiene with 13 multifunctional tips, 800 ml capacity, and a quiet design. Removes up to 99.9% of plaque and offers a customizable cleaning experience.",
    price: hf9Global.productPrice,
    updatedDate: hf9Global.updatedDate,
    buyLink: hf9Global.amazonUrl,
    cta: "Buy Now on Amazon",
    rating: hf9Global.rating,
    video: hf9Global.videoUrl,
    video2: hf9Global.videoUrl2,
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
        path: `${slug}/${hf9Global.brand}/${hf9Global.path}`,
        model: 'H2ofloss HF9',
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
      }
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the H2ofloss HF 9",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the H2ofloss Dental Water Flosser, HF-9, 800ml is the right fit for them.",
    cta: "Buy Now on Amazon",
    buyLink: hf9Global.amazonUrl,
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