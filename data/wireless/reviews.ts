import type { ReviewGrid } from "~/types/review-grid"
import { coslusf5020e } from '~/data/01-brands/coslus/f5020e/f5020e'
import waterpikWF02 from '~/data/01-brands/waterpik/wp-02/wp-02'
import bitvaeC2 from '~/data/01-brands/bitvae/c2/c2'
import inSmartFC256 from '~/data/01-brands/inSmart/fc256/fc256'
import nicefeelFC1592 from '~/data/01-brands/nicefeel/fc1592/fc1592'
import { nicwellF5025 } from '~/data/01-brands/nicwell/f5025/f5025'


import { fc256Global } from "~/data/01-brands/inSmart/fc256/fc256-global"
import { fc1592Global } from "~/data/01-brands/nicefeel/fc1592/fc1592-global"
import { f5025Global } from "~/data/01-brands/nicwell/f5025/f5025-global"
import { wp02Global } from "~/data/01-brands/waterpik/wp-02/wp-02-global"

export const slug = 'reviews/affordable-and-wireless-oral-irrigators/wireless'	

export const bestWirelessReviewsDescription: ReviewGrid[] = [
  {
    id: 1,
    path: '',
    name: waterpikWF02.info.title,
    image: waterpikWF02.info.images[0].thumbnail,
    alt: waterpikWF02.info.alt,
    price: waterpikWF02.info.price,
    rating: waterpikWF02.info.rating.stars,
    reviewCount: waterpikWF02.info.rating.reviews,
    updatedDate: waterpikWF02.info.updatedDate
  },
  {
    id: 2,
    path: f5025Global.path,
    name: nicwellF5025.info.title,
    image: nicwellF5025.info.images[0].thumbnail,
    alt: nicwellF5025.info.alt,
    price: nicwellF5025.info.price,
    rating: nicwellF5025.info.rating.stars,
    reviewCount: nicwellF5025.info.rating.reviews,
    updatedDate: nicwellF5025.info.updatedDate
  },
  {
    id: 3,
    path: '',
    name: nicefeelFC1592.info.title,
    image: nicefeelFC1592.info.images[0].thumbnail,
    alt: nicefeelFC1592.info.alt,
    price: nicefeelFC1592.info.price,
    rating: nicefeelFC1592.info.rating.stars,
    reviewCount: nicefeelFC1592.info.rating.reviews,
    updatedDate: nicefeelFC1592.info.updatedDate
  },
  {
    id: 4,
    path: '',
    name: coslusf5020e.info.title,
    image: coslusf5020e.info.images[0].thumbnail,
    alt: coslusf5020e.info.alt,
    price: coslusf5020e.info.price,
    rating: coslusf5020e.info.rating.stars,
    reviewCount: coslusf5020e.info.rating.reviews,
    updatedDate: coslusf5020e.info.updatedDate
  },
  {
    id: 5,
    path: fc256Global.path,
    name: inSmartFC256.info.title,
    image: inSmartFC256.info.images[0].thumbnail,
    alt: inSmartFC256.info.alt,
    price: inSmartFC256.info.price,
    rating: inSmartFC256.info.rating.stars,
    reviewCount: inSmartFC256.info.rating.reviews,
    updatedDate: inSmartFC256.info.updatedDate
  },
  {
    id: 6,
    path: '',
    name: bitvaeC2.info.title,
    image: bitvaeC2.info.images[0].thumbnail,
    alt: bitvaeC2.info.alt,
    price: bitvaeC2.info.price,
    rating: bitvaeC2.info.rating.stars,
    reviewCount: bitvaeC2.info.rating.reviews,
    updatedDate: bitvaeC2.info.updatedDate
  }
]