<template>
    <article class="bg-white mb-6">
        <header class="flex items-start p-5 border-b">
            <div class="flex flex-col-reverse items-center bg-blue-100 p-2 rounded-lg mr-5 w-16">
                <span class="tracking-wide text-blue-700 text-xs opacity-75">SCORE</span>
                <b class="text-xl">{{ story.score }}</b>
            </div>
            <a :href="story.url" target="_blank">
                <h2 class="font-bold text-lg md:text-2xl">{{ story.title }}</h2>
                <small class="text-blue-700 underline hover:text-blue-600">{{ story.url }}</small>
            </a>
        </header>
        <section class="p-5">
            <Author :user="story.user" :key="story.by"/>
        </section>
        <footer class="p-5 bg-gray-100 text-sm flex justify-between text-gray-500">
            <span>Posted: {{ createdAt }}</span>
            <span class="font-mono">#{{ story.id }}</span>
        </footer>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Item} from "../Interfaces";

    const Author = require('./Author.vue').default;

    export default Vue.extend({
        props: {
            story: {
                type: Object as () => Item,
                required: true
            }
        },

        computed: {
            createdAt(): string {
                return new Date(this.story.time * 1000).toLocaleString();
            }
        },

        components: {
            Author
        }
    })
</script>

