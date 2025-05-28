import Axios from "../../services/axios";
import { ref, onMounted } from "vue";
import type { Products } from "../../types/products";

export function useProducts() {
  const products = ref<Products[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchProducts = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await Axios.get("/products");
      products.value = res.data;

      //   await Axios.get("/products")
      //     .then((res) => console.log(res.data))
      //     .catch((err) => console.log(err));
    } catch (error: any) {
      error.value = error?.response?.data?.message || "Failed to fetch users";
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchProducts);

  return {
    products,
    isLoading,
    error,
    fetchProducts,
  };
}
