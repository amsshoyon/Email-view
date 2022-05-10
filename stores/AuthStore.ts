import { deleteCookie, getCookie } from '@utils/clientSideCookies';
import { makeAutoObservable } from 'mobx'
import { User } from 'types/user'
import { getUser } from 'requests/auth';

class Auth {
	isLoggedIn: boolean = false
	user: User | null = null
	redirectToPath: URL | string = ''
	isFetching: boolean = true

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
				this.setUser(res.data);
			} else {
				this.logout();
			}
		}
		this.isFetching = false;
	}

	setUser = (user:User) => {
		this.user = user;
	}

	setIsLoggedIn = (state: boolean) => {
		this.isLoggedIn = state;
		this.redirectToPath = ''
	}

	setRedirectPath = (path: URL | string)=> {
		this.redirectToPath = path
	}

	logout = ()=> {
		this.isLoggedIn = false;
		this.user = null;
		deleteCookie('accessToken');
		this.setRedirectPath('/auth/login');
	}
}

const AuthStore = new Auth()
export default AuthStore