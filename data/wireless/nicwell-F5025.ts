import type { ProductDetails } from '~/types/product-details'
import { nicwellF5025GlobalData, waterPikWF02GlobalData, nicefeelFC1592GlobalData, bitvaeC2GlobalData } from './01-global'

const nicwellF5025: ProductDetails = {
  id: nicefeelFC1592GlobalData.id,
  fileName: 'nicwell-F5025',
  info: {
    images: nicwellF5025GlobalData.images,
    alt: 'Nicwell F5025 Water Dental Flosser Teeth Pick - Cordless, 200 ml.',
    title: 'Nicwell F5025 Water Dental Flosser Teeth Pick - Cordless, 200 ml.',
    description: 'The Nicwell Professional Water Flosser F5025, 200 ml, with upgraded unique pulsation technique, Nicwell water dental flosser can offer high pressure water pulse 1400-1800 times/min, 30-110PSI strong water pressure to remove 99.99% food residue hidden deep, massage the gum effectively and promoting blood circulation.',
    price: nicwellF5025GlobalData.productPrice,
    updatedDate: nicwellF5025GlobalData.updatedDate,
    buyLink: nicwellF5025GlobalData.amazonUrl,
    cta: 'Buy on Amazon',
    rating: nicwellF5025GlobalData.rating,
    video: nicwellF5025GlobalData.videoUrl,
    video2: nicwellF5025GlobalData.videoUrl2,
    characteristics: [
      "Cordless, portable and chargeable",
      "Gentle pressure (1400/min) for sensitive teeth",
      "Low Noise",
      "5 jet tips for different cleaning needs",
      "IPX7 waterproof 🔥",
      "4 cleaning modes"
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Nicwell F5025" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The reviews convey a generally positive sentiment, highlighting the product’s affordability, strong performance, portability, and long battery life. Many users find it effective and recommend it, though concerns about durability, a small water reservoir, and the lack of a low battery alert are noted.",
    subtext: "For a visual review and demonstration of the Nicwell F5025, you may find the following videos helpful:"
  },
  comparison: {
    id: "comparison",
    title: 'Compare the Nicwell F5025 with other irrigators',
    description:
      'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2024.',
    models: [
      {
        id: 1,
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
        satisfaction: nicwellF5025GlobalData.rating.stars
      },
      {
        id: 2,
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
        id: 3,
        path: nicefeelFC1592GlobalData.path,
        model: 'Nicefeel FC1592',
        image: nicefeelFC1592GlobalData.images[0].thumbnail,
        alt: 'Nicefeel FC1592 Oral Irrigator Image',
        prime: true,
        dimensions: '0.3 x 0.31 x 0.87 in, 13 oz',
        tips: '4',
        capacity: '300 ml.',
        highlight: 'Battery-powered, memory function, 3 cleaning modes',
        problem: 'Not suitable for large families',
        price: nicefeelFC1592GlobalData.productPrice,
        satisfaction: nicefeelFC1592GlobalData.rating.stars,
      },
      {
        id: 4,
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
    ]
  },
  features: {
    id: "features",
    title: "Key Features of the Nicwell F5025",
    data: [
      { title: "Advanced Pulsation Technology", description: "The Nicwell F5025 utilizes an upgraded pulsation technique that delivers high-pressure water pulses, effectively removing up to 99.99% of food residue. This deep cleaning action helps whiten teeth and improve gum health." },
      { title: "IPX7 Waterproof Rating", description: "With its double-sealing rings, the device is reliably waterproof, allowing for safe use in the bathroom or shower and easy cleaning." },
      { title: "Long-Lasting Battery Life", description: " Equipped with a powerful lithium battery, the flosser charges fully in about four hours and lasts for approximately 21 days of regular use. The USB charging feature adds convenience, enabling charging via various devices." },
      { title: "360-Degree Rotatable Nozzle", description: "This feature allows for comprehensive cleaning, reaching all areas of the mouth with ease." },
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: 'Pros and Cons of Nicwell F5025',
    description:
      'In summary, while the oral irrigator has notable positive aspects such as value, cleanliness, ease of use, and overall performance, there are significant concerns regarding quality, water resistance, battery life, and the charging feature. Users\' experiences with these aspects vary, making it important for potential buyers to consider these factors based on their personal preferences and needs.',
    cta: 'Buy on Amazon',
    buyLink: nicwellF5025GlobalData.amazonUrl,
    pros: [
      { title: 'Well worth the price.' },
      { title: 'Users like the cleanliness the product provides, effectively cleaning between teeth and leaving a clean feeling.' },
      { title: 'The oral irrigator is praised for being easy to use, offering convenience and cost-effectiveness in daily oral care routines.' },
      { title: 'Impressive overall performance for maintaining oral hygiene.' },
      { title: 'Convenient compared to traditional flossing.' },
    ],
    cons: [
      { title: 'Opinions on water resistance, battery life, and overall performance are mixed, indicating varying experiences among users.' },
      { title: 'Customers are not satisfied with the charging feature of the oral irrigator. They mention that the charger is a USB and they never have a usb charger in the bathroom.' },
    ],
  },
}

export default nicwellF5025