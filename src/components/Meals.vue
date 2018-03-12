<template>
  <div style="min-height: 100vh">
      <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <h2>Meals</h2>
            <a href="#" class="" data-toggle="modal" data-target="#exampleModal" v-if="currentUser"> Create Meal </a>
          </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-lg-4" v-for="meal in getMeals">
                <div class="meal">
                    <h4 class="meal__title">
                        {{meal.title}}
                    </h4>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="meal__name">{{meal.name}}</p>
                        <span class="meal__gender"> {{meal.gender}}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="meal__county">{{meal.country}}</p>
                        <span class="meal__language"> {{meal.language}}</span>
                    </div>
                    <div class="meal__footer">
                        <a :href="'skype:'+ meal.skype +'?call'">Call</a>
                    </div>
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
                            <input type="text" class="form-control" id="nameCity" v-model="meal.skype">
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
      }
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

    }
  },
  computed: {
    ...mapGetters(["getMeals"]),
    currentUser() {
      return this.$store.getters.currentUser;
    },
    currentUserId() {
        return this.$store.getters.currentUserId
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
  &__title {
    padding-bottom: 4px;
    border-bottom: 2px solid #fdb52b;
    color: #737373;
    margin-bottom: 15px;
  }
}
</style>


