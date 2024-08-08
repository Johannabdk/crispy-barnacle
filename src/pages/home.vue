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
      <!-- Slider text box
      <div class="slider-textbox">
        <span class="name">kirsten</span>
        <span class="surname">BODENDIECK</span>
      </div>-->
    </div>
    <div id="title-space">
      <!-- Website title -->
      <h1 class="website-title">Willkommen!</h1>
    </div>
    <div class="portfolio-container">
      <div class="image-text-container">
        <img src="@/assets/img/portfolio2.jpg" alt="Bild von Kirsten Bodendieck" class="portfolio-image">
        <img src="@/assets/icon/macaroni-playing-music.png" alt="PNG Image von zwei tanzenden Personen" class="upper-corner-image">
        <img src="@/assets/icon/lounge-background-green.png" alt="PNG Image von einem grünen Fleck" class="lower-corner-image">
        <div class="text-box">
          <p class="portfolio-text">Seit meiner Kindheit begleitet und verzaubert mich die Musik. <br><br> 
            Gerne möchte ich mit meiner Musik andere Menschen zum Musizieren animieren. Blöckflöten- und Klavierspiel, Gesang alleine oder im Chor - Es gibt nichts Schöneres!<br><br>
            Seit 1989 stehe ich als Chorleiterin vor verschiedenen Ensembles und Chören, aktuell leite ich die Chorifeen, sing n smile und das Chorprojekt X. <br><br>
            Ich bin langjähriges Mitglied des Deutschen Tonkünstlerverbandes. Seit März 2016 bin ich Vorsitzende des KreisChorVerbandes Bremen. </p>
        </div>
      </div>
    </div>
    <div class="service-container">
      <div class="service-top">
        <img src="@/assets/icon/transistor-tree-musical-notes.png" alt="Illustration von ein paar Noten" class="service-image-bottom-left">
        <div class="service">
          <h3>Musik mit einem Instrument</h3>
          <p>Unterricht für Kinder und Erwachsene. <br><br>
            Ich heiße Anfänger <em>und</em> Fortgeschrittene willkommen.</p>
          <ul>
            <li><a @click="updatePage('blockfloete')">Blockflöte</a></li>
            <li><a @click="updatePage('klavier')">Klavier</a></li>
          </ul>
        </div>
      </div>
      <div class="service-bottom">
        <div class="service">
          <h3>Musik mit der Stimme</h3>
          <p>Im Einzelunterricht die Stimme entwickeln, gemeinsam in einer Gruppe singen oder sich als Ensemble unterstützen lassen.</p>
          <ul>
            <li><a @click="updatePage('gesang')">Gesang</a></li>
            <li><a @click="updatePage('stimmbildung')">Simmbildung</a></li>
            <li><a @click="updatePage('coaching')">Coaching</a></li>
          </ul>
        </div>
        <img src="@/assets/icon/transistor-tree-musical-notes.png" alt="Illustration von ein paar Noten." class="service-image-upper-right">
      </div>
    </div>
    <div>
      <p id="disclaimer">Der restliche Part ist noch in Arbeit! Vorstellung: Nochmal ein Bild Element mit Text und/oder dem Zitat; Aktuelle Veranstaltungen noch interessanter!</p>
    </div>
    <div class="quote-container">
        <blockquote class="fancy-quote">
          <p>"The only thing better than singing is more singing!"</p>
          <cite>- Ella Fitzgerald</cite>
        </blockquote>
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
        { src: pianoexample, alt: 'Bild von Klaviertasten und einem Notenblatt' },
        { src: sliderimg2, alt: 'Image 3' }
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

/* text box on slider
.slider-textbox {
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
  font-size: 42px;
  font-weight: bold;
  color: #000000;
  text-align: right;
}

.slider-textbox .name {
  display: block;
  margin-bottom: 5px;
}

.slider-textbox .surname {
  display: block;
}*/

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

.portfolio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0px 20px 0px;
}

.image-text-container {
  position: relative;
}

.portfolio-image {
  width: 400px;
  height: auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.upper-corner-image {
  position: absolute;
  top: -65px;
  right: -470px;
  width: 300px;
  height: auto;
  overflow: visible;
}

.lower-corner-image {
  position: absolute;
  bottom: -50px;
  left: -100px;
  width: 300px;
  height: auto;
  z-index: -1;
  overflow: visible;
}

.text-box {
  position: absolute;
  top: 30%;
  right: -90%;
  transform: translateY(-20%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  border-radius: 10px;
}

.portfolio-text {
  font-size: 20px;
  font-weight: 200;
}

#services {
  margin-top: 50px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.service-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* adjust the height to your needs */
}

.service {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.service-top {
  transform: translate(-100px, -25px);
  z-index: 1;
}

.service-bottom {
  transform: translate(150px, 25px);
}

.service h3 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.service p {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.service ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service li {
  margin-bottom: 10px;
}

.service a {
  text-decoration: none;
  color: #337ab7;
}

.service a:hover {
  color: #23527c;
  cursor: pointer;
}

.service-image-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  transform: translate(-50px, 85px);
  width: 150px;
  height: auto;
  pointer-events: none; 
}

.service-image-upper-right {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transform: translate(50px, -25px);
  width: 200px;
  height: auto;
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