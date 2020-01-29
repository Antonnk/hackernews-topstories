<template>
    <div>
        <section class="container mx-auto px-2 py-10">
            <h1 class="text-4xl font-bold">Top 10 Random Hackernews posts</h1>
        </section>

        <section v-if="!loading" class="container mx-auto px-2">
            <v-article v-for="story in stories" :story="story" :key="story.id"/>
        </section>
        <b v-else>Loading...</b>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    const Service = require('./Service').Service;
    const Article = require('./components/Article.vue').default;

    export default Vue.extend({

        data(): {
            stories: Array<any>,
            loading: Boolean
        } {
            return {
                stories: [],
                loading: false
            }
        },

        async created(): Promise<void> {
            this.loading = true;
            const hackernewsApi = new Service();
            this.stories = await hackernewsApi.topstories();

            const loadUser = async () => {
                return await Promise.all(this.stories.map(async story => {
                    story.user = await hackernewsApi.getUser(story.by);
                    return story
                }))
            };

            await loadUser();


            this.loading = false;
        },

        components: {
            'v-article': Article
        }
    })
</script>