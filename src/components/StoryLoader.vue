<template>
    <div class="block mb-6 h-48 bg-gray-300" id="story-loader"></div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({})
</script>

<style scoped>
    #story-loader {
        position: relative;
        overflow: hidden;
    }

    #story-loader::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(317deg, rgba(255, 255, 255, 0) 18%, rgba(255, 255, 255, 0.4009804605435925) 52%, rgba(255, 255, 255, 0) 78%);
        animation: shimmer 5s infinite;
        content: '';
        z-index: 100;
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
</style>