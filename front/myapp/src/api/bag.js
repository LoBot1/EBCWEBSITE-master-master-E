export const BagInsert_ = async (bag) => {
    const response = await fetch(
        'http://localhost:4444/bag/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bag)
        }
    )
    const BagInsert = await response.json()
    return BagInsert
}

export const BagDelete_ = async (bag) => {
    const response = await fetch(
        'http://localhost:4444/bag/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bag)
        }
    )
    const BagDelete = await response.json()
    return BagDelete
}

export const BagUpdate_ = async (bag) => {
    const response = await fetch(
        'http://localhost:4444/bag/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bag)
        }
    )
    const BagUpdate = await response.json()
    return BagUpdate
}

export const BagList_ = async () => {
    const response = await fetch(
        'http://localhost:4444/bag/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const BagList = await response.json()
    return BagList
}

export const BagInform_ = async () => {
    const response = await fetch(
        'http://localhost:4444/bag/info', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const BagList = await response.json()
    return BagList
}
