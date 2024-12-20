<template>
  <div>
    <div class="flex justify-center gap-10 text-[20px] my-4">
      <p>Сортировать:</p>
      <select
        v-model="selectedSort"
        @change="sortItems"
        class="border px-2 py-1 rounded"
      >
        <option value="popular">Популярные</option>
        <option value="cheap">Дешевле</option>
        <option value="expensive">Дороже</option>
      </select>
    </div>

    <div class="flex pr-10 pl-10 justify-center items-center flex-wrap gap-4">
      <div
        v-for="item in sortedItems"
        :key="item.id"
        class="border cursor-pointer rounded-xl shadow-xl p-4 flex flex-col items-center w-64"
      >
        <img
          src="/like.svg"
          alt="Like Icon"
          class="h-6 w-6 cursor-pointer self-end"
        />
        <img
          :src="item.imgSrc"
          :alt="item.title"
          class="h-32 w-32 object-cover my-2"
        />
        <p class="font-bold text-center">{{ item.title }}</p>
        <div class="mt-2 w-full">
          <ul class="flex items-center justify-between w-full">
            <li>
              <p class="line-through text-gray-500">{{ item.priceFri }} ₽</p>
              <p class="text-green-500 font-semibold">{{ item.price }} ₽</p>
            </li>
            <li>
              <img
                src="/Cart5.svg"
                alt="Cart Icon"
                class="h-6 w-6 cursor-pointer hover:opacity-75"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const items = ref([
  {
    id: 1,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Alfa ST25",
    priceFri: 1500,
    price: 10300,
  },
  {
    id: 2,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Beta XT35",
    priceFri: 2000,
    price: 18030,
  },
  {
    id: 3,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Gamma YT45",
    priceFri: 2500,
    price: 200,
  },
  {
    id: 4,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Alfa ST25",
    priceFri: 1500,
    price: 100,
  },
  {
    id: 5,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Beta XT35",
    priceFri: 2000,
    price: 18000,
  },
  {
    id: 6,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Gamma YT45",
    priceFri: 2500,
    price: 230,
  },
  {
    id: 7,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Alfa ST25",
    priceFri: 1500,
    price: 1000,
  },
  {
    id: 8,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Beta XT35",
    priceFri: 2000,
    price: 1800,
  },
  {
    id: 9,
    imgSrc: "/granat3.png",
    title: "Прицел тепловизионный Arkon Gamma YT45",
    priceFri: 2500,
    price: 2300,
  },
]);

const selectedSort = ref("popular");

const sortedItems = computed(() => {
  if (selectedSort.value === "cheap") {
    return [...items.value].sort((a, b) => a.price - b.price);
  } else if (selectedSort.value === "expensive") {
    return [...items.value].sort((a, b) => b.price - a.price);
  }
  return items.value;
});

function sortItems() {
  console.log("Сортировка:", selectedSort.value);
}
</script>
