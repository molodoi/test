<template>
<div id="home">
  <header class="header" :style="{'background-image': 'url(' + bgHeader + ')'}">
    <div class="container white-text">
      <br />
      <br />
      <h2>Bienvenue Christophe!</h2>
      <p>
        Accédez directement à l'ensemble de vos services Go&amp;Live.
      </p>
    </div>
  </header>
  <br />
  <div class="container" id="main">
    <div class="row">
      <div class="col s12 m6 l6 xl6">
        <router-link :to="{ name: 'Account' }" class="mycard white-text" id="mycard-account" :style="{'background-image': 'url(' + bgCardAccount + ')'}">
          <div>
            <div class="mycard-valign" >
              <span class="mycard-ico"><i class="material-icons">supervisor_account</i></span>
              <span class="mycard-title1">Votre Compte Go&amp;Live</span>
              <span class="mycard-title2">Solde de points, informations</span>
            </div>
          </div>
          <span class="right arrow-right"><i class="material-icons">keyboard_arrow_right</i></span>
        </router-link>
      </div>
      <div class="col s12 m6 l6 xl6">
        <router-link :to="{ name: 'Sejours' }" class="mycard white-text" id="mycard-sejours" :style="{'background-image': 'url(' + bgCardSejours + ')'}">
          <div>
            <div class="mycard-valign">
              <span class="mycard-ico"><i class="material-icons">card_travel</i></span>
              <span class="mycard-title1">Vos séjours</span>
              <span class="mycard-title2">Informations et documents de séjours</span>
            </div>
          </div>
          <span class="right arrow-right"><i class="material-icons">keyboard_arrow_right</i></span>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      bgHeader: require('../assets/img/bg-appli2.jpg'),
      bgCardAccount: require('../assets/img/bg-compte2.jpg'),
      bgCardSejours: require('../assets/img/bg-sejours2.jpg')
    }
  },
  mounted () {
    console.log('route', this.$router.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*#home{
  margin-top: -27px;
}*/

.header {
    height: 200px;
    /* background-image: url(~@/assets/img/bg-appli.jpg); */
    /* background-image: url(/static/bg-appli.jpg); */
    /* background-image: url(/static/img/bg-appli2.jpg); */
    /* background-image: url(~@/assets/img/bg-appli2.jpg); */
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}

.mycard{
  width: 100%;
  min-height:250px;
  padding: 20px 10px;
  display: inline-block;
}

#mycard-account {
  width: 100%;
  height: 100%;
  /* background-image: url(~@/assets/img/bg-compte.jpg); */
  /* background-image: url(/static/bg-compte.jpg); */
  /* background-image: url(/static/img/bg-compte2.jpg); */
  /* background-image: url(~@/assets/img/bg-compte2.jpg); */
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

#mycard-sejours {
  /* background-image: url(~@/assets/img/bg-sejours.jpg); */
  /* background-image: url(/static/bg-sejours.jpg); */
  /* background-image: url(/static/img/bg-sejours2.jpg); */
  /* background-image: url(~@/assets/img/bg-sejours2.jpg); */
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.mycard-valign{
  margin-top: 8vh; /* poussé de la moitié de hauteur de viewport */
  transform: translateY(0%);
}

.mycard-ico, .mycard-title1, .mycard-title2 {
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    font-size:20px;
}

.arrow-right{
  margin: 50px 0 0px 0;
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
  #mycard-sejours {
    margin-top: 15px;
  }
}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
  #mycard-sejours {
    margin-top: 15px;
  }
}

/* Custom, iPhone Retina */
@media only screen and (max-width : 320px) {
  #mycard-sejours {
    margin-top: 15px;
  }
}

</style>
