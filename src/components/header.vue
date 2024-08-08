<template>
  <header class="navbar">
    <a class="nav-link" @click="updatePage('home')">Home</a>
    <div class="dropdown">
      <button class="dropbtn">Chöre</button>
      <div class="dropdown-content">
        <a class="dropdown-item" @click="updatePage('chor_projekt_x')">Chorprojekt X</a>
        <a class="dropdown-item" @click="updatePage('chorifeen')">Chorifeen</a>
        <a class="dropdown-item" @click="updatePage('sing_n_smile')">sing n smile</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Stimme</button>
      <div class="dropdown-content">
        <a class="dropdown-item" @click="updatePage('gesang')">Gesang</a>
        <a class="dropdown-item" @click="updatePage('stimmbildung')">Stimmbildung</a>
        <a class="dropdown-item" @click="updatePage('coaching')">Coaching</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Instrumente</button>
      <div class="dropdown-content">
        <a class="dropdown-item" @click="updatePage('klavier')">Klavier</a>
        <a class="dropdown-item" @click="updatePage('blockfloete')">Blockflöte</a>
      </div>
    </div>
    <a class="dropdown-item" @click="updatePage('aktuelles')">Aktuelles</a>
    <a class="dropdown-item" @click="updatePage('kontakt')">Kontakt</a>
    <span class="username">kirsten BODENDIECK</span>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    updatePage(page) {
    this.$emit('update-page', page);
    },
  }
};
</script>

<style scoped>
.navbar {
  background-color: #f3f3f3;
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  margin-bottom: 0;
}

.navbar a, .dropbtn {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #ddd;
  color: black;
}

.dropdown {
  float: left;
  position: relative;
  overflow: visible;
}

.dropdown .dropbtn {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 100%;
  left: 0;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.navbar button, .navbar a {
  /* font size */
  font-size: 18px;
}

.navbar a {
  cursor: pointer;
}

.navbar a:active {
  /* background color on click */
  background-color: #ccc;
  color: #333;
}

.username {
  float: right;
  margin-right: 30px;
  margin-top: 10px;
  font-size: 22px;
  color: #000000;
}
</style>