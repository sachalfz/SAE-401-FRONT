<script>
    export default {
        props : {
            product : {
                type: Array,
                required: true,
                validator(value){
                    return value.length <= 100;
                }
            },


            trash: {
                type: Boolean,
                default: false
            }           
        }
    }
</script>

<template>
    
        <div class="panier__gauche__produits__quote">
            <div class="panier__gauche__produits__image">
                <img class="panier__gauche__produits__img" v-bind:src="product.img">
            </div>
            <div class="panier__gauche__produits__text">
                <div class="panier__gauche__produits__association">
                    <div class="panier__gauche__produits__caption">
                        {{product.name}}
                    </div>
                    <div class="panier__gauche__produits__svg">
                        <img  v-if="trash" @click="$emit('delete', product)" src="../assets/bin.svg" alt="bin">
                    </div>
                </div>

                <div class="panier__gauche__produits__quantite">

                    <select id="quantity-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>

                <div class="panier__gauche__produits__price">
                    {{product.price}}
                </div>

            </div>
        </div>
</template>