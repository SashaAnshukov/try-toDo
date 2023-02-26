export class Api {

    constructor({adress}) {
        this._adress = adress;
    }
    
    upload (file) {
        const data = new FormData()
        data.append('file', file)

        return fetch(this._adress, {
            method: 'POST',
            mode: 'cors',
            body: data,
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.status)
            }
        })
    }
}

const api = new Api({
    adress: 'https://file.io/?expires=1w'
})

export default api