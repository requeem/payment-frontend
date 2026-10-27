import fetches from '@siberiacancode/fetches'

export const api = fetches.create({
   baseURL: 'http://localhost:4000'
})

api.interceptors.request.use((config) => {
   config.credentials = 'include'
   return config
})
