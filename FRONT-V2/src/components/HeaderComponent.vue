<script>
  export default {
        props: {
            categories : {
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
    <header class="header">
      <router-link to="/home" @click="$emit('getAllProducts')"><img class="header--logo" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/croco.svg" alt="logo lacoste"></router-link>
      <div class="header__icons">
          <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/localisation.svg" alt="localisation">
          <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/favorite.svg" alt="favoris">
          <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/profile.svg" alt="profile">
          <router-link to="/panier"> <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/bag.svg" alt="panier"> </router-link>
      </div>
    </header>

    <nav class="nav">
        <ul class="liste">
            <li v-for="item in categories">
                <div class="nav__cat">
                    <router-link :to="'/category/'+ item.name" @click="$emit('getOneCategory', item)" class="nav__cat--txt">{{ item.name }}</router-link>
                </div>
            </li>
        </ul>
    </nav>
</template>

<style>
    .liste{
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
</style>