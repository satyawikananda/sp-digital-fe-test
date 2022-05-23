<script setup lang="ts">
import { computed } from "vue"
import { useCart } from "@/stores/cart"
import type { ITopping } from "@/types/index"

const cartStore = useCart()
const props = defineProps<{
  image: string
  title: string
  toppings: Array<ITopping>
  price: number
}>()

const topping = computed(() => {
  const toppingName: string[] = []
  props.toppings.map((value) => toppingName.push(value.topping))

  return toppingName.join(", ")
})

const price = computed(() => {
  let totalPrice: number = 0

  if (props.toppings.length > 1) {
    const prices = props.toppings.map((val) => val.price).reduce((a, b) => a + b)
    totalPrice = prices + props.price
    cartStore.storeTotalCartPrice(totalPrice)
    return {
      price: totalPrice,
    }
  } else if (props.toppings.length == 1) {
    totalPrice = props.toppings[0]?.price + props.price
    cartStore.storeTotalCartPrice(totalPrice)
    return {
      price: totalPrice,
    }
  } else {
    totalPrice += props.price
    cartStore.storeTotalCartPrice(totalPrice)
    return {
      price: props.price,
    }
  }
})
</script>

<template>
  <div class="flex flex-col rounded-md flex-wrap mb-2 mt-2">
    <div class="flex flex-row bg-primary-body p-3">
      <img :src="$props.image" class="w-2/5 rounded" :alt="`image-${$props.title}`" />
      <div class="ml-2 flex flex-col">
        <p class="text-primary-text font-bold capitalize">{{ $props.title }}</p>
        <p class="text-gray-400 text-xs capitalize">
          {{ props.toppings.length != 0 ? topping : "No topings" }}
        </p>
        <p class="text-primary-text font-bold mt-3">${{ price.price }}</p>
      </div>
    </div>
  </div>
</template>
