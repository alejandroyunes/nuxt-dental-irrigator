import type { ReviewGrid } from "~/types/review-grid"

import nicefeelfc1592 from '~/data/01-brands/nicefeel/fc1592/fc1592'
import nicwellf5025 from '~/data/01-brands/nicwell/f5025/f5025'
import waterpikwf02 from '~/data/01-brands/waterpik/wp-02/wf-02'

import bitvaeC2 from '~/data/01-brands/bitvae/c2/c2'
import coslusf5020e  from '~/data/01-brands/coslus/f5020e/f5020e'
import inSmartfc256 from '~/data/01-brands/inSmart/fc256/fc256'


import { c2Global } from '~/data/01-brands/bitvae/c2/c2-global'
import { f5020eGlobal } from '~/data/01-brands/coslus/f5020e/f5020e-global'
import { fc256Global } from "~/data/01-brands/inSmart/fc256/fc256-global"
import { fc1592Global } from '~/data/01-brands/nicefeel/fc1592/fc1592-global'
import { f5025Global } from "~/data/01-brands/nicwell/f5025/f5025-global"
import { wf02Global } from "~/data/01-brands/waterpik/wp-02/wf-02-global"

export const slug = 'reviews'	

export const bestWireless: ReviewGrid[] = [
  {
    id: 1,
    path: `/${slug}/${wf02Global.brand}/${wf02Global.path}`,
    name: waterpikwf02.info.title,
    image: waterpikwf02.info.images[0].thumbnail,
    alt: waterpikwf02.info.alt,
    price: waterpikwf02.info.price,
    rating: waterpikwf02.info.rating.stars,
    reviewCount: waterpikwf02.info.rating.reviews,
    updatedDate: waterpikwf02.info.updatedDate
  },
  {
    id: 2,
    path: `/${slug}/${f5025Global.brand}/${f5025Global.path}`,
    name: nicwellf5025.info.title,
    image: nicwellf5025.info.images[0].thumbnail,
    alt: nicwellf5025.info.alt,
    price: nicwellf5025.info.price,
    rating: nicwellf5025.info.rating.stars,
    reviewCount: nicwellf5025.info.rating.reviews,
    updatedDate: nicwellf5025.info.updatedDate
  },
  {
    id: 3,
    path: `/${slug}/${fc1592Global.brand}/${fc1592Global.path}`,
    name: nicefeelfc1592.info.title,
    image: nicefeelfc1592.info.images[0].thumbnail,
    alt: nicefeelfc1592.info.alt,
    price: nicefeelfc1592.info.price,
    rating: nicefeelfc1592.info.rating.stars,
    reviewCount: nicefeelfc1592.info.rating.reviews,
    updatedDate: nicefeelfc1592.info.updatedDate
  },
  {
    id: 4,
    path: `/${slug}/${f5020eGlobal.brand}/${f5020eGlobal.path}`,
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
    path: `/${slug}/${fc256Global.brand}/${fc256Global.path}`,
    name: inSmartfc256.info.title,
    image: inSmartfc256.info.images[0].thumbnail,
    alt: inSmartfc256.info.alt,
    price: inSmartfc256.info.price,
    rating: inSmartfc256.info.rating.stars,
    reviewCount: inSmartfc256.info.rating.reviews,
    updatedDate: inSmartfc256.info.updatedDate
  },
  {
    id: 6,
    path: `/${slug}/${c2Global.brand}/${c2Global.path}`,
    name: bitvaeC2.info.title,
    image: bitvaeC2.info.images[0].thumbnail,
    alt: bitvaeC2.info.alt,
    price: bitvaeC2.info.price,
    rating: bitvaeC2.info.rating.stars,
    reviewCount: bitvaeC2.info.rating.reviews,
    updatedDate: bitvaeC2.info.updatedDate
  }
]