<script setup lang="ts">

import { getBestReviews } from '~/components/composables/Affordable/getBest'
import TypeSection from '~/components/organisms-raw/types.vue'
import Hero from '~/components/organisms/hero.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'

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

const { bestReview } = getBestReviews()

const heroData = {
  titleH2: "Discover the Top Choices for",
  title: "Top 6 Best Affordable Dental Irrigators in 2025",
  subtitle: "Upgrade your smile with stunning dental irrigators! We've reviewed the top best water flossers of 2025 based on durability, style, and customer feedback. Find the perfect one to enhance your oral health today!",
  buttonText: "Browse Best Countertops",
  cta: ""
}

</script>

<template>
  <Hero :heroData="heroData" />
  <ReviewsGrid :reviews="bestReview"  />
  <TypeSection />
  <QuestionsAndAnswers />

</template>
