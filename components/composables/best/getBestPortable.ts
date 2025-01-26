import { onMounted, ref } from 'vue'
import { bestPortable } from "~/data/best/portable/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getBestPortableReviews() {

  const bestPortableReview = ref<ReviewGrid[]>([])

  const bestPortableLoading = ref(false)
  const bestPortableError = ref(false)

  const fetchPosts = async () => {
    bestPortableLoading.value = true
    try {
      bestPortableReview.value = await bestPortable
      
      bestPortableLoading.value = false
      bestPortableError.value = false
    } catch (e) {
      bestPortableError.value = true
      bestPortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestPortableReview,
    bestPortableLoading,
    bestPortableError
  }
}