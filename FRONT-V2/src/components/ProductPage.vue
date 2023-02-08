<script >
import HeaderProduct from './HeaderProduct.vue';
import ProductList from './ProductList.vue';
export default {
  components :{
    HeaderProduct,
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
        }
    }
}
</script>

<template>
    <HeaderProduct :oneProduct="oneProduct"></HeaderProduct>
    <ProductList v-bind:listProduct="listProduct"></ProductList>
</template>

<style>

</style>