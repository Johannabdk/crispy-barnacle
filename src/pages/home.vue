<template>
  <div class="home-page">
    <div class="relative max-w-full mx-auto shadow-md overflow-hidden h-1/2">
      <!-- Slider container -->
      <div class="flex relative h-full w-full overflow-hidden">
        <!-- Slider images -->
        <div class="w-full h-full" v-for="(image, index) in images" :key="index" :class="{ 'hidden': currentIndex !== index + 1 }">
          <img class="w-full h-[500px] object-cover animation-fade-in duration-1000" :src="image.src" :alt="image.alt">
        </div>
      </div>
      <!-- Image slider buttons -->
      <div class="absolute z-10 top-1/2 transform -translate-y-1/2 w-full flex justify-between">
        <a class="cursor-pointer px-4 py-4 text-white font-bold text-lg transition duration-600 ease-in-out bg-gray-800 opacity-60 hover:bg-gray-700" @click="prevSlide">&#10094;</a>
        <a class="cursor-pointer px-4 py-4 text-white font-bold text-lg transition duration-600 ease-in-out bg-gray-800 opacity-60 hover:bg-gray-700" @click="nextSlide">&#10095;</a>
      </div>
      <!-- Image slider dots -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <span class="cursor-pointer h-4 w-4 mx-1 bg-gray-300 rounded-full inline-block transition duration-600 ease-in-out" v-for="(image, index) in images" :key="index" @click="currentSlide(index + 1)" :class="{ 'bg-gray-600': currentIndex === index + 1 }"></span>
      </div>
    </div>
    <div id="title-space" class="mt-14 text-center">
      <h1 class="text-6xl font-extrabold text-gray-800 tracking-wide mb-2">Willkommen!</h1>
    </div>
    <div class="portfolio-container flex justify-center items-center min-h-screen py-20">
      <div class="image-text-container flex relative max-w-4xl mx-auto justify-center items-center">
        <img src="@/assets/img/portfolio2.jpg" alt="Bild von Frau" class="portfolio-image w-96 h-120 rounded-lg shadow-md object-cover ml-[-30px]">
        <div class="text-box relative h-fit w-auto max-h-300px px-5 py-5 ml-[-30px] sm:ml-[-20px] bg-white bg-opacity-90 shadow-md rounded-lg justify-center w-3/4">
          <img src="@/assets/icon/taxi-461.png" alt="Bild von Notenschlüssel" class="absolute top-[-50px] right-[-25px] w-24 transform rotate-15 z-[-1] hidden lg:block">
          <p class="portfolio-text text-base sm:text-lg font-light leading-relaxed">Seit meiner Kindheit begleitet und verzaubert mich die Musik. <br><br> 
            Gerne möchte ich mit meiner Musik andere Menschen zum Musizieren animieren. Blöckflöten- und Klavierspiel, Gesang alleine oder im Chor - Es gibt nichts Schöneres!<br><br>
            Seit 1989 stehe ich als Chorleiterin vor verschiedenen Ensembles und Chören, aktuell leite ich die Chorifeen, sing n smile und das Chorprojekt X. <br><br>
            Ich bin langjähriges Mitglied des Deutschen Tonkünstlerverbandes. Seit März 2016 bin ich Vorsitzende des KreisChorVerbandes Bremen. </p>
        </div>
      </div>
    </div>
    <!-- Angebote -->
    <div id="services">
      <div class="service-container flex flex-col items-center justify-center h-screen relative py-20 mx-auto max-w-2xl">
        <div class="flex flex-col flex-1 w-full md:w-3/4 xl:w-2/3">
          <div class="service-top mb-5 flex-1 mx-4 md:mx-6 xl:mx-8"> 
            <div class="service bg-white p-5 rounded-lg shadow-md relative h-full">
              <h3 class="text-lg font-bold text-gray-600 mb-3">Musik mit einem Instrument</h3>
              <p class="text-base text-gray-600 mb-5">Unterricht für Kinder und Erwachsene. <br><br>
                Ich heiße Anfänger <em>und</em> Fortgeschrittene willkommen.</p>
              <ul class="list-none p-0 m-0">
                <li class="mb-3"><a @click="updatePage('blockfloete')" class="text-blue-600 hover:text-blue-800">Blockflöte</a></li>
                <li class="mb-3"><a @click="updatePage('klavier')" class="text-blue-600 hover:text-blue-800">Klavier</a></li>
              </ul>
            </div>
          </div>
          <div class="service-bottom mt-5 flex-1 mx-4 md:mx-6 xl:mx-8"> 
            <div class="service bg-white p-5 rounded-lg shadow-md relative h-full">
              <h3 class="text-lg font-bold text-gray-600 mb-3">Musik mit der Stimme</h3>
              <p class="text-base text-gray-600 mb-5">Im Einzelunterricht die Stimme entwickeln, gemeinsam in einer Gruppe singen oder sich als Ensemble unterstützen lassen.</p>
              <ul class="list-none p-0 m-0">
                <li class="mb-3"><a @click="updatePage('gesang')" class="text-blue-600 hover:text-blue-800">Gesang</a></li>
                <li class="mb-3"><a @click="updatePage('stimmbildung')" class="text-blue-600 hover:text-blue-800">Stimmbildung</a></li>
                <li class="mb-3"><a @click="updatePage('coaching')" class="text-blue-600 hover:text-blue-800">Coaching</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--TODO-->
  </div>
</template>

<script>
import sliderimg1 from '../assets/img/sliderimg1.jpg';
import pianoexample from '../assets/img/pianoexample.jpg';
import sliderimg2 from '../assets/img/sliderimg2.jpg';

export default {
  name: 'Home',
  data() {
    return {
      images: [
        { src: sliderimg1, alt: 'Portrait von Kirsten Bodendieck' },
        { src: pianoexample, alt: 'Bild von Klaviertasten und einem Notenblatt.' },
        { src: sliderimg2, alt: 'Bild von Kirsten Bodendieck beim Dirigieren.' }
      ],
      currentIndex: 1
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex = this.currentIndex - 1 < 1 ? this.images.length : this.currentIndex - 1
    },
    nextSlide() {
      this.currentIndex = this.currentIndex + 1 > this.images.length ? 1 : this.currentIndex + 1
    },
    currentSlide(index) {
      this.currentIndex = index
    },
    updatePage(page) {
    this.$emit('update-page', page);
    },
  }
}
</script>

<style scoped>

@media (max-width: 768px) {
  .image-text-container {
    flex-direction: column;
  }
  .portfolio-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 0;
  }
  .text-box {
    margin: 0 auto;
    text-align: center;
    margin-top: -20px;
  }
}

</style>