import axios from 'axios'

class HttpClient{
    constructor(){
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000/api',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
    }
 x
    async getData (url, data = String.empty) {
        try {
            const response = await this.axiosInstance.get(`/${url}`, {
                params: {
                    data
                }
            })

            return response.data

        }catch(error){
            console.log("Error appeared while trying to fetch data : ", error)
        }
    }

    async postData (url, data = String.empty) {
        try {
            const response = await this.axiosInstance.post(`/${url}`, { data } )

            return response.data

        }catch(error){
            console.log("Error appeared while trying to submit data : ", error)
        }
    }
}

export default new HttpClient()