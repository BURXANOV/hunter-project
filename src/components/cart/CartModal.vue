<template>
  <div class="relative max-h-[500px]">
    <div class="bg-black opacity-45 w-full h-full fixed top-0 left-0"></div>

    <div
      class="absolute flex gap-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-lg"
    >
      <div v-for="item in items" :key="item.id" class="mb-4">
        <img
          :src="item.imgSrc"
          :alt="`Изображение ${item.name}`"
          class="w-full h-auto mb-2 rounded-md"
        />
        <p class="text-lg font-medium">{{ item.name }}</p>
        <b class="text-xl text-green-600">{{ item.price }} сом</b>
      </div>
      <div class="space-y-4 mb-4">
        <b> Купить в 1 клик </b>
        <p></p>
        <input
          type="text"
          placeholder="Ваше имя"
          class="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Телефон"
          class="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Адрес доставки"
          class="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          class="w-full p-3 bg-slate-400 border-black rounded-xl shadow-xl hover:bg-slate-500 transition duration-200"
          @click="submitOrder"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    id: 1,
    imgSrc: "/stripe.png",
    name: "Прицел тепловизионный Arkon Alfa ST25",
    price: "12000",
  },
];

function submitOrder() {
  alert("Заказ оформлен!");
}
</script>

<style scoped>
/* Опциональные стили для модалки */
.bg-black {
  background-color: rgba(0, 0, 0, 0.45);
}
</style>
