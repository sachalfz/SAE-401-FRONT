<script>
import ProductPage from '../components/ProductPage.vue';
export default {
  components :{
    ProductPage
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
  <ProductPage :listProduct="listProduct" :oneProduct="oneProduct" :oneCategory="oneCategory" @getOneProduct="$emit('getOneProduct', oneProduct.id)"></ProductPage>
</template>