<template>
<div id="auth" :style="{'background-image': 'url(' + bgAppli + ')'}">
  <div  class="container">
    <div class="row">
      <div class="col s12 m4 offset-m4">
        <div class="card-panel box-shadow">
          <form>
            <div class="row">
              <div class="valign-wrapper">
                  <div class="input-field col s12">
                      <img src="~@/assets/img/logo-goandlive2.png" alt="" id="auth-logo" class="responsive-img valign"><br /><br />
                      <p class="center">Leader de la formation personnelle</p>
                  </div>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">person_outline</i>
                <input id="username" type="text">
                <label for="username">Login ou n° de carte</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">lock_outline</i>
                <input id="password" type="text">
                <label for="password">Mot de passe ou email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Se souvenir de moi</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <router-link :to="{ name: 'Home' }"  id="auth-btLogin" class="btn waves-effect waves-light col s12">
                  Login
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <p class="center-align">
                  <a href="#faq" class="GL-cyan-F modal-trigger" id="auth-linkOpenFAQ">Je n'arrive pas à me connecter</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Auth',
  data () {
    return {
      bgAppli: require('../assets/img/bg-appli2.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#app, body, html {
    background-color: #63c7c5!important;
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {

}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

}

/* Custom, iPhone Retina */
@media only screen and (max-width : 320px) {
    #app, body, html {
        background-color: #63c7c5!important;
    }
}

.clearfix{
    clear: both;
}

#auth {
    height: 100%;
    width: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: #63c7c5;
}

.valign-wrapper .valign {
    display: block;
}

#auth-logo {
    width: 50%;
    margin: auto;
}

#auth, .header--home {
    /* background-image: url(~@/assets/img/bg-appli2.jpg); */
}

#auth-divLogin {
    width: 350px;
}
.card-panel{
  margin-top: 15%;
  box-shadow: 0 16px 28px 0 rgba(0,0,0,.22), 0 25px 55px 0 rgba(0,0,0,.21);
}

</style>
