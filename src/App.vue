<template>
  <div id="app">
    
      <vue-navBar></vue-navBar>
     <div class="container">
      <router-view></router-view>
    </div>
     <div class="container">
      <vue-footer></vue-footer>
    </div>
  </div>
</template>

<script>
import NavBar from  './components/layout/NavBar.vue'
import Footer from  './components/layout/Footer.vue'
import { dbMealsRef} from  './firebaseConfig'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'vue-navBar': NavBar,
    'vue-footer': Footer,

  },
  created() {
    this.$store.dispatch('setMealsRef', dbMealsRef);


  }
}
</script>

<style lang="scss">
</style>
