import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592GlobalData, coslusC20F5020EGlobalData } from './01-global'
import type { ProductDetails } from '~/types/product-details'

const nicefeelFC1592: ProductDetails = {
  id: nicefeelFC1592GlobalData.id,
  fileName: 'nicefeel-FC1592',
  info: {
    images: nicefeelFC1592GlobalData.images,
    alt: 'Nicefeel FC1592 Cordless Water Flosser, 300 ml.',
    title: "Nicefeel FC1592 Cordless Water Flosser, 300 ml.",
    description: "The Nicefeel Cordless Water Flosser packs a punch with its 300 ml water tank, offering uninterrupted flossing. With its IPX7 waterproof design, you can even use it in the shower for added convenience. It boasts three modes—Normal, Soft, and Pulse—allowing you to customize the flossing experience to suit your needs.",
    price: nicefeelFC1592GlobalData.productPrice,
    updatedDate: nicefeelFC1592GlobalData.updatedDate,
    buyLink: nicefeelFC1592GlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: nicefeelFC1592GlobalData.rating,
    video: nicefeelFC1592GlobalData.videoUrl,
    characteristics: [
      'Battery Powered: 1400mAh',
      'Bigger Water Tank: 300 ml 🔥',
      'Multiple Pressure Settings',
      'IPX7 Dual Waterproof',
      'USB Chargeable',
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Nicefeel FC1592-BK" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The reviews express a generally positive sentiment, highlighting the product's effectiveness, convenience, and long battery life, though some users note issues with newer models and durability.",
    subtext: "For a visual review and demonstration of the Nicefeel FC1592-BK, you may find the following videos helpful:",
  },
  comparison: {
    id: "comparison",
    title: 'Compare the Nicefeel FC1592-BK with other irrigators',
    description: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
        path: nicefeelFC1592GlobalData.path,
        model: 'Nicefeel FC1592',
        image: nicefeelFC1592GlobalData.images[0].thumbnail,
        alt: 'Nicefeel FC1592 Oral Irrigator Image',
        prime: true,
        dimensions: '0.3 x 0.31 x 0.87 in, 10 oz',
        tips: '4 Tips',
        capacity: '300 ml.',
        highlight: '3 Cleaning Modes',
        problem: 'Not suitable for large families',
        price: nicefeelFC1592GlobalData.productPrice,
        satisfaction: nicefeelFC1592GlobalData.rating.stars,
      },
      {
        id: 2,
        path: nicwellF5025GlobalData.path,
        model: 'Nicwell F5025',
        image: nicwellF5025GlobalData.images[0].thumbnail,
        alt: 'Nicwell 200 ml Oral Irrigator',
        prime: true,
        dimensions: '8.11 x 4.06 x 2.73 in, 7 oz',
        tips: "5 tips",
        capacity: "200 ml.",
        highlight: "360° rotatable",
        problem: "Slightly heavier",
        price: nicwellF5025GlobalData.productPrice,
        satisfaction: nicwellF5025GlobalData.rating.stars,
      },
      {
        id: 3,
        path: waterPikWF02GlobalData.path,
        model: 'Waterpik WF 02',
        image: waterPikWF02GlobalData.images[0].thumbnail,
        alt: 'Waterpik Model WF 02',
        prime: true,
        dimensions: "3.6 x 2.5 x 11.75 in, 5 oz",
        tips: "Includes 2 Classic Jet Tips",
        capacity: "148 ml.",
        highlight: "No outlets or charging needed",
        problem: "Requires regular battery replacement",
        price: waterPikWF02GlobalData.productPrice,
        satisfaction: waterPikWF02GlobalData.rating.stars,
      },
      {
        id: 4,
        path: coslusC20F5020EGlobalData.path,
        model: 'Coslus F5020E',
        image: coslusC20F5020EGlobalData.images[0].thumbnail,
        alt: 'Coslus F5020E Oral Irrigator',
        prime: true,
        dimensions: '2.17 x 2.74 x 12.2 in, 10 oz',
        tips: '5',
        capacity: '300 ml.',
        highlight: 'Dual-thread stream, Child mode, IPX7 waterproof',
        problem: 'Limited water capacity',
        price: coslusC20F5020EGlobalData.productPrice,
        satisfaction: coslusC20F5020EGlobalData.rating.stars,
      },
    ]
  },
  features: {
    id: "features",
    title: 'Key Features of the Nicefeel FC1592BK?',
    data: [
      {
        title: 'Detachable and Cleanable Water Tank',
        description: 'The 300 ml tank is easy to fill and clean, designed with a leak-proof drainage system for safety and comfort.',
      },
      {
        title: 'Memory Function with 3 Cleaning Modes',
        description: 'Choose from Normal, Soft, or Pulse modes. The Memory Function remembers your preferred mode, even after the device is turned off.',
      },
      {
        title: '360° Rotating Long Nozzle',
        description: 'Reaches 99.99% of food residues in every corner that traditional brushing can’t reach.',
      },
      {
        title: 'Compact and Portable Design',
        description: 'Perfect for travel, offering convenience without sacrificing performance.',
      },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: 'Pros and Cons of Nicefeel FC1592-BK',
    description:
      'Evaluate the advantages and disadvantages of the Nicefeel FC1592-BK Cordless Water Flosser.',
    cta: 'Buy Now on Amazon',
    buyLink: nicefeelFC1592GlobalData.amazonUrl,
    pros: [
      { title: 'Large Water Tank: 300ml capacity for uninterrupted use.' },
      { title: 'Efficient Cleaning: 1800 times/minute high pressure water pulse for effective removal of food residues.' },
      { title: 'Memory Function: Allows presetting and remembering preferred cleaning modes.' },
      { title: 'Orthodontic Tip: Great for users with braces and orthodontic appliances.' }
    ],
    cons: [
      { title: ' Initial Charging Time: Requires 4 hours of charging before first-time use.' },
      { title: 'Nozzle Replacement: Suggested to change nozzles every 3 months for optimal health.' },
      { title: 'Noisy: Louder than other models.' }
    ],
  },
};

export default nicefeelFC1592;