import type { ProductDetails } from '~/types/product-details'

import { wp662Global } from './wp-662-global'

const slug = 'reviews'

const waterpikwp662: ProductDetails = {
  info: {
    slug: `${slug}/${wp662Global.brand}/${wp662Global.path}`,
    images: wp662Global.images,
    alt: "Waterpik Aquarius WP 662 Water Flosser, 650 ml.",
    title: "Waterpik Aquarius WP 662 Water Flosser, 650 ml.",
    description: "The Waterpik Aquarius WP 662 features 10 pressure settings, a massage mode for gum stimulation, and a built-in timer/pacer. The device includes a large reservoir for over 90 seconds of use, a small maneuverable flossing wand, and 7 tips for multiple users and needs. It is ADA accepted for safety and effectiveness, and it uses PrecisionPulse technology to remove up to 99.9% of plaque bacteria from treated areas.",
    price: wp662Global.productPrice,
    updatedDate: wp662Global.updatedDate,
    buyLink: wp662Global.amazonUrl,
    cta: "Buy on Amazon",
    rating: wp662Global.rating,
    video: wp662Global.videoUrl,
    video2: wp662Global.videoUrl2,
    characteristics: [
      "10 pressure settings",
      "7 tips for multiple users",
      "Large reservoir for 90+ seconds of use",
      "Corded electric with advanced features",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Waterpik Aquarius WP 662" },
    { id: "#pros-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The overall sentiment from the reviews of the Waterpik Aquarius Water Flosser is highly positive. Users appreciate its effectiveness in improving oral hygiene, ease of use, and the variety of pressure settings and tips available. Many reviewers highlight its ability to remove plaque and improve gum health, making it a valuable addition to their dental care routine. There are a few minor criticisms, such as the design of the water tank lid, but these do not significantly impact the overall positive sentiment.",
    subtext: "For a visual review and demonstration of the Waterpik Aquarius WP 662, you may find the following videos helpful:"
  },
  features: {
    id: "features",
    title: "Key Features of the Waterpik Aquarius WP 662",
    data: [
      { title: "10 Pressure Settings", description: "Allows customized cleaning for sensitive gums to deep cleaning." },
      { title: "ADA Accepted", description: "Proven safety and effectiveness for dental care." },
      { title: "Large Reservoir", description: "650ml. capacity for over 90 seconds of use without refilling." },
      { title: "7 Tips Included", description: "Suitable for multiple users and dental needs." },
      { title: "Built-in Timer", description: "Pauses briefly at 30 and 60 seconds to track flossing time." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Compare the Waterpik Aquarius WP 662 with other models for travel and home use.",
    description: "Evaluate how the Waterpik Aquarius WP 662 stands out against similar products.",
    models: [
      {
        id: 1,
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
      }
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "Explore the benefits and limitations of the Waterpik Aquarius WP 662.",
    cta: "Buy on Amazon",
    buyLink: wp662Global.amazonUrl,
    pros: [
      { title: "10 adjustable pressure settings" },
      { title: "Includes 7 tips for multiple users" },
      { title: "ADA accepted for safety and effectiveness" },
    ],
    cons: [
      { title: "Requires Corded Power" },
      { title: "Designed for home use rather than travel" },
    ],
  },
}

export default waterpikwp662
