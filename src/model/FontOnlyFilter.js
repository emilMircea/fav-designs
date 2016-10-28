import React, { Component } from 'react';
import allImages from './images'

const fontOnly = Object.keys(allImages)
  .map( (key) => {
      if (allImages[key].category === 'font') {
        return allImages[key]
      } else {
        return 'category font not found'
      }
    }
  )
console.log(fontOnly);

export default fontOnly;
