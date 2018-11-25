<template>
 <v-app overflow-hidden>
  <v-container fluid pa-0>
   <v-layout>
    <v-flex xs12>
     <v-toolbar dark>
      <v-toolbar-title>WEFOUR || Управление</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
       <v-btn flat>
        Клиенты
       </v-btn>
       <v-btn flat>
         <router-link to="/Panel">Задачи</router-link>
       </v-btn>
       <v-btn flat>
        <router-link to="/Payments">Платежи</router-link>
       </v-btn>
       <v-btn flat>
        <router-link to="/Users">Пользователи</router-link>
       </v-btn>
       <v-btn flat>
        <router-link to="/Brief">Бриф</router-link>
       </v-btn>
       <v-btn flat>Smth else</v-btn>
      </v-toolbar-items>
     </v-toolbar>
    </v-flex>
   </v-layout>
   <router-view />
  </v-container>
 </v-app>
</template>

<script>
 export default {
  name: 'App'
 }

</script>

<style>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 }

</style>
