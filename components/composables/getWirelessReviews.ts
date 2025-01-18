import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import { bestWirelessReviewsDescription, bestWirelessReviewsTitle } from "~/data/wireless/02-reviews"

export function getWirelessReviews() {

  const bestWirelessReviewTitle = ref<TitleInfo>({
    title: '',
    description: '',
    subtext: '',
    slug: ''
  })
  const bestWirelessReviewDescription = ref<ReviewGrid[]>([])

  const loadingBestWireless = ref(false)
  const errorBestWireless = ref(false)

  const fetchPosts = async () => {
    loadingBestWireless.value = true
    try {
      bestWirelessReviewTitle.value = await bestWirelessReviewsTitle
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
    bestWirelessReviewTitle,
    bestWirelessReviewDescription,
    loadingBestWireless,
    errorBestWireless
  }
}