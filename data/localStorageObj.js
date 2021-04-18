const localStorageObj = (function(){
    const _setToken = (access, refresh) => {
        localStorage.setItem('access', access)
        localStorage.setItem('refresh', refresh)
    }
    const _getAccess = () => {
        return localStorage.getItem('access')
    }
    const _updateAccess = (newAccess) => {
        localStorage.setItem('access', newAccess)
    }
    const _getRefresh = () => {
        return localStorage.getItem('refresh')
    }
    const _clearToken = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
    }
    return {
        _setToken, _getAccess, _updateAccess, _getRefresh, _clearToken
    }

})()