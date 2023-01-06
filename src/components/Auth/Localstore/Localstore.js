const saveTokenLocalStorage = (value) => {

    localStorage.setItem('userToken', value)

};
const saveRoleLocalStorage = (value) => {

    localStorage.setItem('userRole', value)

};

module.exports={saveTokenLocalStorage,saveRoleLocalStorage}
