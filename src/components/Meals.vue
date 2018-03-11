<template>
  <div>
      {{currentUserId}}
      <ul class="listMeals">
          <li v-if="currentUser">
            <a href="#" class="" data-toggle="modal" data-target="#exampleModal"> Create Meal </a>
        </li>
        <li v-for="meal in getMeals">
              {{meal.title}}
        </li>
        
      </ul>
      
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
                                <option>Male</option>
                                <option>Female</option>
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
        userId: this.$store.getters.currentUserId,
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
      dbMealsRef.push(this.meal);
      dbUsersRef.child(this.$store.getters.currentUserId).child("meals").push(this.meal);
    }
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
  created() {
    //   var name = this.$store.getters.currentUser.displayName.substr(0, codeLine.indexOf(" "));
    //   this.meal.name = name;
    // console.log(name)
  }
};
</script>
<style lang="scss">

</style>


