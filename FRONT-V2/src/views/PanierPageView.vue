<script>
import PanierPage from '../components/PanierPage.vue';
export default {
  components :{
    PanierPage
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
    <PanierPage v-bind:products="products" :trash="true" @delete="deleteItem"></PanierPage>
</template>