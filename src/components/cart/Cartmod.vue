<script setup>
const closeModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <div v-if="isOpen">
    <div
      class="bg-black opacity-50 w-full h-full fixed top-0 right-0 left-0"
      @click="closeModal"
    ></div>
    <div
      class="w-[500px] max-w-[90%] mx-auto right-0 top-0 h-full bg-white absolute"
    >
      <div class="flex flex-col items-center gap-6 text-center mt-20">
        <p class="text-lg font-medium">Ваша корзина пуста!</p>
        <h3 class="text-sm text-gray-600">
          Перейдите в каталог для добавления товара
        </h3>
        <a
          @click="closeModal"
          class="border border-black rounded-xl shadow-xl bg-slate-400 w-[150px] p-3 text-center"
          href="/"
        >
          В каталог
        </a>
      </div>
    </div>
  </div>
</template>
