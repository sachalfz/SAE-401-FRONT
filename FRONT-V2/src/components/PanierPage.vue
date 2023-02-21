<script>
import ProductPanier from './ProductPanier.vue';
    export default {
        components :{
            ProductPanier
        },
        props : {
            products : {
                type: Array,
                required: true,
                validator(value){
                    return value.length <= 100;
                }
            },          
        }
    }
</script>

<template>
    <div class="panier__gauche__produits">
        <ul class="card__list">
            <li class="panier__gauche__produits" v-for="item in products"> <ProductPanier v-bind:product="item" :trash="true" @delete="$emit('delete', product)" :key="item.id"></ProductPanier> </li>
        </ul>
    </div>
    
    <div class="panier__gauche__divbutton">
        <button class="panier__gauche__button">
            Valider
        </button>
    </div>
</template>

