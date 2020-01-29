<template>
    <div class="flex">
        <img class="w-10" :src="`https://avatars.dicebear.com/v2/male/${user.id}.svg`" :alt="`${user.id} avatar`">
        <div class="pl-2 text-gray-800">
            <h3 class="font-semibold">{{ user.id }}</h3>
            <p class="text-sm">Karma: {{ user.karma }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    interface User {
        id: string,
        karma: number,
        created: number,
    }

    export default Vue.extend({
        props: {
            user: {
                type: Object as () => User,
                required: true
            }
        }
    })
</script>