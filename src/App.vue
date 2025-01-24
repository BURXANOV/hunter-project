<script setup>
import router from "./router";
import Header from "./components/Header.vue";
import Liquidation from "./components/Liquidation.vue";
import Partner from "./components/Partner.vue";
import Discount from "./components/Discount.vue";
import Blog from "./components/Blog.vue";
import Populr from "./components/Populr.vue";
import Footer from "./components/Footer.vue";
import Activ from "./components/Activ.vue";
import Category from "./components/Category.vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
import CartItem from "./components/CartItem.vue";
import CartModal from "./components/cart/CartModal.vue";
import Cartmod from "./components/cart/Cartmod.vue";
</script>
<template>
  <div class="app-container">
    <main class="main-content">
      <Header />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<style scoped></style>
