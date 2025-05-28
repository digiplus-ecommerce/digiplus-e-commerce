import { ref } from "vue";
import Axios from "../../services/axios";
import type { Products } from "../../types/products";

export function useProduct(id: string) {
  const product = ref<Products | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchProduct = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await Axios.get(`/products/${id}`);
      product.value = res.data;
    } catch (error: any) {
      error.value = error?.response?.data?.message || "Failed to fetch product";
    } finally {
      isLoading.value = false;
    }
  };

  fetchProduct();

  return {
    product,
    isLoading,
    error,
  };
}
