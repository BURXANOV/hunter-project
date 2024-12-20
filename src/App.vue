<script setup>
import router from "./router/inde";
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
</script>
<template>
  <div class="">
    <Header />

    <Cart />

    <!-- <Category /> -->
    <!-- <Activ /> -->
    <!-- <Liquidation />

    <Partner />
    <Discount />
    <Blog />
    <Populr />
    <Footer /> -->
  </div>
</template>

<style scoped></style>
