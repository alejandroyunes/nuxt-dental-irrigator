import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import { bestReviews } from "~/data/best/02-reviews"

export function getBestReviews() {

  const bestReview = ref<ReviewGrid[]>([])

  const bestReviewLoading = ref(false)
  const bestReviewError = ref(false)

  const fetchPosts = async () => {
    bestReviewLoading.value = true
    try {
      bestReview.value = await bestReviews

      bestReviewLoading.value = false
      bestReviewError.value = false
    } catch (e) {
      bestReviewError.value = true
      bestReviewLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestReview,
    bestReviewLoading,
    bestReviewError
  }
}
