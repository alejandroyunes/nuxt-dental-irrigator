import type { ProductDetails } from '~/types/product-details';
import { turewellFC162GlobalData } from './01-global';
import { turewellFC165GlobalData } from './01-global';
import { sawgmoreFC166GlobalData } from './01-global';
import { oeeterM01GlobalData } from './01-global';

const turewellFC162: ProductDetails = {
  id: turewellFC162GlobalData.id,
  fileName: 'turewell-FC162',
  info: {
    images: turewellFC162GlobalData.images,
    alt: "Turewell FC162 Water Dental Flosser",
    title: "Turewell FC162 Water Dental Flosser, 600ml.",
    description: "The Turewell FC162 is a powerful and efficient water dental flosser that improves gum health, removes plaque, and whitens teeth. It features 10 adjustable pressure levels, 8 specialized water jet tips for family use, a 600ml water tank, and a leakproof design. Ideal for braces, implants, crowns, and periodontal pockets.",
    price: turewellFC162GlobalData.productPrice,
    updatedDate: turewellFC162GlobalData.updatedDate,
    buyLink: turewellFC162GlobalData.amazonUrl,
    video: turewellFC162GlobalData.videoUrl,
    video2: turewellFC162GlobalData.videoUrl2,
    cta: "Buy on Amazon",
    rating: turewellFC162GlobalData.rating,
    characteristics: [
      "Corded Electric Power Source",
      "10 Adjustable Water Pressure Settings (30-125 PSI)",
      "8 Dental Water Jet Tips (3 high-pressure, 5 specialized)",
      "600ml Large Water Tank for 90 Seconds of Use",
      "360° Rotatable Nozzle",
      "Leakproof and Anti-Leak Design",
      "Suction Cups for Stability",
      "Heartiness Organizer for Storing Tips",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Turewell FC162" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "Turewell FC162 Water Dental Flosser",
    description: "The overall sentiment of the reviews is predominantly positive, with most users praising the product's performance, value for money, and ease of use. Several reviewers highlight its efficiency, craftsmanship, and compact design, with many expressing high satisfaction and strong recommendations. However, a few mixed and negative reviews mention concerns about durability, minor design flaws, or functional issues, indicating some variability in user experiences. Despite these, the general consensus leans favorably toward the product's quality and affordability.",
    subtext: "For a visual review and demonstration of the Turewell FC162, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Turewell FC162",
    data: [
      {
        title: "10 Adjustable Water Pressure Settings",
        description: "Customize pressure from 30-125 PSI for kids, beginners, and experienced users."
      },
      {
        title: "8 Dental Water Jet Tips",
        description: "Includes 3 ordinary high-pressure tips and 5 specialized tips (Orthodontic, Tongue Cleaner, Periodontal, Plaque, Toothbrush)."
      },
      {
        title: "600ml Large Water Tank",
        description: "Provides up to 90 seconds of uninterrupted use, with an easy on/off switch on the handle."
      },
      {
        title: "360° Rotatable Nozzle",
        description: "Reaches all areas of the mouth for effective tartar and food debris removal."
      },
      {
        title: "Suction Cups for Stability",
        description: "Prevents accidental sliding during use."
      },
      {
        title: "Leakproof and Anti-Leak Design",
        description: "Improved double-sealing rings ensure no water leakage."
      },
      {
        title: "Heartiness Organizer",
        description: "Stores tips in a clean and organized way."
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "We compare the Turewell FC162 with other popular dental flossers to help you make an informed decision.",
    models: [
      {
        id: 1,
        path: turewellFC162GlobalData.path,
        model: "Turewell FC162",
        image: turewellFC162GlobalData.images[0].thumbnail,
        alt: "Turewell FC162 Water Dental Flosser",
        prime: true,
        dimensions: "10 x 8 x 6 in, 20 oz",
        tips: "8",
        capacity: "600 ml.",
        highlight: "Affordable with solid performance",
        problem: "Corded power source may limit portability",
        price: turewellFC162GlobalData.productPrice,
        satisfaction: turewellFC162GlobalData.rating.stars,
      },
      {
        id: 2,
        path: turewellFC165GlobalData.path,
        model: 'Turewell FC165',
        image: turewellFC165GlobalData.images[0].thumbnail,
        alt: 'Turewell FC165 Oral Irrigator',
        prime: true,
        dimensions: '5.7 x 4.9 x 8.07 in, 1.7 lbs',
        tips: '8',
        capacity: '600 ml',
        highlight: '8 Nozzles, Value, Ease of use',
        problem: 'Water Resistance',
        price: turewellFC165GlobalData.productPrice,
        satisfaction: turewellFC165GlobalData.rating.stars,
      },
      {
        id: 3,
        path: oeeterM01GlobalData.path,
        model: "Oeeter M01",
        image: oeeterM01GlobalData.images[0].thumbnail,
        alt: "Oeeter M01 Water Dental Flosser",
        prime: true,
        dimensions: "8 x 6 x 4 inches",
        tips: "7 Tips",
        capacity: "600ML",
        highlight: "Compact and portable design with magnetic handle",
        problem: "Lower water capacity compared to competitors",
        price: oeeterM01GlobalData.productPrice,
        satisfaction: oeeterM01GlobalData.rating.stars,
      },
      {
        id: 4,
        path: sawgmoreFC166GlobalData.path,
        model: "Sawgmore FC166",
        image: sawgmoreFC166GlobalData.images[0].thumbnail,
        alt: "FC166 Water Flosser",
        prime: true,
        dimensions: "7.9 x 4.5 x 3.9 inches",
        tips: "8",
        capacity: "600ml",
        highlight: "10 adjustable pressure levels",
        problem: "May require frequent refills at high settings",
        price: sawgmoreFC166GlobalData.productPrice,
        satisfaction: sawgmoreFC166GlobalData.rating.stars,
      },
    ]
  },
  proAndCons: {
    id: "pros-cons",
    title: "Pros and Cons",
    description: "Here's a breakdown of the pros and cons of the TUREWELL FC162 Water Dental Flosser.",
    cta: "Buy on Amazon",
    buyLink: turewellFC162GlobalData.amazonUrl,
    pros: [
      { title: "10 Pressure Settings for Customizable Use" },
      { title: "Large Water Tank for Longer Use" },
      { title: "8 Specialized Tips for Versatile Cleaning" },
      { title: "Heartiness Organizer for Convenient Tip Storage" },
    ],
    cons: [
      { title: "Corded Power Source" },
      { title: "May be too large for travel" },
    ],
  },
};

export default turewellFC162
