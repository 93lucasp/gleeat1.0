<template>
  <header>
    <nav class="navbar navBar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="/"><img src="../../assets/logo-full.svg" class="logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" v-if="!currentUser">
          <li class="nav-item" >
              <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModalLong">Login</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModalS">Signup</a>
          </li>
        
        </ul>
        <ul class="navbar-nav ml-auto" v-else>
            <li class="nav-item" >
              <a class="nav-link" href="#">{{currentUser.displayName}}</a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" href="#" @click.prevent="signOut">Signout</a>
            </li> 
        </ul>
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
                            <label>Name</label>
                            <input type="text" class="form-control" id="signupName" placeholder="enter name" required>
                        </div>
                        <div class="form-group">
                            <label>Surname</label>
                            <input type="text" class="form-control" id="signupSurname" placeholder="enter surname" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" id="signupEmail" placeholder="enter email" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="signupPassword1" required>
                        </div>
                        <div class="form-group">
                            <label>Password confermation</label>
                            <input type="password" class="form-control" id="signupPassword2" required>
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
            swal({
              title: "Wrong password!",
              text: "Your password is wrong, try again!",
              icon: "error",
              button: "Ok"
            });
          } else if (errorCode === "auth/user-not-found") {
            swal({
              title: "Wrong email!",
              text: "Your email is wrong, try again!",
              icon: "error",
              button: "Ok"
            });
          } else {
            swal({
              title: "Something went wrong!",
              text:
                "Try again later, if you will still haave problem contact us!",
              icon: "error",
              button: "Ok"
            });
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
      var surname = document.getElementById("signupSurname").value;
      var name = document.getElementById("signupName").value;
      var email = document.getElementById("signupEmail").value;
      var password1 = document.getElementById("signupPassword1").value;
      var password2 = document.getElementById("signupPassword2").value;
      if (password1 === password2) {
        Firebase.auth()
          .createUserWithEmailAndPassword(email, password1)
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
      } else {
        swal({
          title: "Passwords don't match!",
          text:
            "The passwords don't corrispond, you need to insert the same password",
          icon: "error",
          button: "Ok"
        });
      }
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

<style lang="scss">
.navBar {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  .logo {
    width: 150px;
  }
  ul {
    margin: 0;

    li {
      list-style: none;
      a {
        color: #fdb52b;
      }
    }
  }
}
</style>
