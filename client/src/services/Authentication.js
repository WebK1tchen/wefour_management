import Api from '@/services/Api'

export default {
	authorize (credentials) {
		return Api().post('/login', credentials)
	}
}
