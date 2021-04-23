
const localStorageObj = (function(){
    function _setToken(access, refresh){
        localStorage.setItem('access', access)
        localStorage.setItem('refresh', refresh)
    }
    function _updateAccess(accessToken){
        localStorage.setItem('access', accessToken)
    }
    function _getAccessToken(){
        return localStorage.getItem('access')
    }
    function _getRefreshToken(){
        return localStorage.getItem('refresh')
    }
    function _clearToken(){
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
    }
    return {
        _setToken, _getAccessToken, _getRefreshToken, _clearToken, _updateAccess
    }
})();


export default localStorageObj