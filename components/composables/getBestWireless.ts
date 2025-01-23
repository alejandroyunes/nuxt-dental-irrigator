import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import { bestWirelessReviewsDescription, slug } from "~/data/wireless/reviews"

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
      bestWirelessReviewDescription.value.sort((a, b) => a.id - b.id)
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