import { ref, onMounted } from 'vue'
import type { ProductDetails } from "~/types/product-details"

export const getProductDetails = (fileRoutes: string[] | string) => {
  const product = ref<ProductDetails | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // const { category, fileName} = fileRoutes


  const fetchProductDetails = async () => {
    loading.value = true
    try {

      // product.value = (await import(`~/data/${category}/${fileName}.ts`)).default
    } catch (e) {
      error.value = 'Failed to fetch product details'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchProductDetails()
  })

  return {
    product,
    loading,
    error,
  }
}
