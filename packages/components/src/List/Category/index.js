import React from "react";

import Item from '../Item'

import './index.css'

const Category = ({chapter, click, sceneItemSelected}) => {
  const items = chapter.scenes.map(scene => <Item
     scene={scene}
      key={scene.id}
      click={click}
      sceneItemSelected={sceneItemSelected}
      ChapterName={chapter.name}
      ChapterDescr={chapter.description}
      />)
    return (
      <div className="chapter">
        <div className="category">
          <span>{chapter.name}</span>
        </div>
          {items}
      </div>
    );
  };

export default Category
