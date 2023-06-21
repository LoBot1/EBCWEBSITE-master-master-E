export const User_resaInsert_ = async (user_resa) => {
    const response = await fetch(
        'http://localhost:4444/user_resa/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user_resa)
        }
    )
    const User_resaInsert = await response.json()
    return User_resaInsert
}

export const User_resaDelete_ = async (user_resa) => {
    const response = await fetch(
        'http://localhost:4444/user_resa/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user_resa)
        }
    )
    const User_resaDelete = await response.json()
    return User_resaDelete
}

export const User_resaUpdate_ = async (user_resa) => {
    const response = await fetch(
        'http://localhost:4444/user_resa/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user_resa)
        }
    )
    const User_resaUpdate = await response.json()
    return User_resaUpdate
}

export const User_resaList_ = async () => {
    const response = await fetch(
        'http://localhost:4444/user_resa/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const User_resaList = await response.json()
    return User_resaList
}

export const User_resaInform_ = async () => {
    const response = await fetch(
        'http://localhost:4444/user_resa/info', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const User_resaInfo = await response.json()
    return User_resaInfo
}

export const User_resaAdminInform_ = async () => {
    const response = await fetch(
        'http://localhost:4444/user_resa/admin_info', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const User_resaAdminIInfo = await response.json()
    return User_resaAdminIInfo
}
