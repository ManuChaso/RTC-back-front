import axios from "axios"

export default async function fetchApi(endpoint, method = 'GET', body = null){
    try {
        const response = await fetch(`http://localhost:3000${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });

        const res = await response.json()
        console.log(res)
        return res.events

    } catch (error) {
        console.log(error)
    }
}