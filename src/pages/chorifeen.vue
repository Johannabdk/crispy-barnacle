<template>
  <div class="chor_portfolio">
    <div class="hero">
      <div class="hero-image">
        <img src="@/assets/img/chorifeen1.jpg" alt="Bild von dem Chorprojekt X Chor" class="chor_image">
      </div>
      <div class="hero-text">
        <h1 class="chor-title">Chorifeen</h1>
      </div>
    </div>
    <div class="content">
      <div class="grid">
        <div class="grid-item">
          <p class="chor_text"> In dem Bremer Frauenchor singen rund 30 Frauen mit großer Begeisterung die unterschiedlichsten Stücke. <br>
            Kreativ und ideenreich glänzen die entstehenden Programme neben dem Gesang auch durch Witz und schauspielerische Einlagen. <br>
            Unter meiner Leitung entstanden wunderbare kurzweilige und überaus amüsante Programme:</p>
        </div>
      </div>
      <div class="poster-container">
        <div class="poster-box">
          <img src="@/assets/img/chorifeen_goes_Amerika.jpg" alt="Veranstaltungsposter" class="poster-image">
          <div class="poster-info">
            <h3>Chorifeen goes Amerika (2002)</h3>
            <p>Die Rahmengeschichte erzählte von zwei Schwestern, die voneinander nichts wussten, bis sie sich anlässlich einer Testamentseröffnung in Bremen zum ersten Mal begegneten. Sie entdeckten ihre gemeinsame Herkunft aus einer Familie mit einer amerikanischen und einer deutschen Linie. Nun begannen die Schwestern an Hand eines regen Briefwechsels, die gemeinsame und wechselvolle Familiengeschichte aufzurollen.</p>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="grid-item">
          <img src="@/assets/icon/clip-33.png" alt="Bild von dem Chorprojekt X Chor" class="chor_image">
        </div>
        <div class="grid-item">
          <p class="chor_info"> Wer Lust hat meldet sich bei mir! Geprobt wird mittwochs im Jugendfreizeitheim Findorff.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.chor_portfolio {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.hero {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.hero-image {
  flex-basis: 50%;
  margin-left: 20px;
  margin-right: 40px;
}

.chor_image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.hero-text {
  flex-basis: 40%;
  margin-left: 40px;
}

.chor-title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
}

.chor-title::after {
  content: "";
  display: block;
  width: 40px;
  height: 4px;
  background-color: #333;
  margin: 10px 0;
  border-radius: 2px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}

.grid-item {
  flex-basis: 50%;
  margin: 20px;
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
  height: auto;
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

.chor_text, .chor_info {
  font-size: 18px;
  color: #666;
  text-align: justify;
}

</style>