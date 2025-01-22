import type { ProductDetails } from '~/types/product-details'

import { wf2302Global } from './wf2302-global'
import { fc166Global } from '~/data/01-brands/sawgmore/fc166/fc166-global'
import { hf9Global } from '~/data/01-brands/h20floss/hf9/hf9-global'
import { m01Global } from '~/data/01-brands/oeeter/m01/m01-global'

const heyaxa2302WF: ProductDetails = {
  info: {
    images: wf2302Global.images,
    alt: "Heyaxa 2302WF Water Dental Flosser",
    title: "Heyaxa 2302WF Water Dental Flosser, 1000 ml.",
    description:
      "Efficient and deep cleaning for gum health and oral hygiene. Featuring a 1000 ml tank, 10 adjustable pressure levels, and 7 nozzles for family use. Ideal for gum health and braces.",
    price: wf2302Global.productPrice,
    updatedDate: wf2302Global.updatedDate,
    buyLink: wf2302Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: wf2302Global.rating,
    video: wf2302Global.videoUrl,
    characteristics: [
      "1000 ml large water tank for uninterrupted cleaning",
      "10 adjustable pressure levels (30-125 PSI)",
      "7 nozzles for various oral care needs",
      "Unique UV storage compartment for hygiene",
      "Corded electric design for consistent power",
      "High pulsation frequency (1250-1700 times/min)",
      "360° rotating nozzles for thorough cleaning",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Heyaxa 2302WF" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "title",
    title: "User Feedback & Videos",
    description: "The overall sentiment of the reviews is positive, with most users praising the product's performance, especially its water pressure, large reservoir, and UV cleaning feature. While a few users noted issues like material quality and durability, the company’s excellent customer service mitigated these concerns.",
    subtext: "For a visual review and demonstration of the Heyaxa 2302WF, you may find the following video helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Heyaxa 2302WF",
    data: [
      {
        title: "Ultra-Powerful Water Flosser for Deep Clean",
        description:
          "Pulses up to 1700 times/min with 360° rotating nozzles for thorough cleaning, massaging gums, and preventing tooth stains.",
      },
      {
        title: "Large 1000ml Water Tank",
        description: "Provides up to 180 seconds of uninterrupted cleaning, perfect for family use.",
      },
      {
        title: "10 Adjustable Pressure Levels",
        description: "Pressure range from 30 to 125 PSI, suitable for all ages.",
      },
      {
        title: "7 Nozzles Included",
        description:
          "3 Classic Tips, 1 Periodontal Tip, 1 Orthodontic Tip, 1 Dental Plaque Tip, and 1 Tongue Cleaner for various cleaning needs.",
      },
      {
        title: "Unique UV Storage Compartment",
        description:
          "Hygienically stores nozzles with built-in UV light and easy access.",
      },
      {
        title: "Corded Electric Design",
        description: "Reliable power without charging issues.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Heyaxa 2302WF with Similar Models",
    description: "Compare the Heyaxa 2302WF Cordless Express with other models for travel and home use.",
    models: [
      {
        id: 1,
        path: wf2302Global.path,
        model: "HEYAXA 2302WF",
        image: wf2302Global.images[0].thumbnail,
        alt: "HEYAXA 2302WF Water Flosser",
        prime: true,
        dimensions: "10 x 8 x 6 in, 34 oz",
        tips: "6",
        capacity: "1000 ml.",
        highlight: "Large 1000ml Water Tank",
        problem: "Noise level",
        price: wf2302Global.productPrice,
        satisfaction: wf2302Global.rating.stars,
      },
      {
        id: 2,
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
    ],
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "An honest look at the benefits and drawbacks.",
    cta: "Buy on Amazon",
    buyLink: wf2302Global.amazonUrl,
    pros: [
      { title: "Large water tank for extended cleaning sessions" },
      { title: "10 pressure settings for customizable comfort" },
      { title: "Includes 7 nozzles for family use" },
      { title: "Built-in UV storage for hygienic nozzle maintenance" },
    ],
    cons: [
      { title: "Corded design may limit portability" },
      { title: "Noise levels up to 75 decibels during operation" },
    ],
  },
}


export default heyaxa2302WF