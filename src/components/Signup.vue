<template>
  <div>
    <div class="vue-tempalte">
      <nav
        class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
      >
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
      <div :class="$style.formStyle">
        <form @submit.prevent="pressed" style="color: rgb(56, 163, 213)">
          <h3>Sign Up</h3>

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
            Sign Up
          </button>


          <div v-if="error" class="error">{{ error.message }}></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@firebase/app";
import "@firebase/auth";
import Vue from 'vue'
import Vuetify from 'vuetify/lib'


import TopHeader from "./TopHeader";
Vue.use(Vuetify)
export default {
  components: { "top-header": TopHeader },
  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "mynotes" });
      } catch (err) {
        console.log(err);
      }
    },
  },

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
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
</style>