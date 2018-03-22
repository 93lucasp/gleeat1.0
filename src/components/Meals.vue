<template>
  <div style="min-height: 100vh" class="py-5">
      

      <div class="container">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h2>Meals</h2>
            <a href="javascript:void(0)"  @click="checkMeal()" v-if="currentUser"> Create Meal </a>
          </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-lg-4" v-for="meal in getMeals">
                <div class="meal">
                    <div v-if="currentUser">
                        <div v-if="currentUser.uid == meal.userId">
                            <a href="javascript:void(0)" class="openOptions" @click="optionsOpen = !optionsOpen" v-show="optionsOpen"><i class="fas fa-chevron-down"></i></a>
                            <a href="javascript:void(0)" class="openOptions" @click="optionsOpen = !optionsOpen" v-show="!optionsOpen"><i class="fas fa-chevron-up"></i></a>
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-show="optionsOpen">
                            <div class="meal__options" v-if="currentUser.uid == meal.userId">
                                <div  class=" d-flex align-items-center justify-content-between">
                                    
                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal2" @click="setMealId(meal['.key'],meal)" class="text-primary">Update</a>
                                    <a href="javascript:void(0)" @click="removeMeal(meal['.key'])" class="text-danger" >remove</a>
                                    <label class="switch" >
                                        <input type="checkbox" checked v-if="meal.status==true" @change=" changeStatus(false,meal['.key'])">
                                        <input type="checkbox" checked v-else @change=" changeStatus(true,meal['.key'])">
                                        <span class="slider round"></span>
                                    </label>
                                
                                </div>
                            </div>
                        </div>
                        </transition>
                    <div class="d-flex justify-content-between">
                        <h5 class="meal__title">{{meal.title}}</h5>
                        <div class="status" :class="{ 'bg-green': meal.status, 'bg-red': !meal.status}"></div> 
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <div>
                            <p class="meal__label">Name</p>
                            <p class="meal__name">{{meal.name}}</p>
                        </div>
                        <div>
                            <p class="meal__label">Gender</p>
                            <p class="meal__gender"> {{meal.gender}}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <p class="meal__label">Country</p>
                            <p class="meal__county">{{meal.country}}</p>
                        </div>
                        <div>
                            <p class="meal__label">Language</p>
                            <p class="meal__language"> {{meal.language}}</p>
                        </div>
                        
                    </div>
                    <div class="meal__footer" v-if="!currentUser">
                        <a href="javascript:void(0)" class="btn btn-primary w-100" @click.prevent="popUpNotLogged">Call</a>
                    </div>
                    <div class="meal__footer" v-if="currentUser">
                        <a :href="'skype:'+ meal.skype +'?call'" class="btn btn-primary w-100">Call</a>
                    </div>
                </div>
                
                
            </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="meal.title">
                        </div>
                        <div class="form-group">
                            <label>Country</label>
                            <input type="text" class="form-control" v-model="meal.country">
                        </div>
                        <div class="form-group">
                            <label>Language</label>
                            <input type="text" class="form-control" v-model="meal.language">
                        </div>
                        <div class="form-group">
                            <label>Gender</label>
                            <select class="form-control" v-model="meal.gender">
                                <option></option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Skype name</label>
                            <input type="text" class="form-control" v-model="meal.skype">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="updateMeal()">Update a meal</button>
                </div>
                </div>
            </div>
        </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="meal.title">
                        </div>
                        <div class="form-group">
                            <label>Country</label>
                            <input type="text" class="form-control" v-model="meal.country">
                        </div>
                        <div class="form-group">
                            <label>Language</label>
                            <input type="text" class="form-control" v-model="meal.language">
                        </div>
                        <div class="form-group">
                            <label>Gender</label>
                            <select class="form-control" v-model="meal.gender">
                                <option></option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Skype name</label>
                            <input type="text" class="form-control"  v-model="meal.skype">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="addNewMeal">Create a meal</button>
                </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import Firebase from "firebase";
