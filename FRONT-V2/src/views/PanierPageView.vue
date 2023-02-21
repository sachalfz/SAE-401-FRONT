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
    <PanierPage v-bind:products="listProduct" :trash="true" @delete="$emit('delete', product)"></PanierPage>
</template>