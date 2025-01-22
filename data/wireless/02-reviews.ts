import type { ReviewGrid } from "~/types/review-grid"
import coslusF5020E from '~/data/01-brands/coslus/coslus-F5020E'
import waterpikWF02 from '~/data/01-brands/waterpik/waterpik-WF02'
import { bitvaeC2GlobalData, coslusC20F5020EGlobalData, insmartFC256GlobalData, nicefeelFC1592GlobalData, nicwellF5025GlobalData, waterPikWF02GlobalData } from "./01-global"
import bitvaeC2 from '~/data/01-brands/bitvae/bitvae-C2'
import inSmartFC256 from '~/data/01-brands/inSmart/inSmart-FC256'
import nicefeelFC1592 from '~/data/01-brands/nicefeel/nicefeel-FC1592'
import nicwellF5025 from '~/data/01-brands/nicwell/nicwell-F5025'

export const slug = 'reviews/affordable-and-wireless-oral-irrigators/wireless'	

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