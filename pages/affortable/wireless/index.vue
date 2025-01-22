<script setup lang="ts">

import Hero from '~/components/organisms/hero.vue'

const title = 'Top Best Affordable Wireless Water Flossers for Healthy Teeth & Gums in 2025';
const description = 'Discover the best affordable wireless/portable water flossers to maintain optimal oral hygiene. Explore our expert reviews and comparisons of the top dental irrigators for healthier teeth and gums.';
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

const heroData = {
  titleH2: "Discover the Top Choices for",
  title: "Best Affordable Wireless/Portable Water Flossers of 2025",
  subtitle: "Upgrade your home with stunning and affordable wireless portable water flossers! We've reviewed the top wireless and portable water flossers of 2025 based on affordability, durability, style, and customer feedback. Find the perfect dental irrigator to enhance your oral health today!",
  buttonText: "Browse Best Wireless/Portable Water Flossers",
  cta: ""
}

</script>

<template>
  <Hero :heroData="heroData" />
</template>

<style scoped></style>