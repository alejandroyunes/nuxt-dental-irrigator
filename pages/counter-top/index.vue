<script setup lang="ts">

import Hero from '~/components/organisms-raw/hero.vue'

const heroData = {
  titleH2: "Discover the Top Choices for",
  title: "Best Countertops of 2025",
  subtitle: "Upgrade your home with stunning countertops! We've reviewed the top countertops of 2025 based on durability, style, and customer feedback. Find the perfect countertop to enhance your oral health today!",
  buttonText: "Browse Best Countertops",
  cta: "best-home-countertops"
}

</script>

<template>
  <Hero :heroData="heroData" />
</template>

<style scoped></style>