<script lang="ts" setup>
import './title-description.scss'

type TitleDescription = {
  id?: string
  title?: string
  description?: string
  subtext?: string
  marginTop?: boolean
}

const { info } = defineProps<{
  info?: TitleDescription
  marginTop?: boolean
}>()

</script>

<template>
  <div class="title-description" :id="info?.id">
    <h2 class="title" :class="{ 'extra-top-space': marginTop }">{{ info?.title }}</h2>
    <p class="description">{{ info?.description }}</p>
    <p class="text">{{ info?.subtext }}</p>
  </div>
</template>
