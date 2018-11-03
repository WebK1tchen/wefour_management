<template>
  <html>

  <head>
    <title>WeFour Panel - Main page</title>
  </head>

  <body>
    <v-app overflow-hidden>
      <v-layout>
        <v-toolbar dark>
          <v-toolbar-title>Panel start page</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
              <router-link to="/">Authorization</router-link>
            </v-btn>
            <v-btn flat>
              <router-link to="/Brief">Brief</router-link>
            </v-btn>
            <v-btn flat>Smth else</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-layout>
    </v-app>
  </body>

  </html>
</template>
<script>
/* eslint-disable */
  export default {
    data() {
      return {
        message: ''
      }
    }
  }

</script>
<style scoped>
</style>
