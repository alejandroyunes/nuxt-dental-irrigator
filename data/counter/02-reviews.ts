import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import turewellFC165 from './turewell-FC165'
import h2oflossHF9 from './h2ofloss-HF9'
import sawgmoreFC166 from './sawgmore-FC166'
import oeeterM01 from './oeeter-M01'
import heyaxa2302WF from './heyaxa-2302WF'
import turewellFC162 from './turewell-FC162'
import { h2oflossHF9GlobalData, sawgmoreFC166GlobalData, turewellFC165GlobalData, oeeterM01GlobalData, heyaxa2302WFGlobalData, turewellFC162GlobalData } from "./01-global"

export const bestCounterReviewsTitle: TitleInfo = {
  title: 'Affordable CounterTop Irrigators',
  description: 'Explore the best budget-friendly countertop oral irrigators that provide superior dental care with high water pulsation, multiple pressure settings, and various tips for different needs.',
  subtext: 'Achieve effective, professional-level cleaning without the high cost. Perfect for families and individuals looking for a reliable and affordable oral care solution.',
  slug: 'reviews/affordable-countertop-irrigators/counter'
}

export const bestCounterReviewsDescription: ReviewGrid[] = [
  {
    id: turewellFC165GlobalData.id,
    fileName: turewellFC165.fileName,
    name: turewellFC165.info.title,
    image: turewellFC165.info.images[0].thumbnail,
    alt: turewellFC165.info.alt,
    price: turewellFC165.info.price,
    rating: turewellFC165.info.rating.stars,
    reviewCount: turewellFC165.info.rating.reviews,
    updatedDate: turewellFC165.info.updatedDate
  },
  {
    id: h2oflossHF9GlobalData.id,
    fileName: h2oflossHF9.fileName,
    name: h2oflossHF9.info.title,
    image: h2oflossHF9.info.images[0].thumbnail,
    alt: h2oflossHF9.info.alt,
    price: h2oflossHF9.info.price,
    rating: h2oflossHF9.info.rating.stars,
    reviewCount: h2oflossHF9.info.rating.reviews,
    updatedDate: h2oflossHF9.info.updatedDate
  },
  {
    id: sawgmoreFC166GlobalData.id,
    fileName: sawgmoreFC166.fileName,
    name: sawgmoreFC166.info.title,
    image: sawgmoreFC166.info.images[0].thumbnail,
    alt: sawgmoreFC166.info.alt,
    price: sawgmoreFC166.info.price,
    rating: sawgmoreFC166.info.rating.stars,
    reviewCount: sawgmoreFC166.info.rating.reviews,
    updatedDate: sawgmoreFC166.info.updatedDate
  },
  {
    id: oeeterM01GlobalData.id,
    fileName: oeeterM01.fileName,
    name: oeeterM01.info.title,
    image: oeeterM01.info.images[0].thumbnail,
    alt: oeeterM01.info.alt,
    price: oeeterM01.info.price,
    rating: oeeterM01.info.rating.stars,
    reviewCount: oeeterM01.info.rating.reviews,
    updatedDate: oeeterM01.info.updatedDate
  },
  {
    id: heyaxa2302WFGlobalData.id,
    fileName: heyaxa2302WF.fileName,
    name: heyaxa2302WF.info.title,
    image: heyaxa2302WF.info.images[0].thumbnail,
    alt: heyaxa2302WF.info.alt,
    price: heyaxa2302WF.info.price,
    rating: heyaxa2302WF.info.rating.stars,
    reviewCount: heyaxa2302WF.info.rating.reviews,
    updatedDate: heyaxa2302WF.info.updatedDate
  },
  {
    id: turewellFC162GlobalData.id,
    fileName: turewellFC162.fileName,
    name: turewellFC162.info.title,
    image: turewellFC162.info.images[0].thumbnail,
    alt: turewellFC162.info.alt,
    price: turewellFC162.info.price,
    rating: turewellFC162.info.rating.stars,
    reviewCount: turewellFC162.info.rating.reviews,
    updatedDate: turewellFC162.info.updatedDate
  }
]