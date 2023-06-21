export const UserInsert_ = async (user) => {
        const response = await fetch(
            'http://localhost:4444/user/insert', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            }
        );
        const userInsert = await response.json();
        return userInsert;
    }

export const UserDelete_ = async (user) => {
    const response = await fetch(
        'http://localhost:4444/user/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }
    )
    const UserDelete = await response.json()
    return UserDelete
}

export const UserUpdate_ = async (user) => {
    const response = await fetch(
        'http://localhost:4444/user/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }
    )
    const UserUpdate = await response.json()
    return UserUpdate
}

export const UserList_ = async () => {
    const response = await fetch(
        'http://localhost:4444/user/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const UserList = await response.json()
    return UserList
}

export const UserEmail_ = async () => {
    const response = await fetch(
        'http://localhost:4444/user/info_email', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const UserEmail = await response.json()
    return UserEmail
}