<script setup lang="ts">
import { getBestIrrigators } from '~/components/composables/getBestIrrigators'
import ReviewsGrid from '~/components/organisms/review-grid.vue'
import TypeSection from '~/components/organisms-raw/types.vue'

const title = 'Top 6 Best Dental Irrigators for Healthy Teeth & Gums in 2025'
const description = 'Discover the best dental irrigators to maintain optimal oral hygiene. Explore our expert reviews and comparisons of the top water flossers for healthier teeth and gums.'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/best-dental-irrigators',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})


const { bestIrrigatorReviewDescription, bestIrrigatorReviewTitle } = getBestIrrigators()

</script>

<template>
  <ReviewsGrid :reviews="bestIrrigatorReviewDescription" :reviewTitle="bestIrrigatorReviewTitle" marginTop />
  <TypeSection />
  <QuestionsAndAnswers />

</template>
