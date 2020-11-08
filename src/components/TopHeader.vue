<template>
  <div style="margin-left: 11px;margin-top: 8px;">
    Logged in :
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
  </div>
</template>

<script>
import { firebase } from "@firebase/app";
import "@firebase/auth";
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
       if(user){
           this.loggedIn = true;
       }else{
           this.logged = false;
       }
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>

</style>