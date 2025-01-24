import type { ProductDetails } from '~/types/product-details'
import { f5025Global } from './f5025-global'

import { fc1592Global } from '~/data/01-brands/nicefeel/fc1592/fc1592-global'
import { wp660Global } from '~/data/01-brands/waterpik/wp-660/wp-660-global'
import { c2Global } from '~/data/01-brands/bitvae/c2/c2-global'

const slug = 'reviews'

const nicwellf5025: ProductDetails = {
  info: {
    slug: `${slug}/${f5025Global.brand}/${f5025Global.path}`,
    images: f5025Global.images,
    alt: 'Nicwell F5025 Water Dental Flosser Teeth Pick - Cordless, 200 ml.',
    title: 'Nicwell F5025 Water Dental Flosser Teeth Pick - Cordless, 200 ml.',
    description: 'The Nicwell Professional Water Flosser F5025, 200 ml, with upgraded unique pulsation technique, Nicwell water dental flosser can offer high pressure water pulse 1400-1800 times/min, 30-110PSI strong water pressure to remove 99.99% food residue hidden deep, massage the gum effectively and promoting blood circulation.',
    price: f5025Global.productPrice,
    updatedDate: f5025Global.updatedDate,
    buyLink: f5025Global.amazonUrl,
    cta: 'Buy on Amazon',
    rating: f5025Global.rating,
    video: f5025Global.videoUrl,
    video2: f5025Global.videoUrl2,
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
        path: `${slug}/${f5025Global.brand}/${f5025Global.path}`,
        model: 'Nicwell F5025',
        image: f5025Global.images[0].thumbnail,
        alt: 'Nicwell 200 ml Oral Irrigator',
        prime: true,
        dimensions: '8.11 x 4.06 x 2.73 in, 7 oz',
        tips: "5 tips",
        capacity: "200 ml.",
        highlight: "360° rotatable",
        problem: "Slightly heavier",
        price: f5025Global.productPrice,
        satisfaction: f5025Global.rating.stars
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
    buyLink: f5025Global.amazonUrl,
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

export default nicwellf5025