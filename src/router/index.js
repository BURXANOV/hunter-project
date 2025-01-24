import { createRouter, createWebHistory } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Partner from "@/components/Partner.vue";
import Populr from "@/components/Populr.vue";
import Product from "@/components/Product.vue";
import Liquidation from "@/components/Liquidation.vue";
import Cart from "@/components/Cart.vue";
import Category from "@/components/Category.vue";
import Blog from "@/components/Blog.vue";
import Home from "@/Home.vue";
import About from "@/components/About.vue";
import SignUp from "@/components/sign/SignUp.vue";
import Signin from "@/components/sign/Signin.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: Signin,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/partner",
    name: "Partner",
    component: Partner,
  },
  {
    path: "/populr",
    name: "Populr",
    component: Populr,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/liquidation",
    name: "Liquidation",
    component: Liquidation,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/:pathMatch(.*)*", // Обработчик для несуществующих маршрутов
    name: "NotFound",
    component: () => import("../components/NoFount.vue"), // Создай компонент NotFound.vue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
