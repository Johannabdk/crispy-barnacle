<template>
  <div class="contact_portfolio">
    <div class="hero">
      <div class="hero-image">
        <img src="@/assets/icon/clip-33.png" alt="Bild von Kontakt" class="contact_image">
      </div>
      <div class="hero-text">
        <h1 class="contact-title">Kontakt</h1>
      </div>
    </div>
    <div class="content">
      <div class="grid">
        <div class="grid-item">
          <h2 class="contact-subtitle">Kontaktinformationen</h2>
          <p class="contact_text">Hier können Sie mich erreichen:</p>
          <p class="contact_text">Kirsten Bodendieck</p>
          <p class="contact_text">Email: info(at)kirstenbodendieck.de</p>
          <p class="contact_text">Telefon: 04 21 | 2 77 61 50</p>
        </div>
        <div class="grid-item">
          <img src="@/assets/icon/clip-33.png" alt="Bild von Kontakt" class="contact_image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.contact_portfolio {
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

.contact_image {
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

.contact-title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
}

.contact-title::after {
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

.contact-subtitle {
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 10px;
}

.contact_text {
  font-size: 18px;
  color: #666;
  text-align: justify;
  margin-bottom: 20px;
}
</style>