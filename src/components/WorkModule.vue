<template>
    <div class="work-item" @mouseover="isActive = !isActive" @mouseout="isActive = !isActive">
        <img class="work-item__thumbnail" :src="`${workItem.url}/${workItem.thumbnailUrl}`" alt="">
        <div class="work-item__description" v-bind:class="{active: isActive}">
            <h2>{{workItem.name}}</h2>
            <div>{{workItem.description}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['workItem'],
    data() {
        return {
            isActive: false
        }
    },
}
</script>

<style lang="scss" scoped>
    .work-item {
        padding: 0;
        margin: 0;
        overflow: hidden;

    }
    .work-item__thumbnail {
        width: 100%;
        height: 100%;
        // transform: scale(1.05);
        transition: all 0.5s cubic-bezier(0.67, 0.01, 0.26, 1);

        &:hover {
            transform: scale(1.10);
        }
        img {
            border: none;
            width: 100%;
            height: auto;
        }
    }

    .work-item__description {
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 5rem;
        padding: 0.2em 0.75em;
        
        color: white;
        font-size: 0.7rem;
        text-align: left;
        transform: translateY(5rem);
        transition: all 0.4s cubic-bezier(0.52, 0.02, 0, 1.01);

        h2 {
            margin-bottom: 0;
        }

        &.active {

            transform: translateY(0);
        }
    }
</style>
