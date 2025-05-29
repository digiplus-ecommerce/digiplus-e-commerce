import Axios from "../../services/axios";
import { ref } from "vue";
import type { Products } from "../../types/products";

export function useProducts() {
  const data = ref<Products[]>([]);
  const product = ref<Products | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchProducts = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await Axios.get("/products");
      data.value = res.data;
    } catch (error: any) {
      error.value = error?.response?.data?.message || "Failed to get products";
    } finally {
      isLoading.value = false;
    }
  };

  const fetchProduct = async (id: string) => {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await Axios.get(`/products/${id}`);
      product.value = res.data;
    } catch (error: any) {
      error.value = error?.response?.data?.message || "Failed to get product";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    product,
    isLoading,
    error,
    fetchProducts,
    fetchProduct,
  };
}
