import React, { useEffect, useState } from 'react'
import { List } from '@pr/components'
import { fetchData } from '@pr/service-api'
//import { Player } from 'video-react';

import './index.css'

const defaultData = [{
    _id: 1234,
    name: 'lesson name',
    role: 'lesson description',
    scenes:[{
      id: 123,
      name: 'chapter name'
    }]
  }]

export default () => {
    const [chapters, setChapters] = useState(defaultData);

    useEffect(() => {
        fetchData()
            .then(data =>
            {	
                setChapters({data: JSON.parse(data).chapters});
                console.log('****', JSON.parse(data).chapters)
            }
            )
            .catch(error => console.log('error:', error))
    },[])

    console.log('1st:', chapters)
    return(
        <div className="main">
            <div className="col-1">
                {!chapters && <div>Loading...</div>}
                {chapters && <List data={chapters.data || chapters} />}
            </div>
            <div className="col-2">
        column 2nd
            </div>
        </div>
    )
}