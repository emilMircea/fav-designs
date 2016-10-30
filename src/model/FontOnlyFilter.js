import allImages from './images';

const fontOnlyArr = Object.keys(allImages)
  .map( (key) => {
    return allImages[key];
    }
  )

const fontOnly = fontOnlyArr.filter((obj) => obj.category === 'font' );

export default fontOnly;
