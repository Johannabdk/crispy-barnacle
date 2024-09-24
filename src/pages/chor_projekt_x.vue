<template>
  <div class="x_portfolio">
    <div class="x_hero">
      <div class="x_hero-text">
        <h1 class="x_title">Chorprojekt X</h1>
      </div>
      <div class="x_hero-image">
        <img src="@/assets/img/chorprojektx.jpg" alt="Bild von dem Chorprojekt X Chor" class="x_image">
      </div>
    </div>
    <div class="x_content">
      <div class="x_text-box">
        <p class="x_text"> Wir sind ein Chor aus erfahrenen SängerInnen und haben Spaß an ungewöhnlichen Arrangements, vor allem 
          aus dem Bereich "Crossover(X)": Genreübergreifende Musik, gewürzt mit einer Prise Pop und Jazz. 
          Darüberhinaus singen wir alles was sonst noch Spaß macht.</p>
      </div>
      <div class="x_image-box">
        <img src="@/assets/icon/clip-33.png" alt="Bild von dem Chorprojekt X Chor" class="x_image">
      </div>
      <div class="x_text-box">
        <p class="x_info"> Unsere Proben finden 14tägig am Dienstag statt und wir treten gerne auch ab und zu auf. Weitere Infos gebe ich gerne!<br><br>
          Wir wünschen uns aktuell noch Tenor und Bassunterstützung und haben außerdem Platz im Sopran 2 und auch im Alt 2!<br><br>
          Bewerbt euch sehr gerne bei mir: musik(at)kirstenbodendieck.de</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.x_portfolio {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.x_hero {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
}

.x_hero-text {
  flex-basis: 40%;
  margin-right: 20px;
}

.x_hero-image {
  flex-basis: 60%;
}

.x_title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-top: 0;
  text-align: left;
}

.x_title::after {
  content: "";
  display: block;
  width: 40px;
  height: 4px;
  background-color: #333;
  margin: 10px 0;
  border-radius: 2px;
}

.x_image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.x_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}

.x_text-box {
  flex-basis: 50%;
  margin: 20px;
  padding: 20px;
}

.x_image-box {
  flex-basis: 50%;
  margin: 20px;
}

.x_text, .x_info {
  font-size: 18px;
  color: #666;
  text-align: justify;
}

.x_text-box:nth-child(odd) {
  margin-right: 40px;
}

.x_image-box:nth-child(even) {
  margin-left: 40px;
}
</style>