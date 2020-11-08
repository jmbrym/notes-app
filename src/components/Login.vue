<template>
  <div :class="$style.background">
    <div :class="$style.loginBody">
      <nav
        class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">
          <a
            class="navbar-brand float-left"
            style="
              color: rgb(56, 163, 213);
              font-size: 30px;
              font-weight: bolder;
              letter-spacing: 8px;
            "
          >
            NOTED
          </a>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="nav-link pr-3" to="/login"
                >Log in</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-primary" to="/"
                >Sign up</router-link
              >
            </li>
            <li class="nav-item">
              <top-header></top-header>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div :class="$style.formStyle">
      <form @submit.prevent="pressed">
        <h3>Log In</h3>

        <div class="form-group">
        
            <v-text-field
            v-model="email"
             label="Email"
            filled
            dense
          ></v-text-field>
          
        </div>

        <div class="form-group">
           <v-text-field
             v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            @click:append="show1 = !show1"
          ></v-text-field>
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">
          Log In
        </button>


      </form>
    </div>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { firebase } from "@firebase/app";
import "@firebase/auth";
import TopHeader from "./TopHeader";
import Vuetify from 'vuetify/lib'
import Vue from 'vue'
Vue.use(Vuetify)

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  components: { "top-header": TopHeader },

// takes the username and password for authentication to proceed to mynotes
  methods: {
    async pressed() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "mynotes" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style module>

.formStyle {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
  color: rgb(56, 163, 213);
  margin-top: 300px;
}

.loginBody {
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(red, yellow) !important; */
}
/* .background {
  background-image: linear-gradient(red, yellow);
} */
</style>