import { useRouter } from 'next/router';
import { deleteCookie, getCookie } from '@utils/clientSideCookies';
import axios from 'axios';
import { makeAutoObservable } from 'mobx'
import { User } from 'types/user'
import { getUser } from 'requests/auth';
import { Notify } from '@utils/common';

class Auth {
	isLoggedIn: boolean = false
	user: User | null = null

	constructor() {
		makeAutoObservable(this);
		this.getUserByToken();
	}

	getUserByToken = async () => {
		const token = getCookie('accessToken');
		if(token) {
			let res = await getUser();
			if (res?.statusCode === 200) {
				this.setIsLoggedIn(true);
				console.log('res.data:', res.data)
				this.setUser(res.data);
			} else {
				Notify(res?.message, 'error');
			}
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