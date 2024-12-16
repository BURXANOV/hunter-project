<template>
  <div class="m-20">
    <p class="text-xl font-bold mb-6">Популярные категории</p>
    <div class="flex flex-wrap justify-center gap-10 items-center">
      <div
        v-for="item in items"
        :key="item.id"
        class="border rounded-xl h-[200px] shadow-xl p-4 w-[200px] flex flex-col items-center"
      >
        <img
          class="w-[150px] h-[100px] mb-2"
          :src="item.imgSrc"
          :alt="item.title"
        />
        <h3 class="text-center font-medium">{{ item.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    id: 1,
    imgSrc: "/bron.png",
    title: "Тактичекое снаряжение",
  },
  {
    id: 2,
    imgSrc: "/noj.png",
    title: "Ножи",
  },
  {
    id: 3,
    imgSrc: "/granat.png",
    title: "Пиротехника",
  },
  {
    id: 4,
    imgSrc: "/granat2.png",
    title: "Товары для туризма",
  },
  {
    id: 5,
    imgSrc: "/granat.png",
    title: "Фонари",
  },
];
</script>
