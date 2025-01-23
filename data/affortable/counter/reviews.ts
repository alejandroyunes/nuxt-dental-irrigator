import h2oflossHF9 from '~/data/01-brands/h20floss/hf9/hf9'
import heyaxa2302WF from '~/data/01-brands/heyaxa/wf-2302/wf-2302'
import oeeterM01 from '~/data/01-brands/oeeter/m01/m01'
import sawgmoreFC166 from '~/data/01-brands/sawgmore/fc166/fc166'
import turewellFC162 from '~/data/01-brands/turewell/fc-162/fc-162'
import turewellFC165 from '~/data/01-brands/turewell/fc-165/fc-165'
import type { ReviewGrid } from "~/types/review-grid"

import { hf9Global } from "~/data/01-brands/h20floss/hf9/hf9-global"
import { wf2302Global } from "~/data/01-brands/heyaxa/wf-2302/wf-2302-global"
import { m01Global } from '~/data/01-brands/oeeter/m01/m01-global'
import { fc166Global } from '~/data/01-brands/sawgmore/fc166/fc166-global'
import { fc162Global } from '~/data/01-brands/turewell/fc-162/fc-162-global'
import { fc165Global } from '~/data/01-brands/turewell/fc-165/fc-165-global'

export const slug = 'reviews'

export const bestCounter: ReviewGrid[] = [
  {
    id: 1,
    path: `/${slug}/${fc165Global.brand}/${fc165Global.path}`,
    name: turewellFC165.info.title,
    image: turewellFC165.info.images[0].thumbnail,
    alt: turewellFC165.info.alt,
    price: turewellFC165.info.price,
    rating: turewellFC165.info.rating.stars,
    reviewCount: turewellFC165.info.rating.reviews,
    updatedDate: turewellFC165.info.updatedDate
  },
  {
    id: 2,
    path: `/${slug}/${hf9Global.brand}/${hf9Global.path}`,
    name: h2oflossHF9.info.title,
    image: h2oflossHF9.info.images[0].thumbnail,
    alt: h2oflossHF9.info.alt,
    price: h2oflossHF9.info.price,
    rating: h2oflossHF9.info.rating.stars,
    reviewCount: h2oflossHF9.info.rating.reviews,
    updatedDate: h2oflossHF9.info.updatedDate
  },
  {
    id: 3,
    path: `/${slug}/${fc166Global.brand}/${fc166Global.path}`,
    name: sawgmoreFC166.info.title,
    image: sawgmoreFC166.info.images[0].thumbnail,
    alt: sawgmoreFC166.info.alt,
    price: sawgmoreFC166.info.price,
    rating: sawgmoreFC166.info.rating.stars,
    reviewCount: sawgmoreFC166.info.rating.reviews,
    updatedDate: sawgmoreFC166.info.updatedDate
  },
  {
    id: 4,
    path: `/${slug}/${m01Global.brand}/${m01Global.path}`,
    name: oeeterM01.info.title,
    image: oeeterM01.info.images[0].thumbnail,
    alt: oeeterM01.info.alt,
    price: oeeterM01.info.price,
    rating: oeeterM01.info.rating.stars,
    reviewCount: oeeterM01.info.rating.reviews,
    updatedDate: oeeterM01.info.updatedDate
  },
  {
    id: 5,
    path: `/${slug}/${wf2302Global.brand}/${wf2302Global.path}`,
    name: heyaxa2302WF.info.title,
    image: heyaxa2302WF.info.images[0].thumbnail,
    alt: heyaxa2302WF.info.alt,
    price: heyaxa2302WF.info.price,
    rating: heyaxa2302WF.info.rating.stars,
    reviewCount: heyaxa2302WF.info.rating.reviews,
    updatedDate: heyaxa2302WF.info.updatedDate
  },
  {
    id: 6,
    path: `/${slug}/${fc162Global.brand}/${fc162Global.path}`,
    name: turewellFC162.info.title,
    image: turewellFC162.info.images[0].thumbnail,
    alt: turewellFC162.info.alt,
    price: turewellFC162.info.price,
    rating: turewellFC162.info.rating.stars,
    reviewCount: turewellFC162.info.rating.reviews,
    updatedDate: turewellFC162.info.updatedDate
  }
]