import { makeAutoObservable } from 'mobx'
import { Notify } from '@utils/common';
import { getCookie } from '@utils/clientSideCookies';
import { getAllProject } from 'requests/projects';
import { Project as ProjectType } from 'types'

class Project {
	projects: ProjectType[] = [];

	constructor() {
		makeAutoObservable(this);
        const token = getCookie('accessToken');
		if(token) this.getProjects();
	}

	getProjects = async () => {
		let res = await getAllProject();
		if (res?.statusCode === 200) {
			this.projects = res.data;
        } else {
            Notify(res?.message, 'error');
        }
	}

	addProject = (project: ProjectType) => {
		this.projects.push(project);
	}

}

const ProjectStore = new Project()
export default ProjectStore