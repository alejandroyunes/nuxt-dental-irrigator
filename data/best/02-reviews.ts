import synhopeM6Plus from "~/data/01-brands/synhope/synhope-M6Plus"
import type { ReviewGrid } from "~/types/review-grid"
import waterpikwp580 from "~/data/01-brands/waterpik/waterpik-wp580"
import waterpikwp660 from "~/data/01-brands/waterpik/waterpik-wp660"
import waterpikwp662 from "~/data/01-brands/waterpik/waterpik-wp662"
import waterpikwp667 from "~/data/01-brands/waterpik/waterpik-wp667"
import panasonicEW1511W from "~/data/01-brands/panasonic/panasonic-EW1511W"
import { panasonicEW1511WGlobalData, synhopeM6PlusGlobalData, waterpikwp580GlobalData, waterpikwp660GlobalData, waterpikwp662GlobalData, waterpikwp667GlobalData } from "./01-global"

export const slug = 'reviews/best-dental-irrigators/best'

export const bestIrrigatorReviewsDescription: ReviewGrid[] = [
  {
    id: panasonicEW1511WGlobalData.id,
    fileName: panasonicEW1511W.fileName,
    name: panasonicEW1511W.info.title,
    image: panasonicEW1511W.info.images[0].thumbnail,
    alt: panasonicEW1511W.info.alt,
    price: panasonicEW1511W.info.price,
    rating: panasonicEW1511W.info.rating.stars,
    reviewCount: panasonicEW1511W.info.rating.reviews,
    updatedDate: panasonicEW1511W.info.updatedDate
  },
  {
    id: synhopeM6PlusGlobalData.id,
    fileName: synhopeM6Plus.fileName,
    name: synhopeM6Plus.info.title,
    image: synhopeM6Plus.info.images[0].thumbnail,
    alt: synhopeM6Plus.info.alt,
    price: synhopeM6Plus.info.price,
    rating: synhopeM6Plus.info.rating.stars,
    reviewCount: synhopeM6Plus.info.rating.reviews,
    updatedDate: synhopeM6Plus.info.updatedDate
  },
  {
    id: waterpikwp580GlobalData.id,
    fileName: waterpikwp580.fileName,
    name: waterpikwp580.info.title,
    image: waterpikwp580.info.images[0].thumbnail,
    alt: waterpikwp580.info.alt,
    price: waterpikwp580.info.price,
    rating: waterpikwp580.info.rating.stars,
    reviewCount: waterpikwp580.info.rating.reviews,
    updatedDate: waterpikwp580.info.updatedDate
  },
  {
    id: waterpikwp660GlobalData.id,
    fileName: waterpikwp660.fileName,
    name: waterpikwp660.info.title,
    image: waterpikwp660.info.images[0].thumbnail,
    alt: waterpikwp660.info.alt,
    price: waterpikwp660.info.price,
    rating: waterpikwp660.info.rating.stars,
    reviewCount: waterpikwp660.info.rating.reviews,
    updatedDate: waterpikwp660.info.updatedDate
  },
  {
    id: waterpikwp662GlobalData.id,
    fileName: waterpikwp662.fileName,
    name: waterpikwp662.info.title,
    image: waterpikwp662.info.images[0].thumbnail,
    alt: waterpikwp662.info.alt,
    price: waterpikwp662.info.price,
    rating: waterpikwp662.info.rating.stars,
    reviewCount: waterpikwp662.info.rating.reviews,
    updatedDate: waterpikwp662.info.updatedDate
  },
  {
    id: waterpikwp667GlobalData.id,
    fileName: waterpikwp667.fileName,
    name: waterpikwp667.info.title,
    image: waterpikwp667.info.images[0].thumbnail,
    alt: waterpikwp667.info.alt,
    price: waterpikwp667.info.price,
    rating: waterpikwp667.info.rating.stars,
    reviewCount: waterpikwp667.info.rating.reviews,
    updatedDate: waterpikwp667.info.updatedDate
  }
]