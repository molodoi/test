<template>
  <div id="template-main" style="">
    <header class="header"  :style="{'background-image': 'url(' + bgHeader + ')'}">
      <div class="container white-text">
        <br />
        <h2 class="bottom">
          <i class="large material-icons">card_travel</i> Vos séjours</h2>
        <p>
          Vous trouverez ci-dessous l'ensemble des séjours auxquels vous avez participé. Vous pouvez accéder aux informations supplémentaires
          en cliquant sur l'un d'entre eux.
        </p>
      </div>
    </header>
    <br />
    <div class="container" id="main">
      <div class="row">
        <div class="col s12">
          <ul class="collection">
            <li class="collection-item avatar">
              <a href="#/sejour/1/" class="collection-item-linkGL black-text">
                <!-- <img src="/static/logo-clc.png" class="circle responsive-img collection-imgGL"> -->
                <img src="~@/assets/img/logo-clc2.png" class="circle responsive-img collection-imgGL">
                <span class="title">Eloi Pasquelin</span>
                <p>Séjour Londres
                  <br> du 12/02/2017 au 18/02/2017
                </p>
                <span class="secondary-content">
                  <i class="material-icons GL-mauve-F">keyboard_arrow_right</i>
                </span>
              </a>
            </li>
            <li class="collection-item avatar">
              <a href="#/sejour/2/" class="collection-item-linkGL black-text">
                <!-- <img src="/static/logo-sej.png" class="circle responsive-img collection-imgGL"> -->
                <img src="~@/assets/img/logo-sej2.png" class="circle responsive-img collection-imgGL">
                <span class="title">Thomas Pasquelin</span>
                <p>Séjour Vichy
                  <br> du 26/06/2016 au 02/07/2016
                </p>
                <span class="secondary-content">
                  <i class="material-icons GL-mauve-F">keyboard_arrow_right</i>
                </span>
              </a>
            </li>
            <li class="collection-item avatar">
              <a href="#/sejour/3/" class="collection-item-linkGL black-text">
                <!-- <img src="/static/logo-sej.png" class="circle responsive-img collection-imgGL"> -->
                <img src="~@/assets/img/logo-sej2.png" class="circle responsive-img collection-imgGL">
                <span class="title">Eloi Pasquelin</span>
                <p>Séjour Vichy
                  <br> du 26/06/2016 au 02/07/2016
                </p>
                <span class="secondary-content">
                  <i class="material-icons GL-mauve-F">keyboard_arrow_right</i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sejour',
  data () {
    return {
      bgHeader: require('../assets/img/bg-sejours2.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header {
    height: 200px;
    /* background-image: url(/static/bg-sejours.jpg); */
    /* background-image: url(/static/img/bg-sejours2.jpg); */
    /* background-image: url(~@/assets/img/bg-sejours2.jpg); */
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  .header .material-icons {
    vertical-align: middle;
  }

  .collection .title {
    font-weight: bold;
  }

  .collection img {
    margin-top: 0vh;
    /* poussé de la moitié de hauteur de viewport */
    transform: translateY(15%);
  }

  .collection .material-icons {
    margin-top: 1vh;
    /* poussé de la moitié de hauteur de viewport */
    transform: translateY(15%);
  }
</style>
