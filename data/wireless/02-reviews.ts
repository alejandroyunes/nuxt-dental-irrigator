import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import waterpikWF02 from './waterpik-WF02'
import nicwellF5025 from './nicwell-F5025'
import nicefeelFC1592 from './nicefeel-FC1592'
import inSmartFC256 from './inSmart-FC256'
import coslusF5020E from './coslus-F5020E'
import bitvaeC2 from './bitvae-C2'
import { waterPikWF02GlobalData, nicefeelFC1592GlobalData, coslusC20F5020EGlobalData, bitvaeC2GlobalData, nicwellF5025GlobalData, insmartFC256GlobalData } from "./01-global"

export const bestWirelessReviewsTitle: TitleInfo = {
  title: "Affordable And Wireless Oral Irrigators",
  description: "Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.",
  subtext: "Click on view more to read our review of the top-rated wireless oral Irrigators.",
  slug: "reviews/affordable-and-wireless-oral-irrigators/wireless"
}

export const bestWirelessReviewsDescription: ReviewGrid[] = [
  {
    id: waterPikWF02GlobalData.id,
    fileName: waterpikWF02.fileName,
    name: waterpikWF02.info.title,
    image: waterpikWF02.info.images[0].thumbnail,
    alt: waterpikWF02.info.alt,
    price: waterpikWF02.info.price,
    rating: waterpikWF02.info.rating.stars,
    reviewCount: waterpikWF02.info.rating.reviews,
    updatedDate: waterpikWF02.info.updatedDate
  },
  {
    id: nicwellF5025GlobalData.id,
    fileName: nicwellF5025.fileName,
    name: nicwellF5025.info.title,
    image: nicwellF5025.info.images[0].thumbnail,
    alt: nicwellF5025.info.alt,
    price: nicwellF5025.info.price,
    rating: nicwellF5025.info.rating.stars,
    reviewCount: nicwellF5025.info.rating.reviews,
    updatedDate: nicwellF5025.info.updatedDate
  },
  {
    id: nicefeelFC1592GlobalData.id,
    fileName: nicefeelFC1592.fileName,
    name: nicefeelFC1592.info.title,
    image: nicefeelFC1592.info.images[0].thumbnail,
    alt: nicefeelFC1592.info.alt,
    price: nicefeelFC1592.info.price,
    rating: nicefeelFC1592.info.rating.stars,
    reviewCount: nicefeelFC1592.info.rating.reviews,
    updatedDate: nicefeelFC1592.info.updatedDate
  },
  {
    id: insmartFC256GlobalData.id,
    fileName: inSmartFC256.fileName,
    name: inSmartFC256.info.title,
    image: inSmartFC256.info.images[0].thumbnail,
    alt: inSmartFC256.info.alt,
    price: inSmartFC256.info.price,
    rating: inSmartFC256.info.rating.stars,
    reviewCount: inSmartFC256.info.rating.reviews,
    updatedDate: inSmartFC256.info.updatedDate
  },
  {
    id: coslusC20F5020EGlobalData.id,
    fileName: coslusF5020E.fileName,
    name: coslusF5020E.info.title,
    image: coslusF5020E.info.images[0].thumbnail,
    alt: coslusF5020E.info.alt,
    price: coslusF5020E.info.price,
    rating: coslusF5020E.info.rating.stars,
    reviewCount: coslusF5020E.info.rating.reviews,
    updatedDate: coslusF5020E.info.updatedDate
  },
  {
    id: bitvaeC2GlobalData.id,
    fileName: bitvaeC2.fileName,
    name: bitvaeC2.info.title,
    image: bitvaeC2.info.images[0].thumbnail,
    alt: bitvaeC2.info.alt,
    price: bitvaeC2.info.price,
    rating: bitvaeC2.info.rating.stars,
    reviewCount: bitvaeC2.info.rating.reviews,
    updatedDate: bitvaeC2.info.updatedDate
  }
]