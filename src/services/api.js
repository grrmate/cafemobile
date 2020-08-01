import { create } from 'apisauce'

const api = create({
    baseURL: 'https://af80632d1ae0.ngrok.io',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default api