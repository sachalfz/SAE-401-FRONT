<script >
import Banner from './Banner.vue';
import ProductList from './ProductList.vue';

export default {
  components :{
    Banner,
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
    }
}
</script>

<template>
    <Banner></Banner>
    <ProductList v-bind:listProduct="listProduct"></ProductList>
</template>

<style>

</style>