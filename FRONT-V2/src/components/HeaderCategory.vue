<script>
import Product from './OneProduct.vue';
    export default {
        components :{
            Product
        },
        props: {
            oneCategory : {
                type: Array,
                required: true,
                validator(value) {
                    return value.length <= 100;
                }
            },
            oneProduct : {
                type: Array,
                required: true,
                validator(value) {
                    return value.length <= 100;
                }
            },
        }
    }
</script>

<template>
    <div class="presentation">
        <img class="presentation--img" :src="oneCategory.img" :alt="oneCategory.name">
        <div class="presentation__content">
            <p class="presentation__content--title">{{oneCategory.name}}</p>
            <p class="presentation__content--description">{{oneCategory.description}}</p>
            <Product v-bind:oneProduct="oneProduct"></Product>
        </div>
    </div>
</template>

