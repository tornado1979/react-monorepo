import React from "react";

import Item from '../Item'

import './index.css'

const Category = ({chapter}) => {
  console.info('scenes:', chapter)
  const items = chapter.scenes.map(scene => <Item scene={scene} key={scene.id} />)
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
