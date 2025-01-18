import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import { bestIrrigatorReviewsDescription, bestIrrigatorReviewsTitle } from "~/data/best/02-reviews"

export function getBestIrrigators() {
  const bestIrrigatorReviewTitle = ref<TitleInfo>({
    title: '',
    description: '',
    subtext: '',
    slug: ''
  })

  const bestIrrigatorReviewDescription = ref<ReviewGrid[]>([])

  const bestIrrigatorReviewLoading = ref(false)
  const bestIrrigatorReviewError = ref(false)

  const fetchPosts = async () => {
    bestIrrigatorReviewLoading.value = true
    try {
      bestIrrigatorReviewTitle.value = await bestIrrigatorReviewsTitle
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
    bestIrrigatorReviewTitle,
    bestIrrigatorReviewLoading,
    bestIrrigatorReviewError
  }
}
