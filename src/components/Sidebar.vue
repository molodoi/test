<template>
  <div class="sidebar">
    <ul id="slide-out" class="side-nav right-aligned">
      <li class="center"><img  src="~@/assets/img/logo-goandlive2.png" alt="" id="navbar-slide-out-logo"></li>
      <li>
        <router-link :to="{ name: 'Home' }">
          <i class="material-icons left">home</i>Accueil
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Account' }" class="waves-effect waves-light">
          <i class="material-icons left">supervisor_account</i>Votre compte
        </router-link>
      <li>
        <router-link :to="{ name: 'Sejours' }" class="waves-effect waves-light">
          <i class="material-icons left">card_travel</i>Vos sejours
        </router-link>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <router-link :to="{ name: 'Auth' }" class="waves-effect waves-light">
          <i class="material-icons left">lock_open</i>Se déconnecter
        </router-link>
      </li>
    </ul>

    <div class="navbar-fixed">
      <nav class="black">
        <div class="container">
          <router-link :to="{ name: 'Home' }"  class="left" id="nav-linkBack" v-if="$route.name != 'Home'">
            <i class="material-icons">keyboard_arrow_left</i>
          </router-link>
          <router-link :to="{ name: 'Home' }" class="brand-logo center">
            <img src="~@/assets/img/logo-goandlive2.png" id="navbar-logo" class="responsive-img valign center"> <span class="hide-on-small-only">Go&amp;Live</span>
          </router-link>
          <a href="#" data-activates="slide-out" class="button-collapse right" >
            <i class="material-icons left">menu</i>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data () {
    return {

    }
  },
  mounted () {
    /* eslint-disable */
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav .brand-logo.center {
    left: 50%;
    transform: translateX(-50%);
}

#nav-linkBack{
  height: 64px;
  line-height: 64px;
  margin-top: 0.2vh; /* poussé de la moitié de hauteur de viewport */
  transform: translateY(0%);
}

#navbar-logo {
  height: 34px;
  vertical-align: text-bottom;
}

#navbar-slide-out-logo{
  height:40px;
  margin-top:10px;
}

.button-collapse{
  display:block;
}
</style>
