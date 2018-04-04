<template>
<div>
    <div class="hero d-flex align-items-center justify-centent-center">
   
        <div class="boxCta">
            <h1>Enjoy your next meal</h1>
            <router-link to="/meals" class="btn btn-primary">DISCOVER</router-link>
        </div>
      
      
 
</div>
<div class="container py-5 text-gray">
    <h2 class="mb-4 text-center">How it works</h2>
    <div class="row ">
        <div class="col-lg-4 mt-4">
            <div class="text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                    <i class="fas fa-list"></i>
                </div>
                <p>Choose with who to eat(Gender,country,language)</p>
            </div>
        </div>
        <div class="col-lg-4 mt-4">
            <div class="text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                    <i class="fab fa-skype"></i>
                </div>
                <p>Video call through <br> Skype</p>
            </div>
        </div>
        <div class="col-lg-4 mt-4">
            <div class="text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                   <i class="fas fa-utensils"></i>
                </div>
                <p>Enjoy your <br> meal</p>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="container py-5 text-gray">
    <h2 class="mb-4 text-center ">FAQ</h2>
    <div class="row">
        <div class="col-lg-10 mx-auto">
            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Is Gleeat a free service?
                        </button>
                    </h5>
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Yes, absolutely! Gleeat has been created for a social goal and for a specific mission!
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is a meal?
                        </button>
                    </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        A meal is a kind of post where you put some information and after everybody if interested could call you.
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Who can create a meal or make a call?
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        Just registered can create a meal and the same is for the call!
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Why Skype?
                        </button>
                    </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        Because it was easy to implement a video call sistem with it. But we are studying and working on create ourown call sistem.
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        My meal will be only on the platform?
                        </button>
                    </h5>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                        No you can manage your meal as you prefer (update,delete,put busy status and so on).
                        Your meal will authomatically removed after 3 hours
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        What about scammers?
                        </button>
                    </h5>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div class="card-body">
                        We think that the video call on Gleeat are very targeted and the spirit of the community is to have a nice dinner or lunch with other people. But we can't guarantee you that who will call will be fine, so in case will be your task block on skype the user and report to us the user and we will provide to remove him from the platform.
                    </div>
                    </div>
                </div>
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
  .boxCta {
    padding: 2em;
    height: 200px;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 3px solid #fff;
    z-index: 2;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    h1 {
      font-size: 2rem;
      margin-bottom: 1em;
    }
    .btn {
      font-weight: bold;
    }
  }
}
.card {
  border-radius: 0;
  border: 0;
  .card-header {
    background-color: #fff;
    border-radius: 0;
    padding: 0;
    border-bottom: 0;
  }

  .btn-link {
    color: #fdb52b;
    width: 100%;
    text-align: left;
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    border: 2px solid #fdb52b;
    border-radius: 0;
    &.collapsed {
      border-bottom: 0;
    }
  }
  &:last-child {
    .btn-link {
      &:last-child {
        &.collapsed {
          border-bottom: 2px solid #fdb52b;
        }
      }
    }
  }
}
.icon {
  color: #fdb52b;
  background-color: #f2f2f2;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  svg {
    font-size: 26px;
  }
}
</style>
