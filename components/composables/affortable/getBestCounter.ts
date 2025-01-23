import { onMounted, ref } from 'vue'
import { bestCounter, slug } from '~/data/affortable/counter/reviews'
import type { ReviewGrid } from "~/types/review-grid"

export function getCounterReviews() {


  const bestCounterAffortableReview = ref<ReviewGrid[]>([])

  const loadingCounter = ref(false)
  const errorCounter = ref<string | null>(null)

  const fetchPosts = async () => {
    loadingCounter.value = true
    try {
      bestCounterAffortableReview.value = await bestCounter
      loadingCounter.value = false
    } catch (e) {
      errorCounter.value = 'Failed to fetch posts'
      loadingCounter.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestCounterAffortableReview,
    loadingCounter,
    errorCounter
  }
}
