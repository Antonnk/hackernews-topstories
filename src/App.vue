<template>
    <div>
        <section class="container mx-auto px-2 py-10">
            <h1 class="text-4xl font-bold">Top 10 Random Hackernews posts</h1>
        </section>

        <top-stories/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    const TopStories = require('./components/TopStories.vue').default;


    export default Vue.extend({

        components: {
            TopStories,
        }
    })
</script>