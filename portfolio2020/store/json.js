import jsonData from '~/assets/json/works.json'


//状態管理
export const state = () => ({
  data: jsonData,
})


//getters
export const getters = {
  getAll(state){
    return state.json
  }
}