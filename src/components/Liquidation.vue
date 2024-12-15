<script setup></script>
<template>
  <div
    class="p-4 sm:pt-20 overlay flex flex-center justify-between items-center h-auto px-5 lg:px-20"
    style="
      background: radial-gradient(
        49.69% 49.69% at 50% 56%,
        #e0e2e4 0%,
        #c1d9e3 100%
      );
    "
  >
    <div class="space-y-6 max-w-lg">
      <p
        class="text-3xl sm:text-5xl lg:text-7xl font-semibold text-center lg:text-left"
      >
        Ликвидация товаров
      </p>
      <h1
        class="text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left"
      >
        Скидки до <span class="text-4xl text-red-700">-50%</span>
      </h1>
      <div class="text-center lg:text-left">
        <button
          class="bg-[#765E48] border-b-gray-800 text-sm lg:text-2xl font-serif text-white rounded-xl shadow-md sm:px-6 px-7 p-2 sm:py-3 hover:bg-[#5e4a3c]"
        >
          Смотреть товары
        </button>
      </div>
    </div>

    <!-- Блок с изображением справа -->
    <div class="relative sm:w-[300px] lg:w-[600px] md:w-[500px] right-0">
      <img class="w-full h-auto max-w-[700px]" src="/camera.png" alt="Camera" />
    </div>
  </div>
</template>
<style></style>
