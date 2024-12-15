<script setup></script>
<template>
  <div>
    <div
      class="header hidden md:block w-full min-h-[200px] bg-cover flex flex-col justify-between"
      style="
        background-image: url('/image1.svg'), url('/image2.svg');
        background-position: left, right;
      "
    >
      <div class="w-full px-4 md:px-20">
        <div
          class="flex flex-wrap gap-6 text-black py-4 justify-between items-center"
        >
          <ul
            class="flex flex-wrap gap-4 md:gap-10 text font-bold text-sm uppercase"
          >
            <li>
              <router-link class="hover:text-yellow-600" href="/"
                >Главная</router-link
              >
            </li>
            <li>
              <router-link class="hover:text-yellow-600" href="/"
                >Каталог</router-link
              >
            </li>
            <li>
              <router-link class="hover:text-yellow-600" href="/"
                >О нас</router-link
              >
            </li>
            <li>
              <router-link class="hover:text-yellow-600" href="/"
                >Блог</router-link
              >
            </li>
            <li>
              <router-link class="hover:text-yellow-600" href="/"
                >Контакты</router-link
              >
            </li>
          </ul>

          <ul class="flex flex-wrap gap-6 items-center">
            <li>
              <b>09:00-21:00</b>
              <h1>по Кр</h1>
            </li>
            <div
              class="hidden md:block border-2 border-slate-400 rounded-sm h-10"
            ></div>
            <li class="text-center">
              <b>0500-000-000</b>
              <h2>Заказать</h2>
            </li>
          </ul>
        </div>

        <div class="border-t border-gray-700 mt-4"></div>
      </div>

      <div
        class="flex flex-wrap items-center justify-between px-4 md:px-20 py-6"
      >
        <img src="/1296670.svg" width="100" height="100" alt="img" />

        <div class="flex xs:flex-col-reverse gap-6 md:gap-14 items-center">
          <div class="relative w-full md:w-auto">
            <img
              class="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2"
              src="/search.svg"
              alt="Search"
            />
            <input
              class="p-3 bg-yellow-600 text-black hover:bg-slate-100 bg-opacity-20 border-2 rounded-xl w-full xs:w-[200px] sm:w-[300px] md:w-[500px]"
              placeholder="Поиск"
              type="text"
            />
          </div>

          <div class="flex gap-6 items-center justify-center">
            <ul class="flex gap-6">
              <li class="flex flex-col items-center">
                <img src="/user.svg" alt="User" class="w-6 h-6" />
                <p class="text-center text-sm">Войти</p>
              </li>
              <li class="flex flex-col items-center">
                <img src="/like.svg" alt="Like" class="w-6 h-6" />
                <p class="text-center text-sm">Избранное</p>
              </li>
              <li class="flex flex-col items-center">
                <img src="/cart.svg" alt="Cart" class="w-6 h-6" />
                <p class="text-center text-sm">Корзинка</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        background-image: url('/Rectangle 43.png');
        background-position: center;
        width: full;
      "
      class="block md:hidden w-full bg-cover h-screen bg-no-repeat bg-bottom"
    >
      <div class="justify-between p-5 flex">
        <img
          class="filter cursor-pointer invert"
          src="/1296670.svg"
          width="80"
          height="80"
          alt=""
        />
        <ul class="flex items-center gap-5 justify-between p-5">
          <li
            class="flex cursor-pointer flex-col text-white text-12 items-center"
          >
            <img class="filter invert w-7 h-7" src="/user.svg" alt="" />
            <p>Войти</p>
          </li>
          <li class="flex cursor-pointer flex-col text-white items-center">
            <img class="filter invert w-7 h-7" src="/like.svg" alt="" />
            <p>Избранное</p>
          </li>
          <li class="flex cursor-pointer flex-col text-white items-center">
            <img class="filter invert w-7 h-7" src="/cart.svg" alt="" />
            <p>Корзина</p>
          </li>
        </ul>
      </div>
      <div class="flex justify-between pl-5 pr-5 items-center">
        <div class="relative">
          <img class="absolute right-2 top-2" src="/search.svg" alt="img" />
          <input
            class="border opacity-20 hover:opacity-40 p-2 rounded-xl w-auto"
            type="text"
            placeholder="Поиск"
          />
        </div>
        <img class="w-14 h-14 cursor-pointer" src="/frame.svg" alt="" />
      </div>
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
