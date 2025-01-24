import type { ProductDetails } from '~/types/product-details'

import { hf9Global } from '../../h20floss/hf9/hf9-global'
import { m01Global } from '../../oeeter/m01/m01-global'
import { fc165Global } from '../../turewell/fc-165/fc-165-global'
import { fc166Global } from './fc166-global'

const slug = 'reviews'

const sawgmoreFC166: ProductDetails = {
  info: {
    slug: `${slug}/${fc166Global.brand}/${fc166Global.path}`,
    images: fc166Global.images,
    alt: "Sawgmore FC166 Water Flosser Oral Irrigator ",
    title: "Sawgmore FC166 Water Flosser Oral Irrigator, 600 ml.",
    description: "The perfect tooth cleaner for those with braces, implants, crowns, or periodontal pockets. Sawgmore water flosser can effectively remove 99.9% of plaque and solve various oral problems.",
    price: fc166Global.productPrice,
    updatedDate: fc166Global.updatedDate,
    buyLink: fc166Global.amazonUrl,
    cta: "Buy Now on Amazon",
    rating: fc166Global.rating,
    video: fc166Global.videoUrl,
    characteristics: [
      "Level pressure control adjustment",
      "600 ml large detachable water tank",
      "8 Jets for various cleaning needs",
      "360° nozzle rotation",
      "Anti-leakage design ensures no liquid leaks during high-pressure use",
      "Available in black and white",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Sawgmore FC166" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The Sawgmore FC166 Water Flosser has received generally positive feedback from users. Many customers appreciate its effectiveness in cleaning teeth and gums, its large water tank capacity, and the variety of pressure settings and nozzle tips it offers. Users have found it to be a valuable addition to their oral hygiene routine, often highlighting its ability to remove plaque and food debris from hard-to-reach areas.",
    subtext: "For a visual review and demonstration of the Sawgmore FC166, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Best Features of the Sawgmore FC166",
    data: [
      { title: "Effectively Clean", description: "Removes food debris between teeth with 1250-1700 pulsations per minute." },
      { title: "Adjustable Cleaning Modes", description: "10 water pressure settings from 30 to 125 PSI." },
      { title: "Large Capacity", description: "600ML tank allows for 90 seconds of continuous use." },
      { title: "Multiple Nozzles", description: "6 kinds of unique tips for various cleaning needs." },
      { title: "Portable and Reliable", description: "Leak-proof design ensures safe and convenient use." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Sawgmore FC166 with Similar Models",
    description: "How the Sawgmore FC166 stands out in the market.",
    models: [
      {
        id: 1,
        path: `${slug}/${fc166Global.brand}/${fc166Global.path}`,
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
    ],
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons of the Sawgmore FC166",
    description: "An honest look at the Sawgmore FC166 Water Flosser.",
    cta: "Buy on Amazon",
    buyLink: fc166Global.amazonUrl,
    pros: [
      { title: "High quality and value" },
      { title: "Variety of interchangeable attachments" },
      { title: "Affordable pricing" },
    ],
    cons: [
      { title: "Large reservoir can be messy to refill" },
      { title: "Water pulsation can be noisy" },
    ],
  },
};

export default sawgmoreFC166