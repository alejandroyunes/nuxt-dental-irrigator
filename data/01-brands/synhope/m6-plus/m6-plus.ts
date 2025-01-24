import type { ProductDetails } from '~/types/product-details'

import { m6PlusGlobal } from './m6-plus-global'
import { ew1511wGlobal } from '~/data/01-brands/panasonic/ew1511w/ew1511w-global'
import { wp580Global } from '~/data/01-brands/waterpik/wp-580/wp-580-global'
import { wp660Global } from '~/data/01-brands/waterpik/wp-660/wp-660-global'

const slug = 'reviews'

const synhopeM6Plus: ProductDetails = {
  info: {
    slug: `${slug}/${m6PlusGlobal.brand}/${m6PlusGlobal.path}`,
    images: m6PlusGlobal.images,
    alt: "SynHope Mini Cordless Portable Water Flosser",
    title: "SynHope Mini Cordless Water Flosser, 140 ml.",
    description: "The SynHope Mini Cordless Portable Water Flosser is highly recommended for those looking for a compact, efficient, and travel-friendly oral care solution.  Featuring a telescopic water tank, 3 cleaning modes, IPX7 waterproof design, long battery life and 30 days no reason refund warranty.",
    price: m6PlusGlobal.productPrice,
    updatedDate: m6PlusGlobal.updatedDate,
    buyLink: m6PlusGlobal.amazonUrl,
    cta: "Buy on Amazon",
    rating: m6PlusGlobal.rating,
    video: m6PlusGlobal.videoUrl,
    video2: m6PlusGlobal.videoUrl2,
    characteristics: [
      "Compact and portable design",
      "Telescopic water tank",
      "3 cleaning modes (Soft, Pulse, Strong)",
      "IPX7 waterproof for safe usage",
      "Continuous use for up to 30 days",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the SynHope Mini" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "Users appreciate its compact size, making it ideal for travel. Many find it powerful and effective in cleaning teeth, with some noting that it works as well as larger, more expensive models.",
    subtext: "For a visual review and demonstration of the SynHope Mini, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the SynHope Mini",
    data: [
      { title: "Compact Design", description: "Easy to carry with a telescopic water tank for portability." },
      { title: "High Pressure Performance", description: "1200 water pulses per minute with 140 PSI pressure." },
      { title: "3 Cleaning Modes", description: "Choose from Soft, Pulse, or Strong modes to suit your needs." },
      { title: "IPX7 Waterproof", description: "Safe to use under running water without leaks." },
      { title: "Long Battery Life", description: "Lasts up to 30 days on a full charge." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models of Water Flossers",
    description: "See how the SynHope Mini Cordless Water Flosser stacks up against similar products.",
    models: [
      {
        id: 1,
        path: `${slug}/${m6PlusGlobal.brand}/${m6PlusGlobal.path}`,
        model: "Synhope Mini Cordless",
        image: m6PlusGlobal.images[0].thumbnail,
        alt: "Synhope Mini Cordless Water Flosser",
        prime: true,
        dimensions: " 4.88 x 2.44 x 1.26 in, 5 oz",
        tips: "Includes 4 replacement jet tips",
        capacity: "140 ml.",
        highlight: "Portable design ideal for travel",
        problem: "Limited water capacity compared to larger models",
        price: m6PlusGlobal.productPrice,
        satisfaction: m6PlusGlobal.rating.stars,
      },
    ],
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "An honest look at the strengths and limitations of the SYNHOPE Mini Cordless Water Flosser.",
    cta: "Buy on Amazon",
    buyLink: m6PlusGlobal.amazonUrl,
    pros: [
      { title: "Compact and travel-friendly" },
      { title: "Effective cleaning with high water pressure" },
      { title: "Long-lasting battery life" },
    ],
    cons: [
      { title: "Limited water tank capacity" },
      { title: "Not ideal for extensive cleaning sessions" },
    ],
  },
}

export default synhopeM6Plus
