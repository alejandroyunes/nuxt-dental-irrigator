import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import { bestIrrigatorReviewsDescription, slug } from "~/data/best/02-reviews"

export function getBestIrrigators() {

  const bestIrrigatorReviewDescription = ref<ReviewGrid[]>([])
  const bestIrrigatorSlug = ref(slug)

  const bestIrrigatorReviewLoading = ref(false)
  const bestIrrigatorReviewError = ref(false)

  const fetchPosts = async () => {
    bestIrrigatorReviewLoading.value = true
    try {
      bestIrrigatorSlug.value = await slug
      bestIrrigatorReviewDescription.value = await bestIrrigatorReviewsDescription
      bestIrrigatorReviewDescription.value.sort((a, b) => a.id - b.id)
      bestIrrigatorReviewLoading.value = false
      bestIrrigatorReviewError.value = false
    } catch (e) {
      bestIrrigatorReviewError.value = true
      bestIrrigatorReviewLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestIrrigatorReviewDescription,
    bestIrrigatorSlug,
    bestIrrigatorReviewLoading,
    bestIrrigatorReviewError
  }
}
