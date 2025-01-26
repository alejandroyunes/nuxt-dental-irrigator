import { onMounted, ref } from 'vue'
import { bestPortable } from "~/data/affortable/portable/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getBestPortableReviews() {

  const bestPortableAffortableReview = ref<ReviewGrid[]>([])

  const bestPortableAffortableLoading = ref(false)
  const bestPortableAffortableError = ref(false)

  const fetchPosts = async () => {
    bestPortableAffortableLoading.value = true
    try {
      bestPortableAffortableReview.value = await bestPortable
      
      bestPortableAffortableLoading.value = false
      bestPortableAffortableError.value = false
    } catch (e) {
      bestPortableAffortableError.value = true
      bestPortableAffortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestPortableAffortableReview,
    bestPortableAffortableLoading,
    bestPortableAffortableError
  }
}