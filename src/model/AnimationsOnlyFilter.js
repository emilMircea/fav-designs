import allImages from './images';
import _ from 'lodash';

const animationOnlyArr = Object.keys(allImages)
  .map( (key) => {
      if (allImages[key].category === 'gif') {
        return allImages[key];
      }
      return false;
    }
  )
const animationOnly = animationOnlyArr.filter((obj) => obj.category === 'gif');

export default animationOnly;
