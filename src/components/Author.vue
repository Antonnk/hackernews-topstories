<template>
    <div class="flex">
        <img class="w-10" :src="avatar" :alt="`${user.id} avatar`">
        <a :href="href" target="_blank" class="pl-2 text-gray-800">
            <h3 class="font-semibold">{{ user.id }}</h3>
            <p class="text-sm">Karma: {{ user.karma }}</p>
        </a>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    import {User} from "../Interfaces";

    export default Vue.extend({
        props: {
            user: {
                type: Object as () => User,
                required: true
            }
        },

        computed: {
            avatar(): string {
                return `https://avatars.dicebear.com/v2/male/${this.user.id}.svg`;
            },

            href(): string {
                return `https://news.ycombinator.com/user?id=${this.user.id}`;
            }
        }
    })
</script>