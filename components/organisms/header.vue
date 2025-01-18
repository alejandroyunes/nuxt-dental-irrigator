<script lang="ts" setup>
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'

import SliderTopNav from '~/components/organisms/menus/sliders/top-nav/index.vue'
import Dropdown from '~/components/organisms/menus/dropdown/desktop/index.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import ButtonsGlowOn from '~/components/atoms/buttons/glow-on/index.vue'

import HamburgerVerticalSvg from '~/components/icons/header/HamburgerSvg.vue'

const isSliderTopNavOpen = ref<boolean | undefined>(undefined)
const isDarkMode = ref(false)

onMounted(() => {
  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    isDarkMode.value = true
  }
})

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

const toggleSliderTopNav = () => {
  isSliderTopNavOpen.value = !isSliderTopNavOpen.value
}

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo-and-title">
        <NuxtLink to="/" class="logo">
          <NuxtPicture src="/logo.png" alt="Logo de páginas profesionales" densities="x1"
            sizes="xs:56px md:56px xl:56px" format="png" />
        </NuxtLink>
        <h1>Dental Irrigator</h1>
      </div>


      <div class="details">

        <div class="dark-mode-icons" @click="handleTheme()">
          <MoonSvg v-if="!isDarkMode" class="icon sun" aria-label="Cambiar tema del sitio web" />
          <SunSvg v-else class="icon moon" aria-label="Cambiar tema del sitio web" />
        </div>

        <Dropdown class="desktop-only" />

        <div class="hamburger-menu mobile-only" @click="toggleSliderTopNav">
          <HamburgerVerticalSvg class="icon" aria-label="Abrir menú de navegación" />
        </div>

        <SliderTopNav :toggle="toggleSliderTopNav" :isOpen="isSliderTopNavOpen" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 0;
  z-index: 10;
  position: fixed;
  background-color: var(--background-base);
  box-shadow: var(--shadow-base);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: var(--max-width);
    height: 68px;
    margin: 0 auto;
    padding: 0 20px;

    .logo-and-title {
      display: flex;
      align-items: center;
      cursor: pointer;

      h1 {
        font-size: 1.5rem;
        color: var(--heading);
        margin-left: 10px;
      }

      .logo {
        max-width: 56px;

        img {
          display: flex;
          align-items: center;
          justify-content: baseline;
          width: 100%;
          height: auto;
        }
      }
    }

    .details {
      display: flex;
      align-items: center;

      .dark-mode-icons {
        display: flex;
        margin-right: .4rem;
        padding: 20px 0;
        cursor: pointer;

        .sun,
        .moon {
          margin-right: 16px;

          @media (max-width: 768px) {
            margin: 0 10px;
          }
        }

        @media (max-width: 768px) {
          margin-right: 0;
        }
      }

      .hamburger-menu {
        padding: 10px 10px 10px 0;
        cursor: pointer;

        @media (max-width: 768px) {
          display: flex;
        }
      }

    }
  }

  @media (max-width: 768px) {
    padding: 0;

    .container {
      padding: 20px;
      margin: 10px 10px 0;
    }
  }
}
</style>