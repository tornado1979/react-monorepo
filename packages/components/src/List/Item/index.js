import React from "react";
//import { Text, View } from "react-native";

import './index.css'

const Item = ({scene}) => {
    return (
      <div className="item">
        <span>{scene.name}</span>
      </div>
    );
  };

export default Item
