import type { ProductDetails } from '~/types/product-details'
import { c2Global } from './c2-global'
import { f5020eGlobal } from '~/data/01-brands/coslus/f5020e/f5020e-global'
import { fc256Global } from '~/data/01-brands/inSmart/fc256/fc256-global'
import { f5025Global } from '~/data/01-brands/nicwell/f5025/f5025-global'

const slug = 'reviews'

const bitvaeC2: ProductDetails = {
  info: {
    slug: `${slug}/${c2Global.brand}/${c2Global.path}`,
    images: c2Global.images,
    alt: "Bitvae C2 Professional Water Dental Flosser, 260 ml.",
    title: "Bitvae C2 Water Dental Flosser for Teeth, 260 ml.",
    description: "The Bitvae C2 provides advanced oral care with customizable cleaning options, a large-capacity reservoir, and a sleek design suitable for travel. Portable, with a 300 ml tank, ergonomic design, 6 nozzles, and special pressure frequency for a brighter smile.",
    price: c2Global.productPrice,
    updatedDate: c2Global.updatedDate,
    buyLink: c2Global.amazonUrl,
    video: c2Global.videoUrl,
    video2: c2Global.videoUrl2,
    cta: 'Buy Now on Amazon',
    rating: c2Global.rating,
    characteristics: [
      "Wide Mouth Reservoir for Easy Cleaning.",
      "260 ml tank for a 60-second full-mouth clean.",
      "3 Modes and 5 Intensity Settings for personalized oral care.",
      "FDA, FCC, CE, PSE certified for safety.",
      "40-day battery life after 4 hours of charging.",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the inSmart FC256" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: 'The Best of Bitvae C2',
    description: "The Bitvae Water Dental Flosser has received generally positive feedback from users. Many appreciate its customizable cleaning options, with three modes and five intensity settings, making it suitable for both gentle and deep cleaning.",
    subtext: "For a visual review and demonstration of the H2ofloss HF 9, you may find the following videos helpful:"    
  },
  features: {
    id: "features",
    title: 'Why Choose Bitvae C2?',
    data: [
      {
        title: 'Ultimate Portability',
        description: 'Compact and cordless design makes it perfect for use at home, in the office, or on the go.',
      },
      {
        title: 'Precision Cleaning',
        description: 'Advanced 3 modes and 5 intensity settings target blind spots and hard-to-reach areas for a tailored experience.',
      },
      {
        title: 'Hygienic Wide-Mouth Reservoir',
        description: 'Detachable, easy-to-clean design ensures optimal hygiene for everyday use.',
      },
      {
        title: 'Versatile Nozzle Options',
        description: 'Includes 6 replaceable nozzles for diverse cleaning needs, from gum care to plaque removal.',
      },
      {
        title: 'Long-Lasting Battery',
        description: 'Enjoy up to 40 days of usage on a single 4-hour charge, perfect for worry-free travel.',
      },
      {
        title: 'Large Capacity Reservoir',
        description: 'The 260ml water tank supports a full 60-second deep clean without frequent refills.',
      },
      {
        title: 'Certified Quality',
        description: 'FDA, FCC, CE, and PSE certifications guarantee reliable safety and performance.',
      },
      {
        title: 'Enhanced Oral Health',
        description: 'Promotes gum health, fresh breath, and bright smiles with regular use.',
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: 'Compare the Bitvae C2 with other irrigators',
    description: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
        path: `${slug}/${c2Global.brand}/${c2Global.path}`,
        model: 'Bitvae C2',
        image: c2Global.images[0].thumbnail,
        alt: 'Bitvae C2 Oral Irrigator Image',
        prime: true,
        dimensions: '2.6 x 3.7 x 8.78 inches; 9 oz',
        tips: '6',
        capacity: '260 ml.',
        highlight: 'Effective Cleaning, Compact Design, Long Battery Life',
        problem: 'Water Resistance, Durability',
        price: c2Global.productPrice,
        satisfaction: c2Global.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: "Pros and Cons",
    description: "Bitvae C2 offers impressive cleaning capabilities and portability, though durability and water resistance may be considerations.",
    cta: 'Buy on Amazon',
    buyLink: c2Global.amazonUrl,
    pros: [
      { title: 'Thorough cleaning with customizable modes and nozzles.' },
      { title: 'Portable and lightweight for travel.' },
      { title: 'Durable battery lasting up to 40 days.' },
    ],
    cons: [
      { title: 'Durability concerns from some customers.' },
      { title: 'Potential water leakage issues.' },
    ],
  },
}

export default bitvaeC2