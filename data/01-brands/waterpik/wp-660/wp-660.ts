import type { ProductDetails } from '~/types/product-details'
import { wp660Global } from './wp-660-global'

import { wp662Global } from "~/data/01-brands/waterpik/wp-662/wp-662-global"
import { wp667Global } from "~/data/01-brands/waterpik/wp-667/wp-667-global"
import { fc165Global } from "~/data/01-brands/turewell/fc-165/fc-165-global"
import { hf9Global } from "~/data/01-brands/h20floss/hf9/hf9-global"


const slug = 'reviews'

const waterpikwp660: ProductDetails = {
  info: {
    slug: `${slug}/${wp660Global.brand}/${wp660Global.path}`,
    images: wp660Global.images,
    alt: "Waterpik WP 660 Aquarius Water Flosser",
    title: "Waterpik Aquarius WP 660  Water Flosser, 650 ml.",
    description: "The Waterpik Aquarius Water Flosser WP 660 is a professional-grade dental care device designed for teeth, gums, and braces. It features 10 pressure settings, a massage mode for gum stimulation, and a built-in timer/pacer. It includes a large reservoir for over 90 seconds of use, a maneuverable flossing wand, and a convenient water on/off switch. It's the #1 water flosser brand recommended by dental professionals and the first to earn the American Dental Association (ADA) Seal of Acceptance.",
    price: wp660Global.productPrice,
    updatedDate: wp660Global.updatedDate,
    buyLink: wp660Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: wp660Global.rating,
    video: wp660Global.videoUrl,
    video2: wp660Global.videoUrl2,
    characteristics: [
      "7 tips for a variety of dental needs",
      "10 adjustable pressure settings",
      "Backed by a 3-year limited",
      "90+ seconds of flossing time",
      "Rotation: 360-degree",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Waterpik WP 660" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The sentiment for the reviews on the Waterpik Aquarius Water Flosser page is overwhelmingly positive. Many users praise its effectiveness in improving oral hygiene, ease of use, and variety of pressure settings and tips. They appreciate the large water reservoir and built-in timer. Some users mention minor issues such as the design of the tank lid and the noise level of the device. Overall, customers are highly satisfied with the Waterpik Aquarius Water Flosser, finding it a valuable addition to their dental care routine.",
    subtext: "For a visual review and demonstration of the Waterpik WP 660, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Waterpik WP 660",
    data: [
      {
        title: "Pressure Settings",
        description: "It has 10 pressure settings, a massage mode for gum stimulation, and a built-in timer/pacer that pauses at 30 seconds and 1 minute to track flossing time.",
      },
      {
        title: "Ease of Use",
        description: "It includes a large reservoir for over 90 seconds of use without refilling, a maneuverable flossing wand, and a convenient water on/off switch.",
      },
      {
        title: "Recommendations",
        description: "It's the #1 water flosser brand recommended by dental professionals and the first to earn the American Dental Association (ADA) Seal of Acceptance.",
      },
      {
        title: "Effectiveness",
        description: "It removes up to 99.9% of plaque bacteria from treated areas, helping to prevent gingivitis, cavities, and bad breath."
      },
      {
        title: "Warranty",
        description: "It comes with a 3-year limited manufacturer's warranty.",
      },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Waterpik WP 660 with Similar Models",
    description: "Discover how the Waterpik WP 660 stacks up against other water flossers in the market.",
    models: [
      {
        id: 1,
        path: `${slug}/${wp660Global.brand}/${wp660Global.path}`,
        model: "Waterpik WP 660",
        image: wp660Global.images[0].thumbnail,
        alt: 'Waterpik WP-660 Oral Irrigator',
        prime: true,
        dimensions: '3.8 x 4.7 x 10.3 in, 22 oz',
        tips: "7 tips",
        capacity: "650 ml.",
        highlight: '10 Nozzles, Best value',
        problem: 'Noise, size',
        price: wp660Global.productPrice,
        satisfaction: wp660Global.rating.stars,
      },
      {
        id: 2,
        path: `${slug}/${wp662Global.brand}/${wp662Global.path}`,
        model: "Waterpik WP 662",
        image: wp662Global.images[0].thumbnail,
        alt: "Waterpik Aquarius WP 662",
        prime: true,
        dimensions: "3.8 x 4.7 x 10.3 in, 22 oz",
        tips: "7 Tips",
        capacity: "650 ml.",
        highlight: "Advanced pressure settings",
        problem: "Requires corded power",
        price: wp662Global.productPrice,
        satisfaction: wp662Global.rating.stars,
      },
      {
        id: 3,
        path: `${slug}/${wp667Global.brand}/${wp667Global.path}`,
        model: "Waterpik WP 667",
        image: wp667Global.images[0].thumbnail,
        alt: "Waterpik Aquarius WP-667 in Gray",
        prime: false,
        dimensions: "3.8 x 4.7 x 10.3 in, ",
        tips: "7 Tips",
        capacity: "650 ml.",
        highlight: "10 Pressure Settings, ADA Accepted",
        problem: "Requires power outlet.",
        price: wp667Global.productPrice,
        satisfaction: wp667Global.rating.stars,
      },
      {
        id: 4,
        path: `${slug}/${fc165Global.brand}/${fc165Global.path}`,
        model: 'Turewell FC165',
        image: fc165Global.images[0].thumbnail,
        alt: 'Turewell FC165 Oral Irrigator',
        prime: true,
        dimensions: '5.7 x 4.9 x 8.07 in, 20 oz',
        tips: '8',
        capacity: '600 ml.',
        highlight: '8 Nozzles',
        problem: 'Water Resistance',
        price: fc165Global.productPrice,
        satisfaction: fc165Global.rating.stars,
      },
      {
        id: 1,
        path: `${slug}/${hf9Global.brand}/${hf9Global.path}`,
        model: 'H2ofloss HF9',
        image: hf9Global.images[0].thumbnail,
        alt: 'H2ofloss HF 9 Oral Irrigator',
        prime: true,
        dimensions: '2.56 x 4 x 8.39 in, 28 oz',
        tips: '13',
        capacity: '800 ml.',
        highlight: 'User-Friendly Design',
        problem: 'Leaking Problems',
        price: hf9Global.productPrice,
        satisfaction: hf9Global.rating.stars,
      }
    ],
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "Evaluate the strengths and limitations of the Waterpik Aquarius WP 660.",
    cta: "Buy on Amazon",
    buyLink: wp660Global.amazonUrl,
    pros: [
      { "title": "10 adjustable pressure settings for a customized clean" },
      { "title": "Includes a massage mode for gum stimulation" },
      { "title": "Large reservoir for over 90 seconds of use without refilling" }
    ],
    cons: [
      { "title": "Some users find it to be noisier than expected" },
      { "title": "The tank lid design can be inconvenient for some users" },
      { "title": "Needs to be plugged into a power outlet, which might not be convenient for all users" }
    ],
  },
}

export default waterpikwp660