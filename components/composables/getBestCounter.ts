import { onMounted, ref } from 'vue'
import { bestCounterReviewsDescription, slug } from '~/data/affortable/counter/reviews'
import type { ReviewGrid } from "~/types/review-grid"

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
