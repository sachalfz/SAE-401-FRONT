<script>
  export default {
    data() {
      return {
        categories:
            [
                {id: 1, name: "Polos"}, 
                {id: 2, name: "Sneakers"}, 
                {id: 3, name: "Pants"}
            ]
      }
    }
}
</script>

<template>
    <header class="header">
      <img class="header--logo" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/croco.svg" alt="logo lacoste">
      <div class="header__icons">
          <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/profile.svg" alt="localisation">
          <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/favorite.svg" alt="favoris">
          <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/profile.svg" alt="profile">
          <img class="header__icons--img" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/bag.svg" alt="panier">
      </div>
    </header>

    <nav class="nav">
        <ul class="liste">
            <li v-for="item in categories">
                <div class="nav__cat">
                    <a href="./pages/polos.html" class="nav__cat--txt">{{ item.name }}</a>
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