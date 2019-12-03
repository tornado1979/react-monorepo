import React from "react";

import Category from './Category'
import './list.css'

const List = ({data}) => {
    const list = data.map(chapter => <Category chapter={chapter} key={chapter._id} />)
    return (
      <div className="list">
        <div className="title">Lesson name</div>
        {list}
      </div>
    );
  };

export default List
