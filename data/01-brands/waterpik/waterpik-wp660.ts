import type { ProductDetails } from '~/types/product-details';
import { panasonicEW1511WGlobalData, synhopeM6PlusGlobalData, waterpikwp580GlobalData, waterpikwp660GlobalData } from '~/data/best/01-global';

const waterpikwp660: ProductDetails = {
  id: waterpikwp660GlobalData.id,
  fileName: 'waterpik-wp660',
  info: {
    images: waterpikwp660GlobalData.images,
    alt: "Waterpik WP 660 Aquarius Water Flosser",
    title: "Waterpik Aquarius WP 660  Water Flosser, 650 ml.",
    description: "The Waterpik Aquarius Water Flosser is a professional-grade dental care device designed for teeth, gums, and braces. It features 10 pressure settings, a massage mode for gum stimulation, and a built-in timer/pacer. It includes a large reservoir for over 90 seconds of use, a maneuverable flossing wand, and a convenient water on/off switch. It's the #1 water flosser brand recommended by dental professionals and the first to earn the American Dental Association (ADA) Seal of Acceptance.",
    price: waterpikwp660GlobalData.productPrice,
    updatedDate: waterpikwp660GlobalData.updatedDate,
    buyLink: waterpikwp660GlobalData.amazonUrl,
    cta: "Buy on Amazon",
    rating: waterpikwp660GlobalData.rating,
    video: waterpikwp660GlobalData.videoUrl,
    video2: waterpikwp660GlobalData.videoUrl2,
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
        path: waterpikwp660GlobalData.path,
        model: "Waterpik WP 660",
        image: waterpikwp660GlobalData.images[0].thumbnail,
        alt: 'Waterpik WP-660 Oral Irrigator',
        prime: true,
        dimensions: '3.8 x 4.7 x 10.3 in, 22 oz',
        tips: "7 tips",
        capacity: "650 ml.",
        highlight: '10 Nozzles, Best value',
        problem: 'Noise, size',
        price: waterpikwp660GlobalData.productPrice,
        satisfaction: waterpikwp660GlobalData.rating.stars,
      },
      {
        id: 2,
        path: waterpikwp580GlobalData.path,
        model: "Waterpik Cordless Express",
        image: waterpikwp580GlobalData.images[0].thumbnail,
        alt: "Waterpik Cordless Express Water Flosser",
        prime: false,
        dimensions: "11.75 x 2.5 x 3.63 inches",
        tips: "2 Precision (Classic)",
        capacity: "Up to 30 seconds",
        highlight: "Most affordable",
        problem: "Shorter battery life",
        price: waterpikwp580GlobalData.productPrice,
        satisfaction: waterpikwp580GlobalData.rating.stars,
      },
      {
        id: 3,
        path: synhopeM6PlusGlobalData.path,
        model: "SYNHOPE Mini Cordless",
        image: synhopeM6PlusGlobalData.images[0].thumbnail,
        alt: "SYNHOPE Mini Cordless Water Flosser",
        prime: true,
        dimensions: "Palm-sized, lightweight design",
        tips: "Includes 4 replacement jet tips",
        capacity: "Telescopic water tank for up to 50 seconds of flossing",
        highlight: "Portable design ideal for travel",
        problem: "Limited water capacity compared to larger models",
        price: synhopeM6PlusGlobalData.productPrice,
        satisfaction: synhopeM6PlusGlobalData.rating.stars,
      },
      {
        id: 4,
        path: panasonicEW1511WGlobalData.path,
        model: "EW-DJ10-W",
        image: panasonicEW1511WGlobalData.images[0].thumbnail,
        alt: "Panasonic Portable Water Flosser EW-DJ10",
        prime: true,
        dimensions: "2 x 2.7 x 8.6 inches",
        tips: "2 interchangeable tips",
        capacity: "165 ml.",
        highlight: "Collapsible, travel-friendly design",
        problem: "Short operating time of 20 minutes",
        price: panasonicEW1511WGlobalData.productPrice,
        satisfaction: panasonicEW1511WGlobalData.rating.stars,
      },
    ],
  },
  proAndCons: {
    id: "pros-and-cons",
    title: "Pros and Cons",
    description: "Evaluate the strengths and limitations of the Waterpik Aquarius WP 660.",
    cta: "Buy on Amazon",
    buyLink: waterpikwp660GlobalData.amazonUrl,
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
};

export default waterpikwp660;
