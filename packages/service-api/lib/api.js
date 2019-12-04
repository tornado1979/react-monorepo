// API requests to the endpoints
import {
    lessonId,
    LESSON_CHAPTERS_ENDPOINT,
    TOKEN
} from './config'

import mockData from '../mock-data/data.js'

let headers = {"Content-Type": "application/json"}

headers.Authorization = `Token ${TOKEN}`;

export const fetchData = async () => {
    let response;
    try{
        response = await fetch(`${LESSON_CHAPTERS_ENDPOINT}${lessonId}`,{headers})
        const data = await response.json()
        if(response.status === 401){
            return JSON.stringify(mockData)
        }

        return JSON.stringify(data)
    }catch(error){
        console.log('error:', error)
    }
}
 