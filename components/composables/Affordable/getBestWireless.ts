import { onMounted, ref } from 'vue'
import { bestWireless } from "~/data/affortable/wireless/reviews"
import type { ReviewGrid } from "~/types/review-grid"

export function getBestWirelessReviews() {

  const bestWirelessAffortableReview = ref<ReviewGrid[]>([])

  const bestWirelessAffortableLoading = ref(false)
  const bestWirelessAffortableError = ref(false)

  const fetchPosts = async () => {
    bestWirelessAffortableLoading.value = true
    try {
      bestWirelessAffortableReview.value = await bestWireless
      
      bestWirelessAffortableLoading.value = false
      bestWirelessAffortableError.value = false
    } catch (e) {
      bestWirelessAffortableError.value = true
      bestWirelessAffortableLoading.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestWirelessAffortableReview,
    bestWirelessAffortableLoading,
    bestWirelessAffortableError
  }
}