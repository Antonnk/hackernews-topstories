<template>
    <section class="container mx-auto px-2">
        <template v-if="!loading">
            <story v-for="story in items" :story="story" :key="story.id"/>
        </template>
        <template v-else>
            <story-loader v-for="loader in loaderIterable" :key="loader"/>
        </template>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Item} from "../Interfaces";

    const Service = require('../Service').Service;
    const Story = require('./Story.vue').default;
    const StoryLoader = require('./StoryLoader.vue').default;

    const hackernewsApi = new Service();

    export default Vue.extend({

        props: {
            count: {
                type: Number as () => number,
                default: 10
            }
        },

        data(): {
            items: Array<Item>,
            loading: Boolean
        } {
            return {
                items: [],
                loading: true
            }
        },

        async created(): Promise<void> {
            const ids: Array<number> = await hackernewsApi.fetchTopstories();

            const shuffled: Array<number> = ids.sort(() => 0.5 - Math.random());
            const selected: Array<number> = shuffled.slice(0, this.count - 0);

            this.items = await this.loadItems(selected);
            this.items.sort(this.sorter);
            this.items = await this.attachUser();

            this.loading = false;
        },

        methods: {
            async loadItems(ids: Array<number>): Promise<Array<Item>> {
                return await Promise.all(ids.map(async (id: number): Promise<Item> => {
                    return await hackernewsApi.fetchItem(id);
                }));
            },

            async attachUser(): Promise<Array<Item>> {
                return await Promise.all(this.items.map(async (item: Item): Promise<Item> => {
                    item.user = await hackernewsApi.fetchUser(item.by);
                    return item
                }))
            },

            sorter(a: Item, b: Item): number {
                return b.score - a.score;
            }
        },

        computed: {
            loaderIterable(): Array<number> {
                return Array(this.count);
            }
        },

        components: {
            Story,
            StoryLoader
        }
    })
</script>