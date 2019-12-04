import React, { useState, useContext } from "react";
//import { Text, View } from "react-native";
import classNames from 'classnames'
import './index.scss'

const Item = ({sceneItemSelected, scene, click, ChapterName, ChapterDescr}) => {
  //const [isSelected, setSelected] = useState(true) // default selected 1st scene

    function setSelected(sceneId){
      click({
        sceneId,
        ChapterName,
        ChapterDescr
      })
    }

    const style = classNames({
      "scene": true,
      "scene-item-selected": sceneItemSelected === scene.id 
    });

    return (
      <li className={style} key={scene.id} onClick={() => setSelected(scene.id)} >
        <div className="scene-icon">
											<div className="circle"></div>
										</div>
										<div className="scene-info">
											<span>{scene.name}</span>
										</div>
      </li>
    );
  };

export default Item
