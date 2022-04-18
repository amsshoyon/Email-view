import { makeAutoObservable } from 'mobx'
import { Notify } from '@utils/common';
import { Service as ServiceType } from '@types/types';
import { getAllService } from 'requests/services';
import { getCookie } from '@utils/clientSideCookies';

class Service {
	services: ServiceType[] = [];

	constructor() {
		makeAutoObservable(this);
        const token = getCookie('accessToken');
		if(token) this.getServices();
	}

	getServices = async () => {
		let res = await getAllService();
		if (res?.statusCode === 200) {
			this.services = res.data;
        } else {
            Notify(res?.message, 'error');
        }
	}

	addService = (service: ServiceType) => {
		this.services.push(service);
	}

}

const ServiceStore = new Service()
export default ServiceStore