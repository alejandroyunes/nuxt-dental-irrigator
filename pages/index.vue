<script setup lang="ts">
import { getCounterReviews } from '~/components/composables/getCounterReviews'
import { getWirelessReviews } from '~/components/composables/getWirelessReviews'
import { getBestIrrigators } from '~/components/composables/getBestIrrigators'

import Hero from '~/components/organisms-raw/hero.vue'
import ProductScroll from '~/components/organisms-raw/product-scroll.vue'
import QuestionsAndAnswers from '~/components/organisms-raw/questions.vue'
import TypeSection from '~/components/organisms-raw/types.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'

useSeoMeta({
  title: '',
  description: '',
  ogSiteName: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogUrl: 'https://paginasprofesionales.co',
  ogLocale: 'es_CO',
  twitterTitle: 'Servicio Web Profesional en Colombia',
  twitterDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  twitterImage: '/meta/inicio-web-profesional.webp',
  twitterCard: 'summary_large_image',
})

const { bestWirelessReviewDescription, bestWirelessReviewTitle } = getWirelessReviews()
const { bestCounterReviewDescription, bestCounterReviewTitle } = getCounterReviews()
const { bestIrrigatorReviewDescription, bestIrrigatorReviewTitle } = getBestIrrigators()
</script>

<template>
  <Hero />
  <ProductScroll :reviews="bestIrrigatorReviewDescription" :reviewTitle="bestIrrigatorReviewTitle" />
  <ReviewsGrid :reviews="bestWirelessReviewDescription" :reviewTitle="bestWirelessReviewTitle" />
  <ReviewsGrid :reviews="bestCounterReviewDescription" :reviewTitle="bestCounterReviewTitle" />
  <TypeSection />
  <QuestionsAndAnswers />
</template>
