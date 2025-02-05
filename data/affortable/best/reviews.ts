import panasonicEW1511W from "~/data/brands/panasonic/ew1511w/ew1511w"
import synhopeM6Plus from "~/data/brands/synhope/m6-plus/m6-plus"
import waterpikwp580 from "~/data/brands/waterpik/wp-580/wp-580"
import waterpikwp660 from "~/data/brands/waterpik/wp-660/wp-660"
import waterpikwp662 from "~/data/brands/waterpik/wp-662/wp-662"
import waterpikwp667 from "~/data/brands/waterpik/wp-667/wp-667"
import type { ReviewGrid } from "~/types/review-grid"


export const bestReviews: ReviewGrid[] = [
  {
    id: 1,
    path: waterpikwp660.info.slug,
    name: waterpikwp660.info.title,
    image: waterpikwp660.info.images[0].thumbnail,
    alt: waterpikwp660.info.alt,
    price: waterpikwp660.info.price,
    rating: waterpikwp660.info.rating.stars,
    reviewCount: waterpikwp660.info.rating.reviews,
    updatedDate: waterpikwp660.info.updatedDate
  },
  {
    id: 2,
    path: waterpikwp580.info.slug,
    name: waterpikwp580.info.title,
    image: waterpikwp580.info.images[0].thumbnail,
    alt: waterpikwp580.info.alt,
    price: waterpikwp580.info.price,
    rating: waterpikwp580.info.rating.stars,
    reviewCount: waterpikwp580.info.rating.reviews,
    updatedDate: waterpikwp580.info.updatedDate
  },
  {
    id: 3,
    path: synhopeM6Plus.info.slug,
    name: synhopeM6Plus.info.title,
    image: synhopeM6Plus.info.images[0].thumbnail,
    alt: synhopeM6Plus.info.alt,
    price: synhopeM6Plus.info.price,
    rating: synhopeM6Plus.info.rating.stars,
    reviewCount: synhopeM6Plus.info.rating.reviews,
    updatedDate: synhopeM6Plus.info.updatedDate
  },
  {
    id: 4,
    path: panasonicEW1511W.info.slug,
    name: panasonicEW1511W.info.title,
    image: panasonicEW1511W.info.images[0].thumbnail,
    alt: panasonicEW1511W.info.alt,
    price: panasonicEW1511W.info.price,
    rating: panasonicEW1511W.info.rating.stars,
    reviewCount: panasonicEW1511W.info.rating.reviews,
    updatedDate: panasonicEW1511W.info.updatedDate
  },
  {
    id: 5,
    path: waterpikwp662.info.slug,
    name: waterpikwp662.info.title,
    image: waterpikwp662.info.images[0].thumbnail,
    alt: waterpikwp662.info.alt,
    price: waterpikwp662.info.price,
    rating: waterpikwp662.info.rating.stars,
    reviewCount: waterpikwp662.info.rating.reviews,
    updatedDate: waterpikwp662.info.updatedDate
  },
  {
    id: 6,
    path: waterpikwp667.info.slug,
    name: waterpikwp667.info.title,
    image: waterpikwp667.info.images[0].thumbnail,
    alt: waterpikwp667.info.alt,
    price: waterpikwp667.info.price,
    rating: waterpikwp667.info.rating.stars,
    reviewCount: waterpikwp667.info.rating.reviews,
    updatedDate: waterpikwp667.info.updatedDate
  }
]