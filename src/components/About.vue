<template>
  <div>
    <div class="p-24">
      <div class="gap-5 flex">
        <router-link to="/">Главная</router-link>
        <router-link to="">О нас</router-link>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam
          temporibus sed, fugiat earum consectetur, atque magni natus quas
          praesentium fugit culpa soluta excepturi! Consequatur consequuntur in
          sed quod blanditiis! Eos illo neque possimus. Nam culpa cupiditate
          reprehenderit! Rerum eaque nulla alias quia, tempore illum beatae
          debitis iusto recusandae. Beatae.
        </p>
        <img
          class="flex justify-center items-center"
          src="/public/camer.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>