import { mapGetters } from "vuex";
import { dbMealsRef } from "../firebaseConfig";
import { dbUsersRef } from "../firebaseConfig";
export default {
  data() {
    return {
      meal: {
        userId: "",
        name: "",
        country: "",
        language: "",
        title: "",
        language: "",
        gender: "",
        skype: "",
        createdAt: "",
        status: ""
      },
      idMeal: "",
      optionsOpen: false
    };
  },
  methods: {
    openOptions(el) {
      console.log(el.nextElementSibling());
    },
    changeStatus(val, id) {
      this.meal.status = val;
      this.idMeal = id;
      console.log(val);
      console.log(id);
      dbMealsRef
        .child(this.idMeal)
        .child("status")
        .set(this.meal.status);
    },
    checkMeal() {
      var currentUserId = this.$store.getters.currentUser.uid;

      //   console.log(
      //     dbUsersRef.child(this.$store.getters.currentUserId).child("meals")
      //   );

      //   var ref = irebase.database().ref("users/ada");
      dbUsersRef
        .child(currentUserId)
        .child("meals")
        .once("value")
        .then(function(snapshot) {
          var meal = snapshot.val(); // "ada"
          if (meal === 1) {
            swal({
              title: "You have already an active meal!",
              text: "Remove the previus meal before to create a new one !",
              icon: "error",
              button: "Ok"
            });
          } else {
            $("#exampleModal").modal("show");
          }
        });
      //   for(var i = 0; i < users.length; i++) {
      //       console.log("useer:",users[i]['.key']);
      //       console.log("currentUssr:",currentUserId);
      //   }
    },
    addNewMeal() {
      this.meal.userId = this.$store.getters.currentUser.uid;
      this.meal.name = this.$store.getters.currentUser.displayName;
      this.meal.status = true;
      var date = new Date();
      this.meal.createdAt = new Date().toISOString();
      console.log(typeof date);
      dbMealsRef.push(this.meal);

      dbUsersRef
        .child(this.$store.getters.currentUserId)
        .child("meals")
        .set(1);
    },
    setMealId(id, meal) {
      delete meal[".key"];

      this.idMeal = id;
      this.meal = meal;
      console.log(this.meal);
      console.log(this.idMeal);
    },
    updateMeal() {
      dbMealsRef.child(this.idMeal).update(this.meal);
    },
    removeMeal(key) {
      dbUsersRef
        .child(this.$store.getters.currentUserId)
        .child("meals")
        .remove();
      dbMealsRef.child(key).remove();
    },
    popUpNotLogged() {
      swal({
        title: "Need to be logged!",
        text: "You need to signin before to call!",
        icon: "warning",
        button: "Ok"
      });
    }
  },
  computed: {
    ...mapGetters(["getMeals"]),
    users() {
      return this.$store.getters.getUsers;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
    currentUserId() {
      return this.$store.getters.currentUserId;
    }
  },
  beforeMount() {
    var newDate = new Date().toISOString();
    var threeHours = 60 * 60 * 3000;

    dbMealsRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();

        if (new Date(newDate) - new Date(childData.createdAt) > threeHours) {
          dbMealsRef.child(key).remove();
          dbUsersRef
            .child(childData.userId)
            .child("meals")
            .remove();
        } else {
          console.log("false");
        }
      });
    });
  }
};
</script>
<style lang="scss">
.meal {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 2em;
  margin-top: 1em;
  padding: 20px 10px;
  color: #737373;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  &__title {
    padding-bottom: 4px;
    border-bottom: 2px solid #fdb52b;
    margin-bottom: 15px;
  }
  &__label {
    font-size: 9px;
    font-weight: 300;
    color: #fdb52b;
  }
  &__options {
    position: absolute;
    top: -42px;
    left: 0;
    right: 0;
    padding: 10px;
    z-index: 1;
    background-color: #f2f2f2;
    border-radius: 4px;
  }
  .openOptions {
    background: #fdb52b;
    color: #fff;
    width: 20px;
    height: 16px;
    border-radius: 0 0 4px 4px;
    position: absolute;
    right: 10px;
    top: 0;
    text-align: center;
    z-index: 3;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;
  margin: 0;
  input {
    display: none;
    &:checked,
    &:focus {
      + .slider {
        background-color: green;
        &:before {
          -webkit-transform: translateX(19px);
          -ms-transform: translateX(19px);
          transform: translateX(19px);
        }
      }
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: red;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &.round {
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 3px;

      bottom: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
}
.status {
  width: 25px;
  height: 25px;
  border-radius: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


