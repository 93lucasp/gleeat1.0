<template>
  <div id="app">
    
      <vue-navBar></vue-navBar>
     
      <router-view></router-view>
  
      <vue-footer></vue-footer>
      <vue-cookies></vue-cookies>

  </div>
</template>

<script>
import NavBar from  './components/layout/NavBar.vue'
import Footer from  './components/layout/Footer.vue'
import CookiesBar from  './components/layout/CookiesBar.vue'
import { dbMealsRef} from  './firebaseConfig'
import { dbUsersRef} from  './firebaseConfig'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'vue-navBar': NavBar,
    'vue-footer': Footer,
    'vue-cookies': CookiesBar

  },
  created() {
    this.$store.dispatch('setMealsRef', dbMealsRef);
    this.$store.dispatch('setUsersRef', dbUsersRef);


  }
}
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100%;
  position: relative;
}
  .btn-primary {
    background-color: #FDB52B;
    outline: none;
    border: 0;
    position: relative;
    z-index: 1;
    border-radius: 0;
    padding: .6rem 1.95rem;
    &:hover,&:focus,&:active {
      background-color: #FDB52B!important;
      box-shadow: none!important;
    }
  }
  .text-gray {
    color: #737373;
  }
  p,h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  .bg-red {
    background-color: red;
  }
  .bg-green {
    background-color: green
  }
  .text-primary {
    
    color: #FDB52B!important;
  }
</style>
