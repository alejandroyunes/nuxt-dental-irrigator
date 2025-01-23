import { onMounted, ref } from 'vue'
import { bestWirelessReviewsDescription, slug } from "~/data/affortable/wireless/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getWirelessReviews() {

  const bestWirelessReviewDescription = ref<ReviewGrid[]>([])
  const bestWirelessSlug = ref(slug)

  const loadingBestWireless = ref(false)
  const errorBestWireless = ref(false)

  const fetchPosts = async () => {
    loadingBestWireless.value = true
    try {
      bestWirelessSlug.value = await slug
      bestWirelessReviewDescription.value = await bestWirelessReviewsDescription
      loadingBestWireless.value = false

    } catch (e) {
      errorBestWireless.value = true
      loadingBestWireless.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestWirelessSlug,
    bestWirelessReviewDescription,
    loadingBestWireless,
    errorBestWireless
  }
}