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
    },
    methods: {
            handler_getOneProduct(id){
               // console.log(id);
                this.$emit('getOneProduct', id);
            },
            handler_putToBasket(item){
                //console.log(item);
                this.$emit('putToBasket', item);
            }
        },
        
}
</script>

<template>
    <HeaderProduct :oneProduct="oneProduct" @putToBasket="handler_putToBasket"></HeaderProduct>
    <ProductList v-bind:listProduct="listProduct" @getOneProduct="handler_getOneProduct"></ProductList>
</template>

<style>

</style>