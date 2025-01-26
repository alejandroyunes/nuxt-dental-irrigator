import type { ReviewGrid } from "~/types/review-grid"

import bitvaeC2 from '~/data/brands/bitvae/c2/c2'
import coslusf5020e from '~/data/brands/coslus/f5020e/f5020e'
import inSmartfc256 from '~/data/brands/inSmart/fc256/fc256'
import nicefeelfc1592 from '~/data/brands/nicefeel/fc1592/fc1592'
import nicwellf5025 from '~/data/brands/nicwell/f5025/f5025'
import waterpikwf02 from '~/data/brands/waterpik/wf-02/wf-02'

export const bestPortable: ReviewGrid[] = [
  {
    id: 1,
    path: waterpikwf02.info.slug,
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
    path: nicwellf5025.info.slug,
    name: nicwellf5025.info.title,
    image: nicwellf5025.info.images[0].thumbnail,
    alt: nicwellf5025.info.alt,
    price: nicwellf5025.info.price,
    rating: nicwellf5025.info.rating.stars,
    reviewCount: nicwellf5025.info.rating.reviews,
    updatedDate: nicwellf5025.info.updatedDate
  },
]