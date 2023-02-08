<script >
import HeaderCategory from './HeaderCategory.vue';
import ProductList from './ProductList.vue';
export default {
  components :{
    HeaderCategory,
    ProductList
  },
  props: {
        listProduct : {
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
        oneCategory : {
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
    <HeaderCategory :oneProduct="oneProduct" :oneCategory="oneCategory"></HeaderCategory>
    <ProductList v-bind:listProduct="listProduct"></ProductList>
</template>

<style>

</style>