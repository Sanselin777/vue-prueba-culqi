<script setup lang="ts">
  import useAuthUser from '../composables/useAuthUser';

  const { onlogin, userCredentials, errorMessage } = useAuthUser()
</script>

<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">Inicia sesión</span>
      </div>

      <form class="mt-4" @submit.prevent="onlogin">
        <label class="block">
          <span class="text-sm text-gray-700">Correo electrónico</span>
          <input v-model="userCredentials.correo" type="email"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Contraseña</span>
          <input v-model="userCredentials.password" type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
        </label>

        <div class="flex items-center  mt-4">
          <div v-if="errorMessage">
            <span class="block text-sm text-red-600  fontme ">{{ errorMessage }}</span>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <span class="text-gray-600">¿Eres nuevo aquí? <a href="" class="text-green-500">Crea una cuenta</a></span>
        </div>

        <div class="mt-6">
          <button type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-gray-900 rounded-md focus:outline-none hover:bg-gray-700">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
