<template>
<div>
    <div class="hero d-flex align-items-center justify-centent-center">
    <div class="container text-center">
      <a href=""></a>
      <router-link to="/meals" class="btn btn-primary">DISCOVER</router-link>
  </div>
</div>
<div class="container py-5 text-gray">
    <h2 class="mb-4 text-center ">How it works</h2>
    <div class="row">
        <div class="col-lg-4">
            <div class="text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                    <i class="fas fa-eye"></i>
                </div>
                <p>Choose with who to eat(Gender,country,language)</p>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                    <i class="fab fa-skype"></i>
                </div>
                <p>Video call through <br> Skype</p>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                   <i class="fas fa-utensils"></i>
                </div>
                <p>Have a nice talk during <br> your meal</p>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="container py-5 text-gray">
    <h2 class="mb-4 text-center ">Why to use</h2>
    <div class="row">
        <div class="col-lg-5 mx-auto text-center">
            <p>Studies say that eating together is healthy, so why don't you that in a video call?</p>
            <p>It's also an opportunity to meet new people!</p>
        </div>
    </div>
</div>
    
</div>

  
</template>
<style lang="scss">
.hero {
  width: 100%;
  height: 500px;
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    background-color: rgba(8, 8, 8, 0.4);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
.icon {
    color: #FDB52B;
    background-color: #f2f2f2;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin: 0 auto 15px;;
    svg {
        font-size: 26px;
    }
}
</style>
