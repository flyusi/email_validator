<template>
  <div id="app">
    <Header />
    <Carousel />
    <wiki />
    <Email />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import wiki from './components/wiki.vue'
import Email from './components/Email.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    wiki,
    Email,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
