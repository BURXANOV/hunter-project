<template>
  <div class="relative">
    <div class="mx-auto max-w-[1200px] p-20 relative overflow-hidden">
      <div
        class="carousel-wrapper gap-14"
        :style="{
          transform: `translateX(-${currentIndex * (100 / slidesVisible)}%)`,
        }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel-slide w-24"
          :style="{ width: `${100 / slidesVisible}%` }"
        >
          <img
            :src="item.image"
            alt="carousel item"
            class="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
    <button
      class="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border rounded-full w-[40px] h-[40px] flex items-center justify-center shadow"
      @click="prevSlide"
    >
      &lt;
    </button>
    <button
      class="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border rounded-full w-[40px] h-[40px] flex items-center justify-center shadow"
      @click="nextSlide"
    >
      &gt;
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = [
  { image: "/coursera.png" },
  { image: "/ibm1.png" },
  { image: "/Shape.png" },
  { image: "/stripe.png" },
  { image: "/tumblr.png" },
  { image: "/ibm1.png" },
  { image: "/Shape.png" },
];

const currentIndex = ref(0);

const slidesVisible = 4;

const nextSlide = () => {
  const maxIndex = items.length - slidesVisible;
  currentIndex.value =
    currentIndex.value < maxIndex ? currentIndex.value + 1 : 0;
};

const prevSlide = () => {
  const maxIndex = items.length - slidesVisible;
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : maxIndex;
};
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
