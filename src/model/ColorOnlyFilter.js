import React, { Component } from 'react';
import allImages from './images'

const colorOnly = Object.keys(allImages)
  .map( (key) => {
      if (allImages[key].category === 'color') {
        return allImages[key]
      } else {
        return 'category color not found'
      }
    }
  )
console.log(colorOnly);

export default colorOnly;
