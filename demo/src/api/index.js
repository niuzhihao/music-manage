import request from '@/utils/request'


const api={
    user:{
        login:data=>request.post('/api/login',data),
        registry:data=>request.post('/api/registry',data)
    },
    list:{
        listmusic:data=>request.get('/api/querymusic',data),
        addlistmusic:data=>request.post('/api/addmusic',data),
        removemusic:data=>request.get('/api/deletemusic',data)
    }
}

export default api