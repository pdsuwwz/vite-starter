
import { sleep } from '@/utils/request'
import {
  createProject,
  getProjectDetail,
  getProjectList,
  updateTogglePublishStatus
} from '@/modules/Project/api'
import MUTATION from '@/modules/Project/store/mutations-type'
import mixin from '@/store/utils/mixin'
import {
  projectDetail,
  projectList
} from '@/modules/Project/data'

const ProjectModule = {
  namespaced: true,
  _name: 'Project',
  state: {
    demoList: {},
    projectList: [],
    projectDetail: {
      corpName: '',
      createTime: '',
      id: '',
      isPublished: true,
      name: '',
      notes: ''
    }
  },
  getters: {
    demoList: state => state.demoList
  },
  actions: {
    async getSearchProjectByQuery ({ commit }, query) {
      await sleep(400)
      const res = await getProjectList(query)
      return this.filterResponse(res, null, () => {})
    },
    async getProjectList ({ commit }, params) {
      await sleep(400)
      // const res = await getProjectList(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {
          projectList
        }
      }
      return this.filterResponse(res, () => {
        commit(MUTATION.SET_PROJECT_LIST, res.data.projectList)
      }, () => {})
    },
    async createProject ({ state, commit }, params) {
      // const res = await createProject(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {}
      }
      await sleep(1000)
      return this.filterResponse(res, () => {
        state.projectList.push(JSON.parse(JSON.stringify(projectDetail)))
      })
    },
    async updateTogglePublishStatus ({ commit }, params) {
      const res = await updateTogglePublishStatus(params)
      return this.filterResponse(res, null)
    }
  },
  mutations: {
    [MUTATION.SET_PROJECT_LIST] (state, projectList) {
      state.projectList = projectList
    }
  },
  ...mixin
}

export default ProjectModule
