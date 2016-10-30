import allImages from './images'

const colorOnlyArr = Object.keys(allImages)
  .map( (key) => {
      if (allImages[key].category === 'color') {
        return allImages[key]
      }
      return false
    }
  )

const colorOnly = colorOnlyArr.filter((obj) => obj.category === 'color')

export default colorOnly;
