<script>
import Product from './OneProduct.vue';
    export default {
        components : {
            Product
        },
        props: {
            listProduct : {
                type: Array,
                required: true,
                validator(value) {
                    return value.length <= 100;
                }
            }
        },

        methods: {
            handler_getOneProduct(id){
               // console.log(id);
                this.$emit('getOneProduct', id);
            }
        }
    }
</script>

<template>
    <div class="trending">
        <p class="trending--title">Liste des produits</p>
        <ul class="trending__list">
          <li class="trending__items" v-for="item in listProduct"><Product v-bind:oneProduct="item" @getOneProduct="handler_getOneProduct"></Product></li>
        </ul>
    </div>
</template>

