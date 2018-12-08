import Vue from 'vue'

const APP_TOKEN = 'TOKEN'

export const ls = {
    set(key, value) {
        if (!key || !value) return
        window.localStorage[key] = JSON.stringify(value)
    },
    get(key) {
        if (!key) return null
        const _key = window.localStorage[key]
        if (!_key) return null
        return JSON.parse(_key)
    }
}


export const getToken = () => ls.get(APP_TOKEN)

export const setToken = token => ls.set(APP_TOKEN, token)

export function resetState(state){
    if(state['initState']){
        for(let key in state){
            if(key !== 'initState'){
                Vue.delete(state,key)
            }
        }
        let {keys}=Object
        for(let key of keys(state['initState'])){
            Vue.set(state,key,state['initState'][key])
        }
    }else{
        return false
    }
}