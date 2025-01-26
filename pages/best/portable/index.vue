<script setup lang="ts">

import Hero from '~/components/organisms/hero.vue'

const title = 'Top 6 Best Portable Water Flossers for Healthy Teeth & Gums in 2025';
const description = 'Discover the best portable/wireless water flossers to maintain optimal oral hygiene. Explore our expert reviews and comparisons of the top dental irrigators for healthier teeth and gums.';

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/best/counter-top',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const heroData = {
  titleH2: "Discover the Top Choices for",
  title: "Best Countertops Water Flossers of 2025",
  subtitle: "Upgrade your home with stunning portable water flossers! We've reviewed the top countertops of 2025 based on durability, style, and customer feedback. Find the perfect countertop to enhance your oral health today!",
  buttonText: "Browse Best Countertops",
  cta: ""
}

</script>

<template>
  <Hero :heroData="heroData" />
</template>

<style scoped></style>