<template>
  <div id="template-main">
    <header class="header" :style="{'background-image': 'url(' + bgCompte + ')'}">
      <div class="container white-text"><br />
        <h2 class="bottom">
          <i class="large material-icons">supervisor_account</i>Votre compte Go&amp;Live
        </h2>
        <p>Vous trouverez ci-dessous l'ensemble des informations relatives à votre compte, ainsi que le décompte de vos points.</p>
      </div>
    </header>
    <br />
    <div class="container" id="main">
      <div class="row">
        <div class="col s12">
          <h1>Informations sur le titulaire de la carte</h1>
        </div>
        <div class="col s12 m12 l6 xl6">
          <img class="responsive-img" src="~@/assets/img/cartes-go-live2.png">
        </div>
        <div class="col s12 m12 l6 xl6">
          <p style="GL-noir-F">
            <strong>Carte SILVER n° 15165821164</strong><br>
            <small>(fin de validité le 08/09/2016)</small><br>
            <strong>Titulaire : </strong> Mr CHRISTOPHE PASQUELIN<br>
            <strong>Votre numéro de carte : </strong>113092310332<br>
            <strong>Votre email : </strong>ch.pasquelin@yahoo.fr<br>
            <strong>Votre adresse : </strong>
            250 CHEMIN DE CREMOULIN<br>
            PAELISSIER<br>
            26300 CHATUZANGE LE GOUBET<br>
            <strong>Votre téléphone : </strong>05.05.06.07.08
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h1>Votre solde de points: 1500</h1>
          <p><strong>Votre solde de points est valide jusqu'au 31/12/2018.</strong></p>
          <p style="GL-noir-F">Vous trouverez ci-dessous l'ensemble des actions qui ont amené un crédit ou un débit de points.</p>
          <table class="striped">
            <thead>
              <tr>
                <th>Date de l'événement</th>
                <th>Libelle</th>
                <th>Bénéficiaire</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>07/07/2016</td>
                <td>POINTS FIDELITE</td>
                <td>ALEXIS FRICTION</td>
                <td class="ptsCredits" style="text-align:right">500</td>
              </tr>
              <tr>
                <td>07/07/2016</td>
                <td>POINTS FIDELITE</td>
                <td>ALICE FRICTION</td>
                <td class="ptsCredits" style="text-align:right">500</td>
              </tr>
              <tr>
                <td>20/04/2016</td>
                <td>POINTS FIDELITE</td>
                <td>MORGANE FRICTION</td>
                <td class="ptsCredits" style="text-align:right">500</td>
              </tr>
              <tr>
                <td>25/01/2016</td>
                <td>PAIEMENT CARTE FIDELITE</td>
                <td>ALICE FRICTION</td>
                <td class="ptsDebits" style="text-align:right">-500</td>
              </tr>
              <tr>
                <td>23/04/2015</td>
                <td>POINTS FIDELITE</td>
                <td>MORGANE FRICTION</td>
                <td class="ptsCredits" style="text-align:right">500</td>
              </tr>
              <tr>
                <td>10/10/2014</td>
                <td>PAIEMENT CARTE FIDELITE</td>
                <td>MORGANE FRICTION</td>
                <td class="ptsDebits" style="text-align:right">-1000</td>
              </tr>
              <tr>
                <td>14/04/2014</td>
                <td>POINTS FIDELITE</td>
                <td>ARIANE FRICTION</td>
                <td class="ptsCredits" style="text-align:right">500</td>
              </tr>
              <tr>
                <td>28/10/2013</td>
                <td>POINTS FIDELITE</td>
                <td>ARIANE FRICTION</td>
                <td class="ptsCredits" style="text-align:right">500</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" style="text-align:right">Solde : </td>
                <td class="ptsCredits" style="text-align:right">1500</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      bgCompte: require('../assets/img/bg-compte2.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
height: 200px;
/* background-image: url(~@/assets/img/bg-compte2.jpg); */
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: cover;
}

.header .material-icons{
vertical-align: middle;
}

@media (max-width: 629px) {

#share {
margin-top:35px;
}

#share a {
width: 34px;
height: 34px;
font-size: 14px;
margin: 10px 0px 0px;
}

.header > h2{
font-size: 12px!important;
}
}
</style>
