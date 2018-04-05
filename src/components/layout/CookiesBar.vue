<template>
    <div class="cookiesBar ">
        <div class="">
            <p class="">This site uses cookies to monitor and customize the browsing experience of users. By continuing to browse you authorize the use of cookies on this site. Read more here:
            
             </p>
             <div class="d-flex align-items-center">
                  <a href="//www.iubenda.com/privacy-policy/49158985" class="iubenda-white iubenda-embed" title="Privacy Policy">Privacy Policy</a>
            <button class="btn btn-cookies" @click="hideCookies">Accept</button>
             </div>
            
        </div>
        
        
    </div>
</template>

<script>
export default {
  methods: {
    hideCookies() {
      document.cookie =
        "cookies=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
      $(".cookiesBar").hide();
    }
  },
  mounted() {
      if (document.cookie.match(/cookies=1/gi)) {
        $(".cookiesBar").hide();
      }
  }
};
</script>

<style lang="scss">
.cookiesBar {
  background-color: rgba(253, 181, 43, 0.8);
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 25%;
  right: 25%;
  padding: 1em 4em;
  font-size: 12px;
  height: 80px;
  z-index: 9;
  .btn-cookies {
    padding: 3px 10px;
    font-size: 10px;
    color: rgba(253, 181, 43, 1);
    font-weight: bold;
    margin-left: 10px;
    background-color: #fff;
  }
  @media screen and (max-width: 992px) {
      left: 5%;
  right: 5%;
  height: 140px;
  }
}
</style>
