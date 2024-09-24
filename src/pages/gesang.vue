<template>
  <div class="gesang_portfolio">
    <div class="hero">
      <div class="hero-image">
        <img src="@/assets/icon/clip-33.png" alt="Bild von dem Gesangprojekt" class="gesang_image">
      </div>
      <div class="hero-text">
        <h1 class="gesang-title">Gesang</h1>
      </div>
    </div>
    <div class="content">
      <div class="grid">
        <div class="grid-item">
          <h2 class="gesang-subtitle">Gesang</h2>
          <p class="gesang_text">Man kann seine Stimme nur entfalten, wenn man sich geborgen fühlt. Ich gebe jedem die Möglichkeit, den eigenen, individuellen Stil zu entwickeln.</p>
          <p class="gesang_text">Die Beziehungen zwischen der Stimme, dem Atemrhythmus und dem Körper, zwischen der persönlichen Stimmung und den eigenen Ausdrucksmöglichkeiten werden mittels verschiedener Lieder und Übungen kontinuierlich entwickelt.</p>
          <p class="gesang_text">Gesungen wird, was Spaß macht! Der eigenen Kreativität sind keine Grenzen gesetzt. Die Liebe zur Musik soll sich frei entwickeln.</p>
        </div>
        <div class="grid-item">
          <img src="@/assets/icon/clip-33.png" alt="Bild von dem Gesangprojekt" class="gesang_image">
        </div>
      </div>
      <div class="grid">
        <div class="grid-item">
          <h2 class="gesang-subtitle">Stimmbildung</h2>
          <p class="gesang_text">Ich biete Stimmbildung für kleine und große Gruppen, für Ensembles und Chöre an.</p>
          <p class="gesang_text">Dabei werden anhand lebendiger Methoden und vielseitiger Übungen sowohl die einzelne Stimme gestärkt als auch der Zusammenklang bewusst wahrgenommen und verbessert.</p>
          <p class="gesang_text">Den individuellen Klang einer jeden Gruppe herauszubilden, ist besonderes Anliegen meines Stimmbildungsunterrichtes.</p>
        </div>
        <div class="grid-item">
          <img src="@/assets/icon/clip-33.png" alt="Bild von dem Gesangprojekt" class="gesang_image">
        </div>
      </div>
      <div class="grid">
        <div class="grid-item">
          <h2 class="gesang-subtitle">Coaching</h2>
          <p class="gesang_text">Ich begleite Ensembles und biete meine Unterstützung sowohl in den Phasen der Proben als auch bei Auftritten an.</p>
          <p class="gesang_text">Das Erarbeiten von neuem Material, das Zusammenstellen von Programmen und die Organisation von Auftritten wird von mir unterstützt.</p>
          <p class="gesang_text">Choreographische Aspekte sind dabei fester Bestandteil der Zusammenarbeit.</p>
        </div>
        <div class="grid-item">
          <img src="@/assets/icon/clip-33.png" alt="Bild von dem Gesangprojekt" class="gesang_image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gesang',
};
</script>

<style scoped>

.gesang_portfolio {
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

.gesang_image {
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

.gesang-title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
}

.gesang-title::after {
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

.gesang-subtitle {
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 10px;
}

.gesang_text {
  font-size: 18px;
  color: #666;
  text-align: justify;
  margin-bottom: 20px;
}

</style>
 