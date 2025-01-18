<script setup>
import { ref } from 'vue'
import FacebookSvg from '~/components/icons/social/FacebookSvg.vue'
import TwitterSvg from '~/components/icons/social/TwitterSvg.vue'
import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { icon: FacebookSvg, to: 'https://facebook.com/profile.php?id=61564869706521', label: 'Visítanos en Facebook' },
  { icon: TwitterSvg, to: 'https://twitter.com/paginaspro_co', label: 'Visítanos en Twitter' },
  { icon: InstagramSvg, to: 'https://instagram.com/paginasprofesionales.co', label: 'Visítanos en Instagram' },
]

</script>

<template>
  <footer class="footer-content">

    <NuxtPicture class="image" src="/logo.png" alt="Logo de páginas profesionales" densities="x1"
      sizes="xs:100px md:100px xl:100px" format="png" />
    <h2 class="title">Páginas Profesionales</h2>

    <ul class="social-links">
      <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
        <NuxtLink :to="socialLink.to" :aria-label="socialLink.label" rel="noopener noreferrer" target="_blank">
          <component :is="socialLink.icon" />
        </NuxtLink>
      </li>
    </ul>

    <p class="copyright">&copy; {{ currentYear }} Páginas Profesionales.</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 20px;
  margin-bottom: 20px;
  max-width: var(--max-width);
  margin: 0 auto;

  .image {
    width: 100px;
    height: 100px;
  }

  .title {
    margin: 10px 0;
    font-size: 1.5rem;
    color: var(--heading);
  }

  .social-links {
    display: flex;
    gap: 24px;
    padding: 0;
    list-style: none;
    margin-top: 24px;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: var(--background);
      background-color: var(--background-opposite-base);
      border-radius: 50%;
      width: 40px;
      height: 40px;

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
      }

      svg {
        fill: var(--background);
        width: 20px;
        height: 20px;
      }
    }
  }

  .copyright {
    padding-top: 24px;
    color: var(--text);
    font-size: .9rem;
  }
}
</style>
