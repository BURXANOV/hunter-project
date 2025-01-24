<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <div class="flex justify-between mb-6">
        <RouterLink
          aria-disabled="false"
          class="text-blue-500 hover:underline font-medium"
        >
          Зарегистрироваться
        </RouterLink>
        /
        <RouterLink
          to="/signin"
          class="text-blue-500 hover:underline font-medium"
        >
          Войти
        </RouterLink>
      </div>
      <form action="" class="space-y-4">
        <div>
          <label for="first-name" class="block text-gray-700 font-medium">
            Имя
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="Имя"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="last-name" class="block text-gray-700 font-medium">
            Фамилия
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Фамилия"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="username" class="block text-gray-700 font-medium">
            Имя пользователя
          </label>
          <input
            type="text"
            id="username"
            placeholder="Имя пользователя"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-medium">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            placeholder="Пароль"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="confirm-password" class="block text-gray-700 font-medium">
            Повторите пароль
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Повторите пароль"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
