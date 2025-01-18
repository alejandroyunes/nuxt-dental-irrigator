<script setup>

const types = [
  {
    title: 'Countertop',
    description: 'Countertop dental irrigators are characterized by their stationary design and larger water tank capacity. Unlike portable models, they offer multiple pressure settings and interchangeable nozzles, allowing for more precise and customized cleaning based on individual needs. Their size and features make them ideal for intensive and personalized use at home, providing comprehensive and professional oral hygiene.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1734236670/irrigators/01%20-%20types/counter-top_b8n4z9.webp',
    link: '#countertop'
  },
  {
    title: 'Travel Size',
    description: 'Travel dental irrigators are the portable choice for oral hygiene on the go. Unlike countertop models, their compact and lightweight design makes them easy to carry. They often operate on batteries and have smaller water reservoirs, suitable for temporary use away from home. Although they may have fewer pressure settings, their convenience and adaptability make them essential for those who frequently travel.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1734236670/irrigators/01%20-%20types/wireless_tqxtyc.webp',
    link: '#travel'
  },
  {
    title: 'Wireless',
    description: 'Wireless dental irrigators offer the flexibility of cable-free cleaning. Unlike countertop models, they do not need to be connected to the electrical grid, making them more versatile and convenient to use. They operate on rechargeable batteries, and their design is often more compact and ergonomic, allowing for easy handling. Although they may have a smaller water reservoir, their freedom of movement makes them ideal for modern and efficient oral hygiene.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1734236670/irrigators/01%20-%20types/travel-size_lwpd7t.webp',
    link: '#wireless'
  }
]
</script>
<template>

  <section class="types-section" id="types">
    <div class="types-header">
      <h2>What Type of Dental Irrigator to Buy?</h2>
      <p>The best irrigator is the one that fits your needs. To meet different demands, manufacturers have created
        three main types of irrigators: countertop (powerful), cordless (more convenient to use), and travel
        (lightweight).</p>
    </div>

    <div class="types-grid">
      <div v-for="type in types" :key="type.title" class="type-card">
        <div class="type-content">
          <h3>{{ type.title }}</h3>
          <p>{{ type.description }}</p>
          <NuxtLink :to="type.link" class="learn-more">
            view more →
          </NuxtLink>
        </div>
        <div class="type-image">
          <img :src="type.image" :alt="type.title">
        </div>
      </div>
    </div>

    <div class="cta-container">
      <NuxtLink to="#products" class="cta-button">
        Buy The Best Irrigators
      </NuxtLink>
    </div>
  </section>

</template>

<style lang="scss" scoped>
.types-section {

  .types-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;

    h2 {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      color: var(--text-color);
    }
  }

  .types-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
    max-width: var(--tablet-width);
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 100%;
    }
  }

  .type-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
    background: var(--background-opposite-soft);
    border-radius: 1rem;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .type-content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        color: var(--primary);
      }

      p {
        margin-bottom: 1.5rem;
        line-height: 1.7;
        color: var(--background);
      }

      .learn-more {
        display: inline-block;
        color: var(--primary);
        text-decoration: none;
        font-weight: 600;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateX(5px);
        }
      }
    }

    .type-image {
      justify-self: center;

      img {
        width: 100%;
        height: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 0.5rem;

        @media (max-width: 768px) {}

      }
    }
  }

  .cta-container {
    text-align: center;
    margin-top: 3rem;

    .cta-button {
      display: inline-block;
      background: var(--primary);
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        background: var(--secondary);
        transform: translateY(-2px);
      }
    }
  }
}
</style>
