import { useRouter } from 'next/router';
import { deleteCookie, getCookie } from '@utils/clientSideCookies';
import axios from 'axios';
import { makeAutoObservable } from 'mobx'
import { User } from 'types/user'

class Auth {
	isLoggedIn: boolean = false
	user: User | null = null

	constructor() {
		makeAutoObservable(this);
		this.getUserByToken();
	}

	getUserByToken = async ()=> {
		const token = getCookie('accessToken');
		if(token) {
			await axios.get('/api/auth/user')
				.then(res => {
					console.log('res:', res)
					this.setIsLoggedIn(true);
					this.setUser(res.data.user);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}

	setUser = (user:User) => {
		this.user = user;
	}

	setIsLoggedIn = (state: boolean) => {
		this.isLoggedIn = state;
	}

	logout = ()=> {
		this.isLoggedIn = false;
		this.user = null;
		deleteCookie('accessToken');
	}

}

const AuthStore = new Auth()
export default AuthStore