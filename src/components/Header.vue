<script setup>
import { ref } from "vue";
import Cartmod from "./cart/Cartmod.vue";
import Footer from "./Footer.vue";
const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <header>
    <div
      class="header hidden md:block w-full min-h-[200px] bg-cover flex flex-col justify-between"
    >
      <div class="w-full px-4 md:px-20">
        <div
          class="flex flex-wrap gap-6 text-black py-4 justify-between items-center"
        >
          <ul
            class="flex flex-wrap gap-4 md:gap-10 text font-bold text-sm uppercase"
          >
            <li>
              <router-link class="hover:text-yellow-600" to="/"
                >Главная</router-link
              >
            </li>
            <li class="fle-col flex items-center justify-center">
              <router-link class="hover:text-yellow-600" to="/activ"
                >Каталог</router-link
              >
            </li>
            <li>
              <router-link class="hover:text-yellow-600" to="/about"
                >О нас</router-link
              >
            </li>
            <li>
              <router-link class="hover:text-yellow-600" to="/blog"
                >Блог</router-link
              >
            </li>
            <li>
              <router-link class="hover:text-yellow-600" to="/contacts"
                >Контакты</router-link
              >
            </li>
          </ul>

          <ul class="flex gap-6 items-center">
            <li>
              <b>09:00-21:00</b>
              <h1>по Кр</h1>
            </li>
            <li
              class="hidden md:block border-2 border-slate-400 rounded-sm h-10"
            ></li>
            <li>
              <b>0500-000-000</b>
              <h2>Заказать</h2>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-wrap items-center justify-between px-4 md:px-20 py-6"
      >
        <img src="/1296670.svg" width="100" height="100" alt="Logo" />
        <div class="flex xs:flex-col-reverse gap-6 md:gap-14 items-center">
          <input
            class="p-3 bg-black-100 text-black hover:bg-slate-100 border-2 rounded-xl w-full xs:w-[200px] md:w-[500px]"
            placeholder="Поиск"
            type="text"
          />
          <div class="flex gap-6 items-center">
            <ul class="flex gap-6">
              <li>
                <img src="/user.svg" alt="User" class="w-6 h-6" />
                <p>Войти</p>
              </li>
              <li>
                <img src="/like.svg" alt="Like" class="w-6 h-6" />
                <p>Избранное</p>
              </li>
              <li>
                <img
                  @click="openModal"
                  src="/cart.svg"
                  alt="Cart"
                  class="w-6 h-6 cursor-pointer"
                />
                <p>Корзина</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="block sm:hidden">adfafsa</div>
  </header>

  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div>
      <Cartmod />
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: url("/image1.svg"), url("/image2.svg");
  background-position: left, right;
  background-size: cover;
}
</style>
