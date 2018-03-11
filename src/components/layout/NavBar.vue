<template>
  <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
            <a class="navbar-brand" href="/">Logo</a>
            <div class="text-right" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item" v-if="!currentUser">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModalLong">Login</a>
                    </li>
                    <li class="nav-item" v-if="!currentUser">
                       <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModalS">Signup</a>
                    </li>
                    <li class="nav-item" v-if="currentUser">
                       <a class="nav-link" href="#">{{currentUser.displayName}}</a>
                    </li>
                    <li class="nav-item" v-if="currentUser">
                       <a class="nav-link" href="#" @click.prevent="signOut">Signout</a>
                    </li>
                   
                </ul>
                </div>
            </div>
        </nav>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label>name</label>
                            <input type="email" class="form-control" id="email" placeholder="enter email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="signIn">Sign in</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="loginFacebook">Facebook</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="loginGoogle">Google</button>
                </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalS" tabindex="-1" role="dialog" aria-labelledby="exampleModalSTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>Nome</label>
                                <input type="text" class="form-control" id="nameS" placeholder="enter name">
                            </div>
                            <div class="form-group">
                                <label>Cognome</label>
                                <input type="text" class="form-control" id="cognomeS" placeholder="enter surname">
                            </div>
                            <div class="form-group">
                                <label>email</label>
                                <input type="email" class="form-control" id="emailS" placeholder="enter email">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" id="passwordS">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="signUp">Sign up</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="loginFacebook">Facebook</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="loginGoogle">Google</button>
                    </div>
                </div>
            </div>
        </div>
  </header>
</template>

<script>
import Firebase from "firebase";
import { store } from "../../store/store.js";
import { dbUsersRef } from "../../firebaseConfig";

Firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});
var providerFacebook = new Firebase.auth.FacebookAuthProvider();
var providerGoogle = new Firebase.auth.GoogleAuthProvider();
export default {
  methods: {
    signIn() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    loginGoogle() {
      Firebase.auth()
        .signInWithPopup(providerGoogle)
        .then(function(result) {
          var user = result.user;
          var userInfo = {
            name: user.displayName,
            email: user.email,
            social: true
          };
          dbUsersRef.child(result.user.uid).set(userInfo);
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log("error code:", errorCode);
          console.log("error message:", errorMessage);
          console.log("error email:", email);
          console.log("error credential:", credential);
        });
    },

    loginFacebook() {
      Firebase.auth()
        .signInWithPopup(providerFacebook)
        .then(function(result) {
          var user = result.user;
          var userInfo = {
            name: user.displayName,
            email: user.email,
            social: true
          };
          dbUsersRef.child(result.user.uid).set(userInfo);
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log("error code:", errorCode);
          console.log("error message:", errorMessage);
          console.log("error email:", email);
          console.log("error credential:", credential);
        });
    },
    signUp() {
      var surname = document.getElementById("cognomeS").value;
      var name = document.getElementById("nameS").value;
      var email = document.getElementById("emailS").value;
      var password = document.getElementById("passwordS").value;

      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          function(user) {
            
            user
              .updateProfile({
                displayName: name + " " + surname
              })
              .then(
                function() {
                  var userInfo = {
                    name: user.displayName,
                    email: user.email,
                    social: false
                  };
                  dbUsersRef.child(user.uid).set(userInfo);
                },
                function(error) {
                  console.log(error);
                }
              );
          },
          function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
          }
        );
    },
    signOut() {
      Firebase.auth()
        .signOut()
        .then(function() {})
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

