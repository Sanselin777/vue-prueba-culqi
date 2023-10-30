<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface props {
    total: number;
    limit: number;
}
const pages = ref<number>(0);

const currentPage = ref<number>(1);

const props = defineProps<props>();


onMounted(() => {
    pages.value = Math.ceil(props.total / props.limit);
});
</script>

<template>
    <div class="mt-4">
        <div class="flex px-4 py-4 overflow-x-auto bg-white rounded-md">
            <div class="flex mr-4 rounded">
                <a href="#"
                    class="px-3 py-2 ml-0 leading-tight text-indigo-700 bg-white border border-r-0 border-gray-200 rounded-l hover:bg-indigo-500 hover:text-white"><span>Anterior</span></a>
                <a v-for="(n, index) in pages" href="#" :class="{ 'bg-indigo-500 text-white': currentPage === index + 1 }"
                    @click="currentPage = index + 1, $emit('changePage', index + 1)"
                    class="px-3 py-2 leading-tight text-indigo-700 bg-white border border-r-0 border-gray-200 hover:bg-indigo-500 hover:text-white"><span>{{
                        index + 1 }}</span></a>
                <a href="#"
                    class="px-3 py-2 leading-tight text-indigo-700 bg-white border border-gray-200 rounded-r hover:bg-indigo-500 hover:text-white"><span>Siguiente</span></a>
                <span class="ml-1 mt-2">TOTAL: <span class="ml-1"> {{ total }}</span></span>
            </div>
        </div>
    </div>
</template>