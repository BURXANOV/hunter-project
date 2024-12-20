<template>
  <div class="p-20">
    <div class="flex gap-10">
      <p>Каталог</p>
      <p>Тепловизоры для охоты</p>
      <p>Тепловизионные прицелы</p>
      <p>Прицел тепловизионный Arkon Alfa ST25</p>
    </div>

    <div>
      <p class="font-bold text-3xl pt-10 pb-10">
        Прицел тепловизионный Arkon Alfa ST25
      </p>
      <div class="flex gap-20">
        <div>
          <div class="flex gap-4">
            <img class="cursor-pointer" src="/Stars.svg" alt="img" />
            <p class="cursor-pointer">0 отзыв</p>
            <img class="cursor-pointer" src="/like.svg" alt="img" />
            <img class="cursor-pointer" src="/social.svg" alt="img" />
          </div>
          <img class="w-[470px] h-[340px]" src="/fto.jpg" alt="" />
        </div>

        <div>
          <p class="pb-10 text-2xl font-bold">Характеристки</p>
          <ul class="w-[300px] border rounded-xl shadow-xl p-7">
            <li class="flex justify-between">
              <p>Страна происхождения</p>
              <b>Китай</b>
            </li>
            <li class="flex justify-between">
              <p>Кратность</p>
              <b>3,25</b>
            </li>
            <li class="flex justify-between">
              <p>Диаметр объектива</p>
              <b>25 мм</b>
            </li>
            <li class="flex justify-between">
              <p>Производитель</p>
              <b>Arkon</b>
            </li>
          </ul>
        </div>

        <div>
          <div class="w-[314px] p-5 border rounded-sm space-y-4 shadow-sm">
            <p>В наличии</p>
            <b>12000 com</b>
            <button
              class="w-[275px] bg-[#765E48] text-white border rounded-xl shadow-xl p-3"
            >
              В корзину
            </button>
            <button
              @click="openCartModal"
              class="w-[275px] flex bg-[#765E48] bg-opacity-30 justify-center border rounded-xl shadow-xl p-3"
            >
              Купить 1 клик
            </button>
          </div>

          <p class="w-[314px] opacity-25 text-[10px]">
            Цена действительна только для интернет-магазина и может отличаться
            от цен в розничных магазинах
          </p>
        </div>
      </div>

      <CartModal v-if="isCartModalOpen" @close="isCartModalOpen = false" />
    </div>
    <CartItem />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import CartModal from "./cart/CartModal.vue";

// Состояние для модалки
const isCartModalOpen = ref(false);

// Функция для открытия модалки
const openCartModal = () => {
  isCartModalOpen.value = true;
};
</script>
