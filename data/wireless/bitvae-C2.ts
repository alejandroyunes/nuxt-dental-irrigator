import type { ProductDetails } from '~/types/product-details'
import { bitvaeC2GlobalData, coslusC20F5020EGlobalData, nicwellF5025GlobalData, nicefeelFC1592GlobalData, insmartFC256GlobalData } from './01-global'

const bitvaeC2: ProductDetails = {
  id: bitvaeC2GlobalData.id,
  fileName: 'bitvae-C2',
  info: {
    images: bitvaeC2GlobalData.images,
    alt: "Bitvae C2 Professional Water Dental Flosser, 260 ml.",
    title: "Bitvae C2 Water Dental Flosser for Teeth, 260 ml.",
    description: "The Bitvae C2 provides advanced oral care with customizable cleaning options, a large-capacity reservoir, and a sleek design suitable for travel. Portable, with a 300 ml tank, ergonomic design, 6 nozzles, and special pressure frequency for a brighter smile.",
    price: bitvaeC2GlobalData.productPrice,
    updatedDate: bitvaeC2GlobalData.updatedDate,
    buyLink: bitvaeC2GlobalData.amazonUrl,
    video: bitvaeC2GlobalData.videoUrl,
    video2: bitvaeC2GlobalData.videoUrl2,
    cta: 'Buy Now on Amazon',
    rating: bitvaeC2GlobalData.rating,
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
        path: bitvaeC2GlobalData.path,
        model: 'Bitvae C2',
        image: bitvaeC2GlobalData.images[0].thumbnail,
        alt: 'Bitvae C2 Oral Irrigator Image',
        prime: true,
        dimensions: '2.6 x 3.7 x 8.78 inches; 9 oz',
        tips: '6',
        capacity: '260 ml.',
        highlight: 'Effective Cleaning, Compact Design, Long Battery Life',
        problem: 'Water Resistance, Durability',
        price: bitvaeC2GlobalData.productPrice,
        satisfaction: bitvaeC2GlobalData.rating.stars,
      },
      {
        id: 2,
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
      {
        id: 3,
        path: insmartFC256GlobalData.path,
        model: 'InSmart FC256',
        image: insmartFC256GlobalData.images[0].thumbnail,
        alt: 'InSmart FC256 Oral Irrigator Image',
        prime: true,
        dimensions: '8.27 x 3.15 x 1.97 in, 14.07 oz',
        tips: '6',
        capacity: '300 ml.',
        highlight: 'Travel Carrying bag, Ease of use, Size, 4 Water Pressure Modes',
        problem: 'Battery Life, Durability, Nozzle Wear',
        price: insmartFC256GlobalData.productPrice,
        satisfaction: insmartFC256GlobalData.rating.stars,
      },
      {
        id: 4,
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
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: "Pros and Cons",
    description: "Bitvae C2 offers impressive cleaning capabilities and portability, though durability and water resistance may be considerations.",
    cta: 'Buy on Amazon',
    buyLink: bitvaeC2GlobalData.amazonUrl,
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