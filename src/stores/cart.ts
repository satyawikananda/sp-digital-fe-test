import { defineStore, acceptHMRUpdate } from "pinia"
import { ref } from "vue"
import type { ICart } from "@/types/index"

export const useCart = defineStore("cart", () => {
  const carts = ref<ICart[]>([])
  const totalCartPrice = ref<Array<number>>([0])

  const addItem = (item: ICart) => {
    carts.value.push(item)
  }

  const storeTotalCartPrice = (total: number) => {
    totalCartPrice.value.push(total)
  }

  return {
    carts,
    totalCartPrice,
    storeTotalCartPrice,
    addItem,
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCart, import.meta.hot))
