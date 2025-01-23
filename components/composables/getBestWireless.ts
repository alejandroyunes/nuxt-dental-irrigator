import { onMounted, ref } from 'vue'
import { bestWireless } from "~/data/affortable/wireless/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getWirelessReviews() {

  const bestWirelessAffortableReview = ref<ReviewGrid[]>([])

  const loadingBestWireless = ref(false)
  const errorBestWireless = ref(false)

  const fetchPosts = async () => {
    loadingBestWireless.value = true
    try {
      bestWirelessAffortableReview.value = await bestWireless
      loadingBestWireless.value = false

    } catch (e) {
      errorBestWireless.value = true
      loadingBestWireless.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestWirelessAffortableReview,
    loadingBestWireless,
    errorBestWireless
  }
}