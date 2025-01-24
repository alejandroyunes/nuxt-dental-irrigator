import type { ProductDetails } from '~/types/product-details'

import { c2Global } from '~/data/01-brands/bitvae/c2/c2-global'
import { fc1592Global } from '~/data/01-brands/nicefeel/fc1592/fc1592-global'
import { f5025Global } from '~/data/01-brands/nicwell/f5025/f5025-global'
import { wf02Global } from './wf-02-global'

const slug = 'reviews'

const waterpikwf02: ProductDetails = {
  info: {
    slug: `${slug}/${wf02Global.brand}/${wf02Global.path}`,
    images: wf02Global.images,
    alt: "Waterpik WF 02 Cordless Express Portable Water Flosser, 148 ml.",
    title: "Waterpik WF 02 Cordless Express Portable Water Flosser, 148 ml.",
    description: "The Waterpik WF 02 Cordless Express Water Flosser is a portable, battery-operated device designed to enhance oral hygiene by effectively. Its cordless design and compact size make it an excellent choice for individuals with small bathrooms or those who travel frequently.",
    price: wf02Global.productPrice,
    updatedDate: wf02Global.updatedDate,
    buyLink: wf02Global.amazonUrl,
    cta: 'Buy on Amazon',
    rating: wf02Global.rating,
    video: wf02Global.videoUrl,
    video2: wf02Global.videoUrl2,
    characteristics: [
      "Portable",
      "Waterproof for Shower Use",
      "Removes Plaque",
      "ADA Accepted",
      "Gum Health",
      "Waranty 1 Year 🔥",
    ],
  },
  tableOfContent: [
    { id: "#feedback", content: "User Feedback & Videos" },
    { id: "#comparison", content: "Comparison with Similar Models" },
    { id: "#features", content: "Key Features of the Waterpik WF 02" },
    { id: "#pro-and-cons", content: "Pros and Cons" },
  ],
  title: {
    id: "feedback",
    title: "User Feedback & Videos",
    description: "Users appreciate the WF 02 for its ease of use and portability, noting its effectiveness in cleaning and suitability for travel. However, some users mention the reservoir's limited capacity, necessitating refills during use. Additionally, the lack of a rotating nozzle and absence of a travel pouch are noted as areas for improvement.",
    subtext: "For a visual review and demonstration of the Waterpik WF 02, you may find the following videos helpful:"
  },
  comparison: {
    id: "comparison",
    title: "Compare the Waterpik WF 02 with Similar Models",
    description: "Compare the Waterpik WF 02 Cordless Express with other models for travel and home use.",
    models: [
      {
        id: 1,
        path: `${slug}/${wf02Global.brand}/${wf02Global.path}`,
        model: 'Waterpik WF 02',
        image: wf02Global.images[0].thumbnail,
        alt: 'Waterpik Model WF 02',
        prime: true,
        dimensions: "3.6 x 2.5 x 11.75 in, 5 oz",
        tips: "Includes 2 Classic Jet Tips",
        capacity: "148 ml.",
        highlight: "No outlets or charging needed",
        problem: "Requires regular battery replacement",
        price: wf02Global.productPrice,
        satisfaction: wf02Global.rating.stars,
      },
    ]
  },
  features: {
    id: "features",
    title: "Key Features of the Waterpik WF 02",
    data: [
      {
        title: "Portability",
        description: "Powered by three AA batteries, the WF 02 eliminates the need for charging cables, enhancing its convenience for travel. Its lightweight and waterproof design allows for use in the shower, adding to its versatility."
      },
      {
        title: "Performance",
        description: "8 oz/min flow rate, 1200 pulses/min, 2 pressure settings, and 2 included flosser tips. Handle with an on/off slider, no chrome accents, rotating tip, travel bag, or plug."
      },
      {
        title: "Reservoir Capacity",
        description: "Equipped with a removable 5-ounce 148 ml water reservoir, the WF 02 provides up to 30 seconds of continuous flossing time. While this may require some users to refill during sessions, it is a common trait among portable water flossers."
      },
      {
        title: "Ease of Use",
        description: "The flosser includes two flossing tips and an advanced pressure control system with two settings. Its ergonomic design ensures a comfortable grip, and the absence of cords enhances maneuverability during use."
      }
    ]
  },
  proAndCons: {
    id: 'pro-and-cons',
    title: "Pros and Cons Waterpik Model WF 02",
    description: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the Waterpik Cordless Express WF 02 is the right fit for them.",
    cta: 'Buy Now on Amazon',
    buyLink: wf02Global.amazonUrl,
    pros: [
      { title: 'Ideal for travel, small bathrooms, and on-the-go oral care.' },
      { title: 'Runs on 3 AA batteries (included), eliminating the need for charging cords.' },
      { title: 'Allows for use in the shower, enhancing versatility and convenience.' },
      { title: 'Removable 5-ounce reservoir with easy-fill design for convenient use.' },
    ],
    cons: [
      { title: 'Requires regular replacement of 3 AA batteries (every 1-2 months, depending on use).' },
      { title: 'The 5-ounce reservoir may require refilling for extended flossing sessions.' },
      { title: 'While customizable, the flosser provides only two pressure settings.' },
    ]
  },
}

export default waterpikwf02