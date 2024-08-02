<template>
  <div class="app-container">
    <Header @update-page="updatePage" />
    <main class="main-content">
      <!-- Use v-if with currentPage variable -->
      <Home v-if="currentPage === 'home'" />
      <ChorprojektX v-if="currentPage === 'chor_projekt_x'" />
      <Chorifeen v-if="currentPage === 'chorifeen'" />
      <SingnSmile v-if="currentPage === 'sing_n_smile'" />
      <Gesang v-if="currentPage === 'gesang'" />
      <Stimmbildung v-if="currentPage === 'stimmbildung'" />
      <Coaching v-if="currentPage === 'coaching'" />
      <Klavier v-if="currentPage === 'klavier'" />
      <Blockfloete v-if="currentPage === 'blockfloete'" />
      <Aktuelles v-if="currentPage === 'aktuelles'" />
      <Kontakt v-if="currentPage === 'kontakt'" />
      <Impressum v-if="currentPage === 'impressum'" />
    </main>
    <Footer @update-page="updatePage" />
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  import Home from "./pages/home.vue";
  import ChorprojektX from "./pages/chor_projekt_x.vue";
  import Chorifeen from "./pages/chorifeen.vue";
  import SingnSmile from "./pages/sing_n_smile.vue";
  import Gesang from "./pages/gesang.vue";
  import Stimmbildung from "./pages/stimmbildung.vue";
  import Coaching from "./pages/coaching.vue";
  import Klavier from "./pages/klavier.vue";
  import Blockfloete from "./pages/blockfloete.vue";
  import Aktuelles from "./pages/aktuelles.vue";
  import Kontakt from "./pages/kontakt.vue";
  import Impressum from "./pages/impressum.vue";

  export default {
    components: { Header, Footer, Home, ChorprojektX, 
      Chorifeen, SingnSmile, Gesang, Stimmbildung, 
      Coaching, Klavier, Blockfloete, Aktuelles, 
      Kontakt, Impressum },
    data() {
      return {
        // default page
        currentPage: 'home'
      }
    },
    methods: {
      updatePage(page) {
      this.currentPage = page;
      }
    },
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Frutiger', sans-serif; 
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    padding-top: 45px;
  }
</style>