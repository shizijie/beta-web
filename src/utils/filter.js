import router from '../router'
import { getToken } from './user'

router.beforeEach((to,from,next)=>{
    if(to.path ==='/login'){
        if(getToken()){
            next({path: '/test'})
        }else{
            next()
        }
    }else{
        if(getToken()){
            next()
        }else{
            next({path: '/login'})
        }
    }
})