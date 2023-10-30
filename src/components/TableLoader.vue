<template>
    <tr v-for="(a, i) in 10" :key="i">
        <td class="px-6 py-4 border-b">
            <div class="loading-skeleton py-5"></div>
        </td>
        <td class="px-6 py-4 border-b">
            <div class="loading-skeleton py-5"></div>
        </td>
        <td class="px-6 py-4 border-b">
            <div class="loading-skeleton py-5"></div>
        </td>
        <td class="px-6 py-4 border-b">
            <div class="loading-skeleton py-5"></div>
        </td>
        <td class="px-6 py-4 border-b">
            <div class="loading-skeleton py-5"></div>
        </td>
        <td class="px-6 py-4 border-b">
            <div class="loading-skeleton py-5"></div>
        </td>
    </tr>
</template>

<style>
.loading-skeleton {
    animation: loading 1.5s infinite ease-in-out;
    border-radius: 4px
}

@keyframes loading {
    0% {
        background-color: #f0f0f0;
    }

    50% {
        background-color: #e0e0e0;
    }

    100% {
        background-color: #f0f0f0;
    }
}
</style>
