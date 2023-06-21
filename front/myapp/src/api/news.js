export const NewsInsert_ = async (News) => {
    const response = await fetch(
        'http://localhost:4444/News/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(News)
        }
    )
    const NewsInsert = await response.json()
    return NewsInsert
}

export const NewsDelete_ = async (News) => {
    const response = await fetch(
        'http://localhost:4444/News/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(News)
        }
    )
    const NewsDelete = await response.json()
    return NewsDelete
}

export const NewsUpdate_ = async (News) => {
    const response = await fetch(
        'http://localhost:4444/News/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(News)
        }
    )
    const NewsUpdate = await response.json()
    return NewsUpdate
}

export const NewsList_ = async () => {
    const response = await fetch(
        'http://localhost:4444/News/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const NewsList = await response.json()
    return NewsList
}

