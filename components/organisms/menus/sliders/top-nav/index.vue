<script lang="ts" setup>
import './top-nav.scss'
import ExitSvg from '@/components/icons/ExitSvg.vue'

import FacebookSvg from '~/components/icons/social/FacebookSvg.vue'
import TwitterSvg from '~/components/icons/social/TwitterSvg.vue'
import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'

const { toggle, isOpen } = defineProps<{
  toggle: () => void
  isOpen: boolean | undefined
}>()

const navLinks = [
  {
    title: 'Diseño web',
    link: '/',
    icon: FacebookSvg,
    iconAlt: 'Diseño web'
  },
]

const socialLinks = [
  { icon: FacebookSvg, to: 'https://facebook.com' },
  { icon: TwitterSvg, to: 'https://twitter.com' },
  { icon: InstagramSvg, to: 'https://instagram.com' },
]

</script>

<template>

  <div
    :class="[isOpen === undefined ?
     'display-none' : 'top-nav',
     isOpen ? 'top-slide-in' : 'top-slide-out']">
    
    <div class="top-nav-header">

      <NuxtLink @click="toggle" to="/" class="top-nav-logo">
        <NuxtPicture
          class="image"
          src="/logo.png"
          alt="Logo de páginas profesionales"
          densities="x1"
          sizes="xs:48px md:48px xl:48px"
          format="png"
        />
      </NuxtLink>

      <div @click="toggle" class="animation-exit">
        <ExitSvg class=" exit-icon" />
      </div>
    </div>

    <div class="top-nav-content">

      <nav class="top-nav-list">
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink :to="link.link" class="item" @click="toggle()">
              <component :is="link.icon" class="icon" :alt="link.iconAlt" />
              <p>{{ link.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="top-nav-contact">

        <p class="contact-tel"><a href="tel:+41787746337">+57 304 665 9898</a></p>
        <p class="contact-email">
          <a href="mailto:alejandroyunes@outlook.com">alejandroyunes@outlook.com</a>
        </p>

        <ul class="social-links">
          <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
            <NuxtLink :to="socialLink.to">
            <component :is="socialLink.icon" />
          </NuxtLink>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div v-if="isOpen" @click="toggle" class="content-bg" />
</template>