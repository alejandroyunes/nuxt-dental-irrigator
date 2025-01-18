<script setup lang='ts'>
import { ref } from 'vue'
import SeoSvg from '~/components/icons/menu/SeoSvg.vue'
import MarketingSvg from '~/components/icons/menu/MarketingSvg.vue'
import GraphicDesignSvg from '~/components/icons/menu/GraphicDesign.vue'
import SupportSvg from '~/components/icons/menu/SupportSvg.vue'
import ArrowDownSvg from '~/components/icons/ArrowDownSvg.vue'
import WebDesignSvg from '~/components/icons/menu/WebDesignSvg.vue'
import SuggestionsSvg from '~/components/icons/menu/SuggestionsSvg.vue'
import AnnouncementsSvg from '~/components/icons/menu/AnnouncementsSvg.vue'

const isClicked = ref(false)

const itemClicked = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 100)
}

const servicesLinks = [
  {
    title: 'Diseño web',
    link: '/diseno-web',
    icon: WebDesignSvg,
    iconAlt: 'Diseño web',
  },
  {
    title: 'Diseño gráfico',
    link: '/diseno-grafico',
    icon: GraphicDesignSvg,
    iconAlt: 'Diseño gráfico'
  },
]

const supportLinks = [
  {
    title: 'Contacta con soporte',
    link: '/contacta-con-soporte',
    icon: SupportSvg,
    iconAlt: 'Contacta con soporte'
  },
  {
    title: 'Sugerencias',
    link: '/sugerencias',
    icon: SuggestionsSvg,
    iconAlt: 'Sugerencias'
  }
]

</script>

<template>

  <nav class="menu">
    <ul class="items">

      <li class="item">
        <h3 class="title">Servicios</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]">
          <li v-for="(item, index) in servicesLinks" :key="index" class="sub-item" @click="itemClicked">
            <NuxtLink class="link" :to="item.link">
              <component :is="item.icon" class="icon" :alt="item.iconAlt" />
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li class="item">
        <h3 class="title">Soporte</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in supportLinks" :key="index" class="sub-item">
            <NuxtLink class="link" :to="item.link">
              <component :is="item.icon" class="icon" :alt="item.iconAlt" />
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

    </ul>
  </nav>

</template>

<style scoped lang="scss">
.menu {
  padding: 0;

  .items {
    display: flex;
    padding: 0;
    gap: 20px;

    .item {
      display: flex;
      cursor: pointer;
      color: var(--heading);
      position: relative;
      stroke: var(--heading);
      line-height: 2.2rem;
      justify-content: center;
      align-items: center;

      &:hover {
        .arrow-icon {
          transform: rotate(90deg);
        }

        .sub-items {
          opacity: 1;
          visibility: visible;
        }
      }

      .title {
        font-size: 1.2rem;
      }

      .arrow-icon {
        margin-left: 8px;
        width: 1.1rem;
        transition: transform 0.3s ease;
      }

      .sub-items {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        list-style-type: none;
        transform: translateY(16px);
        border-style: solid;
        border-color: var(--background-opposite);
        border-width: 1px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 16px;
        border-top-left-radius: 16px;
        margin: 1.1rem 0.9rem 1rem;
        background-color: var(--background-base);
        z-index: 101;
        transition: opacity 0.3s, visibility 0.3s;
        opacity: 0;
        visibility: hidden;

        .sub-item {
          .link {
            display: flex;
            justify-content: flex-start;
            z-index: 1000;
            color: var(--heading);
            font-size: 16px;
            padding: 8px 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
            text-decoration: none;
            background-color: 'none';

            &:hover {
              background-color: var(--background-dark);
              color: var(--white);
            }

            p {
              margin-left: 1rem;
              font-weight: 500;

            }
          }

          &:first-child {
            a:hover {
              border-top-left-radius: 16px;
            }
          }

          &:last-child {
            a:hover {
              border-bottom-right-radius: 16px;
            }
          }
        }
      }

      .sub-items.clicked {
        display: none;
      }
    }
  }
}
</style>
