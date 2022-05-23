<script setup lang="ts">
defineProps<{
  image: string
  title: string
  isDiscount: boolean
  discountPrice?: string
  price: string
}>()
</script>

<template>
  <div class="p-3 rounded bg-white cursor-pointer">
    <img
      class="rounded max-w-full border-none"
      :src="$props.image"
      :alt="`image-${$props.title}`"
    />
    <p class="text-center leading-6 font-normal mt-4 uppercase">{{ $props.title }}</p>
    <p class="mt-2 text-center">
      <s class="text-lead text-sm text-gray-400" v-if="$props.isDiscount"
        >${{ $props.discountPrice }}</s
      >
      &nbsp;${{ $props.price }}
    </p>
  </div>
</template>
