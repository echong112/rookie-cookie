import React from 'react';
import styled from 'styled-components'

const ImageGrid = ({showImageList, featuredimageList, onSelectFeaturedImage}) => {
  const selectFeaturedImage = (url) => {
    onSelectFeaturedImage(url);
  }
  return (
    <ImageListContainer>
      {showImageList && featuredimageList.map((image, i) => {
        return (
          <ImageListThumbnail
            key={i}
            onClick={e => selectFeaturedImage(image.urls.regular)}
            src={image.urls.thumb}/>
        );
      })}
  </ImageListContainer>
  )
}
export default ImageGrid

const ImageListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`
const ImageListThumbnail = styled.img`
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 8px 8px 8px 0;
  cursor: pointer;
`
