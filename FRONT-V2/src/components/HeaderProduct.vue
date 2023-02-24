<script>
    export default {
        props: {
            oneProduct : {
                type: Array,
                required: true,
                validator(value) {
                    return value.length <= 100;
                }
            },
            selectedProps : {
                type: Object,
                required: true,
                validator(value) {
                    return value.length <= 100;
                }
            },
        },
    }
</script>
<template>
    <div class="product">
        <img class="product--img" :src="oneProduct.img" :alt="oneProduct.name">
        <div class="article">
            <p class="article--title">{{oneProduct.name}}</p>
            <div class="article__evaluation">
                <p class="article__evaluation--price">{{oneProduct.price}}€</p>
                <div class="article__evaluation__rating">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                </div>
            </div>
            <div class="article__options">
                <p class="article__options--title">Colors</p>
                <div class="article__options__choice">
                    <div class="article__options__choice_colors" v-for="item in oneProduct.color" >
                        <button class="article__options__choice--btn btncolors" :style="{'background-color': item}" @click="$emit('getColor', item)" ></button>
                    </div>
                </div>
                <p class="article__options--title">Selected: {{selectedProps.color}}</p>
            </div>
            <div class="article__options">
                <p class="article__options--title">Sizes</p>
                <div class="article__options__choice">
                    <div class="article__options__choice" v-for="item in oneProduct.size">
                        <button class="article__options__choice--btn btnsizes" @click="$emit('getSize', item)">{{item}}</button>
                    </div>
                </div>
                <p class="article__options--title">Selected: {{ selectedProps.size }}</p>
            </div>
            <div class="article__options">
                <p class="article__options--title">Description</p>
                <p class="article__options--txt">{{oneProduct.description}}</p>
            </div>
            <button class="article--cart" @click="$emit('putToBasket', oneProduct)">Click & Collect (Retrait en Magasin)</button>

        </div>

    </div>
</template>