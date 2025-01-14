<script setup>
import router from "@/router";
const items = [
  {
    id: 1,
    imgSrc: "/Mask.png",
    name: "Item 1",
    title: "Title 1",
  },
  {
    id: 2,
    imgSrc: "/Mask2.png",
    name: "Item 2",
    title: "Title 2",
  },
  {
    id: 3,
    imgSrc: "/Mask.png",
    name: "Item 3",
    title: "Title 3",
  },
  {
    id: 4,
    imgSrc: "/Mask2.png",
    name: "Item 4",
    title: "Title 4",
  },
  {
    id: 5,
    imgSrc: "/Mask.png",
    name: "Item 5",
    title: "Title 5",
  },
  {
    id: 6,
    imgSrc: "/Mask2.png",
    name: "Item 6",
    title: "Title 6",
  },
  {
    id: 7,
    imgSrc: "/Mask.png",
    name: "Item 7",
    title: "Title 7",
  },
  {
    id: 8,
    imgSrc: "/Mask.png",
    name: "Item 8",
    title: "Title 8",
  },
];
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center"
    style="background-image: url('/cart3.svg')"
  >
    <div class="max-w-[1240px] w-full p-5">
      <div class="flex gap-4 items-center mb-8">
        <p class="text-xl font-semibold">Блог</p>
        <button
          class="text-lg font-semibold text-gray-600 hover:text-black transition"
        >
          &gt;
        </button>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center"
        >
          <img
            :src="item.imgSrc"
            alt="item image"
            class="w-full h-[200px] object-cover rounded-md mb-4"
          />
          <p class="text-lg font-bold text-gray-800">{{ item.name }}</p>
          <h1 class="text-sm text-gray-600">{{ item.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
