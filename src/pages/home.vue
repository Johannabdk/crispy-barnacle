<template>
  <div class="home-page">
    <div class="slider">
      <!-- The slider images -->
      <div class="slide" v-for="(image, index) in images" :key="index" :class="{ active: currentIndex === index + 1 }">
        <img :src="image.src" :alt="image.alt">
      </div>
      <!-- The dots navigation -->
      <div class="dots">
        <span class="dot" v-for="(image, index) in images" :key="index" @click="currentSlide(index + 1)" :class="{ active: currentIndex === index + 1 }"></span>
      </div>
      <!-- The navigation buttons -->
      <a class="prev" @click="prevSlide">&#10094;</a>
      <a class="next" @click="nextSlide">&#10095;</a>
    </div>
    <div id="title-space">
      <!-- Website title -->
      <h1 class="website-title">Musik</h1>
    </div>
    <div class="image-text-container">
      <img src="@/assets/img/portfolio2.jpg" alt="Bild von Kirsten Bodendieck" class="image">
      <p class="lorem-text">... erleben, erlernen, ausüben, genießen Musik mit anderen Menschen zusammen zu erleben, gehört für mich zu den schönsten Dingen der Welt. Die Musik ist von jeher Bestandteil meines Lebens. Ich möchte die Freude, die ich an ihr habe, gerne mit Ihnen teilen. <br><br> Möchten Sie oder Ihr Kind ein Instrument erlernen? <br> Wollten Sie schon immer einmal nach Herzenslust singen? <br><br> Ich lade Sie ein, diese Dinge mit mir zusammen zu tun und sich eine vielfältige und lebensfrohe Welt zu erschließen. <br><br> <em>Herzlich Willkommen!</em></p>
    </div>
    <div>
      <blockquote class="fancy-quote">
        <p>"The greatest glory in living lies not in never falling, but in rising every time we fall."</p>
        <cite>- Nelson Mandela</cite>
      </blockquote>
    </div>
    <div class="image-text-container">
      <p class="second-lorem-text">Seit meiner Kindheit begleitet und verzaubert mich die Musik. Ich begann mit Blockflöten- und Klavierspiel und erlag dann als Jugendliche im Chor einer Kirchengemeinde der Faszination des gemeinschaftlichen Singens. In zahlreichen Seminaren und Kursen habe ich das musikalische Handwerkszeug von der Pike auf gelernt und meine Fähigkeiten kontinuierlich verfeinert. <br><br> 
        Von 1999 bis 2007 habe ich eine Lehrtätigkeit als Dozentin an der Fachhochschule für Kunsttherapie, Kunstpädagogik und Freie Bildende Kunst in Ottersberg, im Fachbereich Darstellende Kunst, ausgeübt. <br><br> CVT Zertifikation für Chorleitung an der Popakademie Witten.<br><br>
        Seit 1989 stehe ich als Chorleiterin vor verschiedenen Ensembles und Chören. Dazu zählten:<br>
        Das Bremer Chor Kollektiv, Shosholoza, Terzattacke, Forensik-MitarbeiterInnen- Chor, Crossing Voices (mehr) und notabene (mehr). Aktuell leite ich die Chorifeen, sing n smile und das Chorprojekt X.</p>
      <img src="@/assets/img/portfolio1.jpg" alt="Portrait von Kirsten Bodendieck" class="image">
    </div>
    <div class="h2-container">
      <h2>Lust auf aktuelle Veranstaltungen?</h2>
    </div>
    <div class="poster-container">
      <div class="poster-box">
        <img src="@/assets/img/chorplakat1.png" alt="Poster" class="poster-image">
        <div class="poster-info">
          <h3>Sing!</h3>
          <p>Diese Box würde ich gerne etwas größer machen und mit einer Art Slider versehen wo man zwischen den verschiedenen aktuellen Veranstaltungen hin und her wechseln kann. Außerdem wäre hier dann noch eine Verlinkung zur Aktuelles Seite</p>
        </div>
      </div>
    </div>
    <div>
      <p id="disclaimer">Hier kommen nochmal meine eigenen Vorhaben für die Homepage: Styling Elemente (damit, es etwas spannender aussieht), Mobil-Port und kleiner Bildschirm Port, Angepasste Farben und verbesserter Bild-Slider (Diashow mäßig) &#129300;</p>
    </div>
  </div>
</template>

<script>
import sliderimg1 from '../assets/img/sliderimg1.jpg';
import pianoexample from '../assets/img/pianoexample.jpg';
import sliderimg3 from '../assets/img/notenExample.jpg';

export default {
  name: 'Home',
  data() {
    return {
      images: [
        { src: sliderimg3, alt: 'Image 1' },
        { src: sliderimg1, alt: 'Image 2' },
        { src: pianoexample, alt: 'Image 3' }
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
    }
  }
}
</script>

<style scoped>

/* Slider container styles */
.slider-container {
  position: relative;
  margin: 0 auto;
  padding-top: 0;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Slider styles */
.slider {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

/* Slider image styles */
.slide {
  display: none;
  border: none;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border: none;
  display: block;
  margin: 0;
  padding: 0;
}

/* Navigation button styles */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  padding: 16px;
  margin-top: 0;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.prev {
  left: 10px; 
}

.next {
  right: 10px; 
}


.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Dots navigation styles */
.dots {
  text-align: center;
  position: absolute;
  top: 94%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot:hover {
  background-color: #717171;
}

.dot.active {
  background-color: #717171;
}

#title-space {
  margin-top: 55px;
  text-align: center;
}

.website-title {
  font-size: 62px;
  font-weight: 800;
  color: #212121;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.website-title::after {
  content: "";
  display: block;
  width: 30px;
  height: 3px;
  background-color: #212121;
  margin: 15px auto;
  border-radius: 5px;
}

.image-text-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px 200px 10px 200px;
}

.image {
  width: 500px;
  height: 500px;
  margin: 50px 50px 50px 50px;
  border-radius: 10px;
}

.lorem-text {
  margin: 50px;
  text-align: block;
  font-size: 22px;
}

.second-lorem-text {
  margin: 50px;
  text-align: block;
  font-size: 22px
}

.fancy-quote {
  font-size: 24px;
  font-style: italic;
  color: #333;
  padding: 20px;
  border-left: 4px solid #ccc;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}

.fancy-quote cite {
  font-size: 18px;
  color: #666;
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

.image-text-container .lorem-text {
  margin-left: 100px;
}

.image-text-container .second-lorem-text {
  margin-right: 100px;
}

.h2-container {
  margin-left: 100px;
  margin-bottom: 100px;
}

.h2-container h2 {
  font-size: 40px;
  font-weight: 800;
  color: #212121;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-align: left;
}

.poster-container {
  margin-top: 20px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}

.poster-box {
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  width: 800px;
}

.poster-image {
  width: 300px; 
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.poster-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.poster-info h3 {
  font-size: 24px;
  font-weight: 700;
  color: #212121;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.poster-info p {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

#disclaimer {
  margin: 50px;
  text-align: center;
}

</style>