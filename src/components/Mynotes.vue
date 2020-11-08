<template>
  <div>
    <div>
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
              letter-spacing: 8px;">
            NOTED
          </a>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="nav-link pr-3" to="/mynotes"
                >My Notes</router-link
              >
            </li>
            <div class="nav-item">
              <button
                class="btn btn-outline-primary router-link-active"
                @click="signOut"
              >
                Sign out
              </button>
            </div>

            <div>
              <v-avatar
             color="primary"
              size="39"
              ></v-avatar>
            </div>
          </ul>
        </div>
      </nav>
    </div>
      <div class="formStyle">
           <div class="title" style="
              color: rgb(56, 163, 213);
              font-size: 30px;
              font-weight: bolder;
              letter-spacing: 8px;">MY NOTES
            </div>
               
        <v-form>
         <v-container>
          <v-row>
           <v-col cols="12" sm="6">
             <v-text-field 
                v-model="myTodo" 

                single-line
                
             ></v-text-field>
             
             
           </v-col>

             <v-col cols="12" sm="6">

                    <v-btn class="btn btn-outline-primary router-link-active"  @click="addToDo" or @keyup="addToDo">
              <v-icon  >mdi-plus-thick</v-icon>
            </v-btn>
            
        </v-col>
       

           <div style="font-size: large; text-transform: capitalize" v-for="item in this.$store.getters.getItems" :key="item.id">
              <input type="checkbox" style="margin-right: 15px;" id="checkbox">{{ item.title }}

              <v-btn  style="margin-left: 50px;"  @click="deleteItem(item.id)"> 
                <v-icon color="orange" >mdi-close-thick</v-icon></v-btn>

                 
           </div>
                  


      </v-row>
    </v-container>
  </v-form>
            

            
            <div v-if="errors !== ''" id="errors">{{ errors }}</div>
            <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">

 
     
   </div>

  </div>
  </div>


</template>

<script>
// import Avatar from "vue-avatar";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { db } from '@/main'
import  {mdiDelete} from '@mdi/js'

Vue.use(Vuetify)

export default {
   name: 'home',
    beforeCreate: function () {
    this.$store.dispatch('setItems')
  },
    data: function () {
    return {
      myTodo: '',
      errors: '',
      icons: {mdiDelete},
      ex4: ['success'],
    }
  },
    
  // // components: {
  // //   Avatar,
  

  // },
  methods: {
    // signout method
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    },
  // adds items when button + is used
    addToDo: function () {
       this.errors = ''
        if (this.myTodo !== '') {
         db.collection('items').add({
         title: this.myTodo,
           created_at: Date.now()
            }).then((response) => {
           if (response) {
            this.myTodo = ''
    }
  }).catch((error) => {
    this.errors = error
  })
} else {
  this.errors = 'Please enter some text'
}
},
// deletes the item listed
    deleteItem: function (id) {
      if (id) {
        db.collection("items").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            this.errors = error
        })
      } else {
        this.error = 'Invalid ID'
      }
    },
    
  }
}
  
  
  


  
   
   
  




  



</script>

<style>
.nav-item {
  padding-top: 6px;
}
.avatarStyle {
  margin-left: 20px;
}
.content {
  margin-top: 100px;
}

.formStyle {
  width: 500px;
 
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
  color: rgb(56, 163, 213);
  margin-top: 300px;
}

.v-text-field{
      width: 400px;
}
</style>

