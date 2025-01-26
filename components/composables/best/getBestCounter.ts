import { onMounted, ref } from 'vue'
import { bestCounter } from '~/data/best/counter/reviews'
import type { ReviewGrid } from "~/types/review-grid"

export function getBestCounterReviews() {

  const bestCounterReview = ref<ReviewGrid[]>([])

  const bestCounterLoading = ref(false)
  const bestCounterLoadingeError = ref(false)

  const fetchPosts = async () => {
    bestCounterLoading.value = true
    try {
      bestCounterReview.value = await bestCounter

      bestCounterLoading.value = false
      bestCounterLoadingeError.value = false
    } catch (e) {
      bestCounterLoadingeError.value = true
      bestCounterLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestCounterReview,
    bestCounterLoading,
    bestCounterLoadingeError
  }
}
