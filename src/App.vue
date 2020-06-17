<template>
  <div id="app">
    <TheNavBar />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/layout/TheFooter.vue';
import TheNavBar from '@/components/layout/TheNavBar.vue';
export default {
  components: {
    TheNavBar,
    TheFooter
  }
};
</script>

<style lang="scss">
// * RESET CSS

#app {
  animation: fadeIn 1s ease-in-out;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  height: 100%;
  width: 100%;
}

body {
  box-sizing: border-box;
  font-size: 1.8rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  background-color: $color-bg;
  color: #fff;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

a:not(:visited) {
  color: inherit;
}

router-link {
  color: inherit;
  text-decoration: none;
}

// * TYPOGRAPHY
.title {
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.title-sub {
  font-size: 2rem;
  font-weight: 600;
  color: #000;
}

.paragraph-sub {
  color: $color-black-soft;
}

// * LAYOUT

.container {
  max-width: 120rem;
  margin: 0 auto;
}

// * ANIMATIONS

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeInFast {
  animation: fadeIn 0.5s ease-in;
}

.fadeInSlow {
  animation: fadeIn 1.5s ease;
}
</style>
