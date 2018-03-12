<template>
  <div style="min-height: 100vh" class="py-5">
      <div class="container">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 >Meals</h2>
            <a href="#" class="" data-toggle="modal" data-target="#exampleModal" v-if="currentUser"> Create Meal </a>
          </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-lg-4" v-for="meal in getMeals">
                <div class="meal">
                    <h5 class="meal__title">
                       
                        {{meal.title}}
                        <!-- {{meal['.key']}} -->
                    </h5>
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
                <div class="options" v-if="currentUser.uid == meal.userId">
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal2" @click="setMealId(meal['.key'],meal)">Update</a>
                    <a href="javascript:void(0)" @click="removeMeal(meal['.key'])">remove</a>
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
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="updateMeal()">Create a meal</button>
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
        skype: ""
      },
      idMeal: ''
    };
  },
  methods: {
    addNewMeal() {
      this.meal.userId = this.$store.getters.currentUser.uid;
      this.meal.name = this.$store.getters.currentUser.displayName;
      dbMealsRef.push(this.meal);
      dbUsersRef
        .child(this.$store.getters.currentUserId)
        .child("meals")
        .push(this.meal);
    },
    setMealId(id,meal) {
        delete meal['.key']; 
        
        this.idMeal = id;
        this.meal = meal
        console.log(this.meal)
        console.log(this.idMeal)
    },
    updateMeal() {
        dbUsersRef
        .child(this.$store.getters.currentUserId)
        .child("meals")
        .child(this.idMeal)
        .update(this.meal);
      dbMealsRef.child(this.idMeal).update(this.meal);
    },
    removeMeal(key) {
        dbUsersRef
        .child(this.$store.getters.currentUserId)
        .child("meals")
        .child(this.idMeal)
       .remove();
      dbMealsRef
        .child(key)
        .remove();
    },
    popUpNotLogged() {
      swal({
        title: "Need to be logged!",
        text: "You need to signin before to call!",
        icon: "warning",
        button: "Ok"
      });
    },
    
  },
  computed: {
    ...mapGetters(["getMeals"]),
    currentUser() {
      return this.$store.getters.currentUser;
    },
    currentUserId() {
      return this.$store.getters.currentUserId;
    }
  },
  created() {}
};
</script>
<style lang="scss">
.meal {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 2em;
  padding: 10px;
  color: #737373;
  font-size: 13px;
  font-weight: 500;
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
}
</style>


