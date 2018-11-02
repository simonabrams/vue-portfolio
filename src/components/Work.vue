<template>
    <div class="container">
        <h2 class="category-title">{{title}}</h2>
        <div
            v-masonry
            class="work-container"
            fit-width="true"
            percentPositions="true">
            <WorkModule
                v-masonry-tile
                v-for="workItem in workItems"
                :key=workItem.id
                :workItem="workItem"
                class="work-module">
            </WorkModule>
        </div>
    </div>
</template>
<script>

import WorkModule from './WorkModule.vue'

export default {
    props: {title: String, workItems: {Array, Object}},
    data() {
        return {
            foo: 'foo'
        }
    },
    components: {
        WorkModule
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-flow: column;
        justify-content: space-around;

        width: 100%;
        max-width: 1280px;
        margin: auto;

    }
    .category-title {
        flex: 1;
        text-transform: uppercase;
        font-size: 2.1rem;
        margin-bottom: 1em;
    }
    .work-container {
        flex: 1;
        display: flex;
        justify-content: space-around;

        width: 100%;
        margin: auto;
        padding: 0;
        margin-bottom: 6rem;
    }
    .work-module {
        width: 300px;
        margin: 0.25em;
        border: 8px solid rgba(126, 124, 124, 0.1);
    }
</style>
