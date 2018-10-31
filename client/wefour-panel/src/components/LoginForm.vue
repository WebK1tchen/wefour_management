<template>
  <html>
    <head>
      <title>Log In</title>
    </head>
    <body>
      <v-app>
        <v-layout justify-center align-center>
          <v-flex xs12 sm8 md4 class="elevation-5">
            <div>
              <v-toolbar flat dense dark class="black">
                <v-toolbar-title>Авторизация</v-toolbar-title>
              </v-toolbar>
              <div class="px-5 py-3">
                <v-text-field v-model="login" label="Логин">
                </v-text-field>
                <v-text-field v-model="password" label="Пароль">
                </v-text-field>
                <v-btn @click="authorizate" block dark class="black">
                  Вход
                </v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-app>
    </body>
  </html>
</template>
<script>
export default {
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    authorizate () {
      console.log(this.login, this.password)
    }
  }
}
</script>
<style>
</style>
