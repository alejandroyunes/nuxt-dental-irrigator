<script setup lang="ts">
import { getBestIrrigators } from '~/components/composables/getBestIrrigators'
import ReviewsGrid from '~/components/organisms/review-grid.vue'
import TypeSection from '~/components/organisms-raw/types.vue'

useSeoMeta({
  title: 'Servicio Web Profesional en Colombia',
  description: 'Ofrecemos hosting gratis el primer año con un diseño web único.',
  ogSiteName: 'Paginas Profesionales',
  ogTitle: 'Servicio Web Profesional en Colombia',
  ogDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogUrl: 'https://paginasprofesionales.co',
  ogLocale: 'es_CO',
  twitterTitle: 'Servicio Web Profesional en Colombia',
  twitterDescription: 'Ofrecemos hosting gratis el primer año con un diseño web único. Aprovecha esta oferta antes de que se termine.',
  twitterImage: '/meta/inicio-web-profesional.webp',
  twitterCard: 'summary_large_image',
})

const { bestIrrigatorReviewDescription, bestIrrigatorReviewTitle } = getBestIrrigators()

</script>

<template>
  <ReviewsGrid :reviews="bestIrrigatorReviewDescription" :reviewTitle="bestIrrigatorReviewTitle" marginTop />
  <TypeSection />
  <QuestionsAndAnswers />

</template>
