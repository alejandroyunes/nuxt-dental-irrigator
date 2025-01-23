import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import { bestCounterReviewsDescription, slug } from '~/data/counter/reviews'

export function getCounterReviews() {


  const bestCounterReviewDescription = ref<ReviewGrid[]>([])
  const bestCounterSlug = ref(slug)

  const loadingCounter = ref(false)
  const errorCounter = ref<string | null>(null)

  const fetchPosts = async () => {
    loadingCounter.value = true
    try {
      bestCounterSlug.value = await slug
      bestCounterReviewDescription.value = await bestCounterReviewsDescription
      bestCounterReviewDescription.value.sort((a, b) => a.id - b.id)
      loadingCounter.value = false
    } catch (e) {
      errorCounter.value = 'Failed to fetch posts'
      loadingCounter.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestCounterSlug,
    bestCounterReviewDescription,
    loadingCounter,
    errorCounter
  }
}
