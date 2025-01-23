import panasonicEW1511W from "~/data/01-brands/panasonic/ew1511w/ew1511w"
import synhopeM6Plus from "~/data/01-brands/synhope/m6-plus/m6-plus"
import waterpikwp580 from "~/data/01-brands/waterpik/wp-580/wp-580"
import waterpikwp660 from "~/data/01-brands/waterpik/wp-660/wp-660"
import waterpikwp662 from "~/data/01-brands/waterpik/wp-662/wp-662"
import waterpikwp667 from "~/data/01-brands/waterpik/wp-667/wp-667"
import type { ReviewGrid } from "~/types/review-grid"

import { wp660Global } from "~/data/01-brands/waterpik/wp-660/wp-660-global"
import { wp580Global } from "~/data/01-brands/waterpik/wp-580/wp-580-global"
import { m6PlusGlobal } from "~/data/01-brands/synhope/m6-plus/m6-plus-global"
import { ew1511wGlobal } from "../01-brands/panasonic/ew1511w/ew1511w-global"
import { wp662Global } from "../01-brands/waterpik/wp-662/wp-662-global"
import { wp667Global } from "../01-brands/waterpik/wp-667/wp-667-global"

const slug = 'reviews'

export const bestReviews: ReviewGrid[] = [
  {
    id: 1,
    path: `/${slug}/${wp660Global.brand}/${wp660Global.path}`,
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
    path: `/${slug}/${wp580Global.brand}/${wp580Global.path}`,
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
    path: `/${slug}/${m6PlusGlobal.brand}/${m6PlusGlobal.path}`,
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
    path: `/${slug}/${ew1511wGlobal.brand}/${ew1511wGlobal.path}`,
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
    path: `/${slug}/${wp662Global.brand}/${wp662Global.path}`,
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
    path: `/${slug}/${wp667Global.brand}/${wp667Global.path}`,
    name: waterpikwp667.info.title,
    image: waterpikwp667.info.images[0].thumbnail,
    alt: waterpikwp667.info.alt,
    price: waterpikwp667.info.price,
    rating: waterpikwp667.info.rating.stars,
    reviewCount: waterpikwp667.info.rating.reviews,
    updatedDate: waterpikwp667.info.updatedDate
  }
]