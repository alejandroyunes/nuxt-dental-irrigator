import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import panasonicEW1511W from './panasonic-EW1511W'
import synhopeM6Plus from "./synhope-M6Plus"
import waterpikwp580 from "./waterpik-wp580"
import waterpikwp660 from "./waterpik-wp660"
import waterpikwp662 from "./waterpik-wp662"
import waterpikwp667 from "./waterpik-wp667"
import { panasonicEW1511WGlobalData, synhopeM6PlusGlobalData, waterpikwp580GlobalData, waterpikwp660GlobalData, waterpikwp662GlobalData, waterpikwp667GlobalData } from "./01-global"

export const bestIrrigatorReviewsTitle: TitleInfo = {
  title: 'Top 6 Best Dental Irrigators in 2025',
  description: 'Maintaining optimal oral hygiene is crucial for overall health, and dental irrigators have become an essential tool in achieving that goal. These devices, also known as water flossers, use a stream of water to remove plaque and food particles from between your teeth and below the gumline.',
  subtext: 'Here are some of the best dental irrigators you can buy online:',
  slug: 'reviews/best-dental-irrigators/best'
}

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