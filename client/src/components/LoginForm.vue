<template>
	<v-layout justify-center align-center>
		<v-flex xs12 sm8 md4 class="elevation-5">
			<div>
				<v-toolbar flat dense dark class="black">
					<v-toolbar-title>Авторизация</v-toolbar-title>
				</v-toolbar>
				<div class="px-5 py-3">
					<v-text-field v-model="login" label="Логин">
					</v-text-field>
					<v-text-field :type="'password'" v-model="password" label="Пароль">
					</v-text-field>
					<v-btn @click="authorization" block dark class="black">
						Вход
					</v-btn>
				</div>
			</div>
		</v-flex>
	</v-layout>
</template>
<script>
	import Authentication from '@/services/Authentication'

	export default {
		data () {
			return {
				login: '',
				password: ''
			}
		},
		methods: {
			async authorization () {
				const response = await Authentication.authorize({
					login: this.login,
					password: this.password
				})
				if (response.status === 200) {
					this.$router.push('/panel')
				} else {
					alert('User not exists or password incorrect!')
				}
			}
		}
	}

</script>

<style>
</style>
