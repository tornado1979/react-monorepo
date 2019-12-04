import React, { useEffect, useState } from 'react'
import { List, Panel } from '@pr/components'
import { fetchData } from '@pr/service-api'
import {
    BigPlayButton,
    ClosedCaptionButton,
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
  } from 'video-react';

import './index.scss'

const defaultData = [{
    _id: 1234,
    name: 'lesson name',
    role: 'lesson description',
    scenes:[{
      id: 123,
      name: 'chapter name'
    }]
  }]

  const divStyle={
      width: '100%'
    }

export default () => {
    const [chapters, setChapters] = useState(defaultData);
    const [sceneItemSelected, setSceneItemSelected] = useState();
    const [activeChapter, setActiveChapter] = useState({})

    // update the selected scene
    // update the active chapter
    function handleClick(values){
        setSceneItemSelected(values.sceneId)
        setActiveChapter({
            ChapterName: values.ChapterName,
            ChapterDescr: values.ChapterDescr
        })
    }

    useEffect(() => {
        fetchData()
            .then(data =>
            {	
                setChapters({data: JSON.parse(data).chapters});
            }
            )
            .catch(error => console.log('error:', error))
    },[])

    return(
        <div className="main">
            <div className="row">
                <div className="col-1">
                    {!chapters && <div>Loading...</div>}
                    {chapters && <List data={chapters.data || chapters} handleClick={handleClick} sceneItemSelected={sceneItemSelected}/>}
                </div>
                <div className="col-2">
                    <Player autoPlay={false} src="http://media.circusstreet.com/mobile-marketing-part-1-v3/video/S1_1-171025.mp4">
                        <BigPlayButton position="center" />
                        <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={30} order={1.2} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton enabled />
                            <ClosedCaptionButton order={7} />
                        </ControlBar>
                    </Player>
                </div>
            </div>
            <div className="row">
                <div style={divStyle}>
                    <Panel title={activeChapter.ChapterName} text={activeChapter.ChapterDescr} />
                </div>
            </div>
        </div>
    )
}