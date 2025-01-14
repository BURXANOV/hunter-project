<template>
  <div class="not-found">
    <h1>404: Страница не найдена</h1>
    <p>Кажется, вы перешли на несуществующую страницу.</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>
