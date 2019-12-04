import React from "react";

import Category from './Category'
import './list.scss'

const List = ({data, handleClick, sceneItemSelected}) => {
    const list = data.map(chapter => <Category chapter={chapter} key={chapter._id} click={handleClick} sceneItemSelected={sceneItemSelected} />)
    return (
      <>
        <div className="header">
          <div className="title">Lesson name</div>
        </div>
        <div className="list">
          <ul>
            {list}
          </ul>
        </div>
      </>
    );
  };

export default List
