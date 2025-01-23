import type { ProductDetails } from '~/types/product-details'

import { m6PlusGlobal } from "~/data/01-brands/synhope/m6-plus/m6-plus-global"
import { wp580Global } from '../../waterpik/wp-580/wp-580-global'
import { ew1511wGlobal } from './ew1511w-global'

const panasonicEW1511W: ProductDetails = {
  info: {
    images: ew1511wGlobal.images,
    alt: "Panasonic EW1511W Portable Water Flosser",
    title: "Panasonic Portable EW1511W Water Flosser, 165 ml.",
    description: "The Panasonic Portable EW1511W Oral Irrigator with Ultrasonic Cleaning is a compact and powerful water flosser designed for effective dental hygiene. Featuring a 165 ml water tank, five pressure settings, rechargeable, IPX7 waterproof design provides 10 minutes of continuous use after a 60-minute charge, includes two rotating, tapered nozzles, and delivers 60 seconds of water flossing per fill.",
    price: ew1511wGlobal.productPrice,
    updatedDate: ew1511wGlobal.updatedDate,
    buyLink: ew1511wGlobal.amazonUrl,
    cta: "Buy on Amazon",
    rating: ew1511wGlobal.rating,
    video: ew1511wGlobal.videoUrl,
    video2: ew1511wGlobal.videoUrl2,
    characteristics: [
      "Cordless and portable design",
      "Up to 1,600 ultrasonic water pulses per minute",
      "Quiet Operation:",
      "Five pressure settings",
      "Easy-to-fill water tank",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Panasonic Portable EW1511W" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "Reviewers praise the Panasonic EW1511 water flosser for its exceptional performance, quiet operation, and high-quality design. They appreciate its convenient charging base, strong water pressure, and durable construction. The device is often compared favorably to competitors, such as Waterpik models, highlighting its advantages like lower noise levels, ease of use, and fewer flaws.",
    subtext: "For a visual review and demonstration of the Panasonic portable water flosser EW1511W, you may find the following videos helpful:",
  },
  features: {
    id: "features",
    title: "Key Features of the Panasonic EW1511W",
    data: [
      { title: "Ultrasonic Cleaning", description: "Provides deep cleaning with powerful ultrasonic water stream." },
      { title: "Cordless Design", description: "Portable and travel-friendly for convenience." },
      { title: "Adjustable Pressure", description: "Five settings to suit various dental needs." },
      { title: "Easy-to-Fill Tank", description: "Refillable reservoir with ample capacity." },
      { title: "Ergonomic Build", description: "Comfortable grip for effortless use." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "A detailed comparison of the Panasonic EW1511W Portable Water Flosser with other models.",
    models: [
      {
        id: 1,
        path: ew1511wGlobal.path,
        model: "EW1511W",
        image: ew1511wGlobal.images[0].thumbnail,
        alt: "Panasonic Portable Water Flosser EW1511W",
        prime: true,
        dimensions: "3.3 x 3 x 8.3 in, 6 oz",
        tips: "2 interchangeable tips",
        capacity: "165 ml.",
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: ew1511wGlobal.productPrice,
        satisfaction: ew1511wGlobal.rating.stars,
      },
      {
        id: 2,
        path: m6PlusGlobal.path,
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
        id: 3,
        path: wp580Global.path,
        model: "Waterpik Cordless Express",
        image: wp580Global.images[0].thumbnail,
        alt: "Waterpik Cordless Express Water Flosser",
        prime: false,
        dimensions: "11.75 x 2.5 x 3.63 inches",
        tips: "2 Precision (Classic)",
        capacity: "Up to 30 seconds",
        highlight: "Most affordable",
        problem: "Shorter battery life",
        price: wp580Global.productPrice,
        satisfaction: wp580Global.rating.stars,
      },
      {
        id: 4,
        path: ew1511wGlobal.path,
        model: "EWDJ10W",
        image: ew1511wGlobal.images[0].thumbnail,
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml",
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: ew1511wGlobal.productPrice,
        satisfaction: ew1511wGlobal.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "Weighing the benefits and drawbacks of the Panasonic EW-1511W.",
    cta: "Buy on Amazon",
    buyLink: ew1511wGlobal.amazonUrl,
    pros: [
      { title: "Portable and travel-friendly" },
      { title: "Easy to clean and maintain" },
      { title: "Charging speed" },
      { title: "Users report that it leaves their teeth feeling exceptionally clean." },
    ],
    cons: [
      { title: "Replacement Nozzles: One of the main drawbacks is the difficulty in finding replacement nozzles, which can be a significant issue for long-term use." },
      { title: "It is relatively expensive compared to other models, but many users feel it is worth the investment." },
    ],
  },
}

export default panasonicEW1511W;