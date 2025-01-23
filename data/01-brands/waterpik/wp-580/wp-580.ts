import type { ProductDetails } from '~/types/product-details'

import { wp580Global } from './wp-580-global'

import { ew1511wGlobal } from '~/data/01-brands/panasonic/ew1511w/ew1511w-global'
import { m6PlusGlobal } from '~/data/01-brands/synhope/m6-plus/m6-plus-global'
import { wp660Global } from '~/data/01-brands/waterpik/wp-660/wp-660-global'

const waterpikwp580: ProductDetails = {
  info: {
    images: wp580Global.images,
    alt: "Waterpik Cordless WP 580 Advanced 2.0 Water Flosser",
    title: "Waterpik Cordless WP 580 Advanced 2.0 Water Flosser, 280 ml.",
    description: "The Waterpik Cordless WP 580 Advanced 2.0 Water Flosser is a rechargeable, portable water flosser designed for easy and effective dental care, featuring a 360-degree rotating tip, rechargeable battery, 3 safe and effective pressure settings with PrecisionPulse technology, and up to 2-year manufacturer's warranty.",
    price: wp580Global.productPrice,
    updatedDate: wp580Global.updatedDate,
    buyLink: wp580Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: wp580Global.rating,
    video: wp580Global.videoUrl,
    video2: wp580Global.videoUrl2,
    characteristics: [
      "Cordless and Portable",
      "Rechargeable Battery",
      "3 Pressure Settings",
      "4 Flossing Tips Included",
      "4 hour rapid charge",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Waterpik WP 580" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The sentiment of the reviews is overwhelmingly positive, highlighting the Waterpik Cordless Advanced Water Flosser as an effective, convenient, and user-friendly product. Customers praise its portability, ease of use, cleaning ability, and features like waterproofing, rechargeable batteries, and ADA acceptance. While some mention minor drawbacks like the small water reservoir and occasional recharging needs, these are largely overshadowed by the product's benefits. Overall, it is viewed as a valuable addition to oral hygiene routines.",
    subtext: "For a visual review and demonstration of the Waterpik Cordless WP 580, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Waterpik Cordless Advanced 2.0",
    data: [
      { title: "Cordless and Portable", description: "Convenient for travel and small bathrooms." },
      { title: "Rechargeable Battery", description: "Lasts up to 4 weeks on a single charge." },
      { title: "3 Pressure Settings", description: "Allows for customization to suit your comfort level." },
      { title: "Waterproof", description: "Can be used in the shower for added convenience." },
      { title: "Easy to Fill Reservoir", description: "Effortlessly refill with water." },
      { title: "4 Flossing Tips Included", description: "Includes Precision, Plaque Seeker, and Orthodontic tips for various needs." },
      { title: "ADA Accepted", description: "Proven safe and effective by the American Dental Association." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Water Flossers",
    description: "Here's how the Waterpik Cordless Advanced 2.0 compares to other popular models:",
    models: [
      {
        id: 1,
        path: wp580Global.path,
        model: "WP 580",
        image: wp580Global.images[0].thumbnail,
        alt: "Waterpik Cordless Express Water Flosser",
        prime: false,
        dimensions: "4 x 2.8 x 11.6 in, 12.8 oz",
        tips: "4 tips",
        capacity: "280 ml.",
        highlight: "Most affordable",
        problem: "Shorter battery life",
        price: wp580Global.productPrice,
        satisfaction: wp580Global.rating.stars,
      },
      {
        id: 2,
        path: wp660Global.path,
        model: "Waterpik WP-660",
        image: wp660Global.images[0].thumbnail,
        alt: 'Waterpik WP-660 Oral Irrigator',
        prime: true,
        dimensions: '3.8 x 4.7 x 10.3 in, 1.46 lbs',
        tips: "4 included tips",
        capacity: "650 ml",
        highlight: '10 Nozzles, Best value',
        problem: 'Noise, size',
        price: wp660Global.productPrice,
        satisfaction: wp660Global.rating.stars,
      },
      {
        id: 3,
        path: m6PlusGlobal.path || "/products/synhope-flosser",
        model: "SYNHOPE Mini Cordless",
        image: m6PlusGlobal.images[0].thumbnail,
        alt: "SYNHOPE Mini Cordless Water Flosser",
        prime: true,
        dimensions: "Palm-sized, lightweight design",
        tips: "Includes 4 replacement jet tips",
        capacity: "Telescopic water tank for up to 50 seconds of flossing",
        highlight: "Portable design ideal for travel",
        problem: "Limited water capacity compared to larger models",
        price: m6PlusGlobal.productPrice,
        satisfaction: m6PlusGlobal.rating.stars,
      },
      {
        id: 4,
        path: ew1511wGlobal.path,
        model: "EW-DJ10-W",
        image: ew1511wGlobal.images[0].thumbnail,
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml",
        highlight: "360-degree rotating tip, rechargeable, portable, waterproof",
        problem: "Smaller water reservoir",
        price: ew1511wGlobal.productPrice,
        satisfaction: ew1511wGlobal.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the Waterpik Cordless Advanced 2.0",
    description: "Here's a summary of the advantages and disadvantages of the Waterpik Cordless Advanced 2.0 Water Flosser:",
    cta: "Buy on Amazon",
    buyLink: wp580Global.amazonUrl,
    pros: [
      { title: "Portable and travel-friendly" },
      { title: "Rechargeable with long battery life" },
      { title: "Waterproof for shower use" },
    ],
    cons: [
      { title: "Smaller water reservoir" },
      { title: "Higher price point" },],
  },
}

export default waterpikwp580