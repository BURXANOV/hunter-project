<template>
  <div class="flex p-20">
    <div class="space-y-5">
      <ul>
        <li class="flex text-sm font-semobold gap-3">
          <p class="cursor-pointer">Главная</p>
          >
          <p class="cursor-pointer">Каталог</p>
          >
          <p class="cursor-pointer">Тепловизоры для охоты</p>
        </li>
      </ul>
      <h1 class="text-[26px] font-bold">Тепловизоры для охоты</h1>
      <p class="font-bold text-[14px] pt-10">Категория</p>
      <div class="flex gap-5 items-center">
        <img class="w-3 h-3" src="/Vector 9.png" alt="" />
        <p class="text-[23px] font-medium">Каталог</p>
      </div>
      <p class="cursor-pointer">Тепловизоры для охоты</p>
      <p class="cursor-pointer">Тепловизионные прицелы</p>
      <p class="cursor-pointer">Тепловизионные монокуляры</p>
      <div></div>
      <p>Цена, от/до</p>
      <div
        class="flex m-10 relative right-5 border justify-between rounded-xl shadow-xl p-4 max-w-[180px]"
      >
        <div class="cursor-pointer hover:opacity-35">500c</div>
        <div class="flex border justify-between rounded-xl shadow-xl"></div>
        <div class="cursor-pointer hover:opacity-35">5000c</div>
      </div>
      <select class="border rounded-xl shadow-xl p-3">
        <option class="border rounded-xl shadow-xl" value="text">
          Количество в упаковке
        </option>

        <option class="border rounded-xl shadow-xl" value="checkbox">1</option>
        <option class="border rounded-xl shadow-xl" value="text">2</option>
        <option class="border rounded-xl shadow-xl" value="text">3</option>
      </select>
    </div>
    <Product />
  </div>
</template>
<script setup>
import Product from "./Product.vue";
</script>
