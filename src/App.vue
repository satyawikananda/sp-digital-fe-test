<script setup lang="ts">
import { ref, watchEffect } from "vue"
import { Head } from "@vueuse/head"
import { useToggle, onKeyStroke, onClickOutside } from "@vueuse/core"
import { dataPizzaList, dataTopping } from "@/data/index"
import { useCart } from "@/stores/cart"
import type { IPizzaList, ITopping, IDataModal, ICart } from "@/types/index"
import CardCart from "./components/CardCart.vue"

const pizzas = ref<IPizzaList[]>(dataPizzaList)
const toppings = ref<ITopping[]>(dataTopping)
const dataModal = ref<IDataModal[]>([])
const dataToppings = ref<ITopping[]>([])
const totalPrice = ref<number>(0)

const cartStore = useCart()

const [modal, setModal] = useToggle()

onKeyStroke("Escape", () => {
  modal.value = false
  dataModal.value = []
  dataToppings.value = []
})

const modalBox = ref(null)
onClickOutside(modalBox, (e) => {
  modal.value = false
  dataModal.value = []
  dataToppings.value = []
})

const modalOpen = ({ title, image, price }: IDataModal) => {
  dataModal.value?.push({ title, image, price })
  modal.value = true
}

const onSubmitForm = () => {
  const data = {
    image: dataModal.value[0].image,
    price: dataModal.value[0].price,
    title: dataModal.value[0].title,
    topping: dataToppings.value ?? null,
  }
  cartStore.addItem(data)
  modal.value = false
  dataModal.value = []
  dataToppings.value = []
}

const sumAllTotal = () => {
  totalPrice.value = cartStore.totalCartPrice?.reduce((a, b) => a + b)
}

watchEffect(() => {
  sumAllTotal()
})
</script>

<template>
  <Head>
    <title>S.P Digital Frontend Test</title>
    <meta name="description" content="Frontend Test" />
  </Head>
  <main class="max-w-full">
    <div class="flex flex-wrap overflow-hidden">
      <div class="w-8/12 overflow-hidden">
        <div class="mx-8 my-6">
          <h1 class="text-primary">Pizza list</h1>
          <div class="grid grid-cols-3 mt-3 gap-4">
            <Card
              v-for="(pizza, i) in pizzas"
              :key="i"
              :image="pizza.image"
              :title="pizza.title"
              :isDiscount="pizza.isDiscount"
              :discountPrice="pizza.discountPrice"
              :price="pizza.price"
              @click="
                modalOpen({
                  title: pizza.title,
                  image: pizza.image,
                  price: pizza.price,
                })
              "
            />
          </div>
        </div>
      </div>
      <!-- Cart -->
      <div class="w-4/12 h-screen overflow-auto bg-white">
        <div class="mx-8 my-6">
          <h1 class="text-primary">Cart</h1>
          <div
            class="flex items-center justify-center text-center h-[75vh]"
            v-if="cartStore.carts.length < 1"
          >
            <p class="text-gray-400">The shopping cart is still empty, click item to add to cart</p>
          </div>
          <CardCart
            v-for="(cart, i) in cartStore.carts"
            :image="cart.image"
            :title="cart.title"
            :price="cart.price"
            :toppings="cart.topping"
          />
          <div class="flex justify-between p-3 bg-secondary rounded-md mt-3 font-bold">
            <p>Total</p>
            <p>${{ totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="fixed overflow-x-hidden overflow-y-hidden inset-8 flex justify-content items-center z-50"
      v-if="modal"
    >
      <div ref="modalBox" class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-white border-0 w-[100vh] h-auto p-5">
          <h2 class="capitalize text-primary">topings</h2>
          <div class="mt-3">
            <form @submit.prevent="onSubmitForm">
              <div class="flex flex-row flex-wrap">
                <div v-for="(topping, i) in toppings" :key="i" class="w-4/12 mb-2">
                  <div class="flex">
                    <input
                      type="checkbox"
                      :id="topping.topping"
                      :value="{ topping: topping.topping, price: topping.price }"
                      v-model="dataToppings"
                      class="cursor-pointer"
                    />
                    <label :for="topping.topping" class="ml-2 capitalize"
                      >{{ topping.topping }} (${{ topping.price }})</label
                    >
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap justify-end">
                <input
                  type="submit"
                  class="border flex flex-wrap justify-end p-3 w-2/6 rounded-md bg-primary text-white cursor-pointer"
                  value="Add to cart"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="modal" class="fixed inset-0 z-40 opacity-60 bg-slate-600" />
  </main>
</template>
