<script setup lang="ts">
import { getBestIrrigators } from '~/components/composables/getBestIrrigators'
import { getCounterReviews } from '~/components/composables/getCounterReviews'
import { getWirelessReviews } from '~/components/composables/getWirelessReviews'

import ProductScroll from '~/components/organisms-raw/product-scroll.vue'
import QuestionsAndAnswers from '~/components/organisms-raw/questions.vue'
import TypeSection from '~/components/organisms-raw/types.vue'
import Hero from '~/components/organisms/hero.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'

const title = 'Expert advice and products to improve your oral health'
const description = 'Improve your oral health with our: ✓ Detailed user guides ✓ Expert advice ✓ Comparisons ✓ Reviews ✓ Promotions'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const { bestWirelessReviewDescription, bestWirelessReviewTitle } = getWirelessReviews()
const { bestCounterReviewDescription, bestCounterReviewTitle } = getCounterReviews()
const { bestIrrigatorReviewDescription, bestIrrigatorReviewTitle } = getBestIrrigators()

const heroData = {
  titleH2: "Discover the Top Picks for",
  title: "Best Water Flossers of 2025",
  subtitle: "Say goodbye to plaque and hello to a healthier smile! We've reviewed the top water flossers of 2025 based on performance, user reviews, and expert recommendations. Find the perfect water flosser for your dental care needs today!",
  buttonText: "Browse Best Water Flossers",
  cta: "best-dental-irrigators"
}
</script>

<template>
  <Hero :heroData="heroData" />
  <ProductScroll :reviews="bestIrrigatorReviewDescription" :reviewTitle="bestIrrigatorReviewTitle" />
  <ReviewsGrid :reviews="bestWirelessReviewDescription" :reviewTitle="bestWirelessReviewTitle" />
  <ReviewsGrid :reviews="bestCounterReviewDescription" :reviewTitle="bestCounterReviewTitle" />
  <TypeSection />
  <QuestionsAndAnswers />
</template>

<meta charset="UTF-8">
