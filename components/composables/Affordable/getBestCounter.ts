import { onMounted, ref } from 'vue'
import { bestCounter } from '~/data/affortable/counter/reviews'
import type { ReviewGrid } from "~/types/review-grid"

export function getBestCounterReviews() {

  const bestCounterAffortableReview = ref<ReviewGrid[]>([])

  const bestCounterAffortableLoading = ref(false)
  const bestCounterAffortableLoadingeError = ref(false)

  const fetchPosts = async () => {
    bestCounterAffortableLoading.value = true
    try {
      bestCounterAffortableReview.value = await bestCounter

      bestCounterAffortableLoading.value = false
      bestCounterAffortableLoadingeError.value = false
    } catch (e) {
      bestCounterAffortableLoadingeError.value = true
      bestCounterAffortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestCounterAffortableReview,
    bestCounterAffortableLoading,
    bestCounterAffortableLoadingeError
  }
}
