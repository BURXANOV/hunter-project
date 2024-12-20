<template>
  <div>
    <div>
      <ul class="flex gap-5">
        <li @click="changeContent('Описание')">Описание</li>
        <li @click="changeContent('Характеристики')">Характеристики</li>
        <li @click="changeContent('Отзывы')">Отзывы</li>
      </ul>
      <div class="content">
        <p v-if="content">{{ content }}</p>
        <div v-if="loading">Загрузка...</div>
        <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Описание from "./cart/Carttext.vue";
import Характеристики from "./Cart.vue";
import Отзывы from "./Cart.vue";

export default {
  data() {
    return {
      content: "",
      loading: false,
      currentComponent: null,
    };
  },
  methods: {
    async changeContent(section) {
      this.loading = true;
      this.content = "";

      // В зависимости от вкладки меняем отображаемый компонент
      if (section === "Описание") {
        this.currentComponent = Описание; // Загружаем компонент
        this.content = "Здесь будет описание товара."; // Пример текста
      } else if (section === "Характеристики") {
        this.currentComponent = Характеристики;
        this.content = "Здесь будут характеристики товара.";
      } else if (section === "Отзывы") {
        this.currentComponent = Отзывы;
        this.content = "Здесь будут отзывы пользователей.";
      }

      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* Добавьте свои стили для вкладок и контента */
</style>
