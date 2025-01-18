import { ref, onMounted } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"
import type { TitleInfo } from "~/types/title-info"
import { bestCounterReviewsDescription, bestCounterReviewsTitle } from '~/data/counter/02-reviews'

export function getCounterReviews() {

  const bestCounterReviewTitle = ref<TitleInfo>({
    title: '',
    description: '',
    subtext: '',
    slug: ''
  })
  const bestCounterReviewDescription = ref<ReviewGrid[]>([])

  const loadingCounter = ref(false)
  const errorCounter = ref<string | null>(null)

  const fetchPosts = async () => {
    loadingCounter.value = true
    try {
      bestCounterReviewTitle.value = await bestCounterReviewsTitle
      bestCounterReviewDescription.value = await bestCounterReviewsDescription
      bestCounterReviewDescription.value.sort((a, b) => a.id - b.id)
      loadingCounter.value = false
    } catch (e) {
      errorCounter.value = 'Failed to fetch posts'
      loadingCounter.value = false
    }
  }

  onMounted(fetchPosts)

  return {
    bestCounterReviewTitle,
    bestCounterReviewDescription,
    loadingCounter,
    errorCounter
  }
}
