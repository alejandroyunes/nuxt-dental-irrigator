import type { ProductDetails } from '~/types/product-details'
import { waterpikwp667GlobalData } from './01-global'

const waterpikwp667: ProductDetails = {
  id: waterpikwp667GlobalData.id,
  fileName: 'waterpik-wp667',
  info: {
    images: waterpikwp667GlobalData.images,
    alt: "Waterpik Aquarius Water Flosser WP 667 in Gray",
    title: "Waterpik Aquarius WP-667 Water Flosser Professional, 650 ml.",
    description: "The Waterpik Aquarius WP 667 Water Flosser is a fully featured water flosser with enhanced pressure, 10 customizable settings for a thorough clean, a gum-stimulating massage mode, and a built-in timer/pacer that pauses at 30 seconds and 1 minute to track flossing time. It includes a large reservoir for 90+ seconds of use without refilling, 7 tips for multiple users, a dishwasher-safe 22 oz removable reservoir, 360-degree tip rotation, and 10 safe and effective pressure settings.",
    price: waterpikwp667GlobalData.productPrice,
    updatedDate: waterpikwp667GlobalData.updatedDate,
    buyLink: waterpikwp667GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: waterpikwp667GlobalData.rating,
    video: waterpikwp667GlobalData.videoUrl,
    characteristics: [
      "10 Pressure Settings",
      "7 Flossing Tips for Multiple Needs",
      "Removable Water Reservoir with 90+ Seconds of Flossing Time",
      "Compact and Contemporary Design",
      "3-year limited manufacturer’s warranty",
    ]
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#features", content: "Key Features" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#pros-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "The reviews are overwhelmingly positive, with users praising the Waterpik Aquarius for its ease of use, thoughtful design improvements, and effectiveness in enhancing dental hygiene routines, though there are minor critiques regarding specific design elements like the water tank lid.",
    subtext: "For a visual review and demonstration of the Waterpik Aquarius WP 667, you may find the following videos helpful:",
  },
  features: {
    id: "features",
    title: "Key Features",
    data: [
      { title: "10 Pressure Settings", description: "Ranging from extra low to extra high for customized cleaning." },
      { title: "7 Flossing Tips", description: "Includes Precision, Plaque Seeker, Orthodontic, and Pik Pocket tips." },
      { title: "Removable Water Reservoir", description: "Provides over 90 seconds of continuous flossing time." },
      { title: "ADA Accepted", description: "Clinically proven effective for plaque removal and gum health." },
      { title: "360-Degree Rotating Tip", description: "Easily reaches all areas, including back teeth." },
    ],
  },
  comparison: {
    id: "comparison",
    title: "Comparison with Similar Models",
    description: "See how the Waterpik Aquarius WP 667 stacks up against other popular water flossers.",
    models: [
      {
        id: 0,
        path: waterpikwp667GlobalData.path,
        model: "Waterpik WP 667",
        image: waterpikwp667GlobalData.images[0].thumbnail,
        alt: "Waterpik Aquarius WP-667 in Gray",
        prime: false,
        dimensions: "3.8 x 4.7 x 10.3 in, ",
        tips: "7 Tips",
        capacity: "650 ml.",
        highlight: "10 Pressure Settings, ADA Accepted",
        problem: "Requires power outlet.",
        price: waterpikwp667GlobalData.productPrice,
        satisfaction: waterpikwp667GlobalData.rating.stars,
      }
    ]
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "Understand the advantages and limitations of the Waterpik Aquarius WP-667.",
    cta: "Buy on Amazon",
    buyLink: waterpikwp667GlobalData.amazonUrl,
    pros: [
      { title: "Effective plaque removal and gum health improvement." },
      { title: "Multiple tips for various dental needs." },
      { title: "ADA Accepted for safety and effectiveness." },
    ],
    cons: [
      { title: "Requires a power outlet; not cordless." },
      { title: "Larger footprint compared to portable models." },
    ],
  },
}

export default waterpikwp667
